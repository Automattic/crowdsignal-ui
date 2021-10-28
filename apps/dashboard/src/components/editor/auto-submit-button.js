/**
 * External dependencies
 */
import { createBlock } from '@wordpress/blocks';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { filter, includes, map, size } from 'lodash';

/**
 * Internal dependencies
 */
import {
	multipleChoiceAnswerBlock,
	multipleChoiceQuestionBlock,
	textQuestionBlock,
	submitButtonBlock,
} from '@crowdsignal/block-editor';

const FORM_BLOCKS = map(
	[
		multipleChoiceAnswerBlock,
		multipleChoiceQuestionBlock,
		textQuestionBlock,
	],
	'name'
);

const AutoSubmitButton = () => {
	const [ currentFormBlocksCount, setCurrentFormBlocksCount ] = useState( 0 );

	const { insertBlock } = useDispatch( 'core/block-editor' );
	const { formBlocksCount, lastBlockIndex, submitButtonCount } = useSelect(
		( select ) => {
			const blockEditorData = select( 'core/block-editor' );

			return {
				formBlocksCount: size(
					filter(
						map(
							blockEditorData.getClientIdsWithDescendants(),
							blockEditorData.getBlockName
						),
						( blockName ) => includes( FORM_BLOCKS, blockName )
					)
				),
				lastBlockIndex: blockEditorData.getBlocks().length - 1,
				submitButtonCount: blockEditorData.getGlobalBlockCount(
					submitButtonBlock.name
				),
			};
		}
	);

	useEffect( () => {
		if (
			currentFormBlocksCount === 0 &&
			formBlocksCount !== 0 &&
			submitButtonCount === 0
		) {
			insertBlock(
				createBlock( submitButtonBlock.name ),
				lastBlockIndex + 1,
				'',
				false
			);
		}

		if ( currentFormBlocksCount !== formBlocksCount ) {
			setCurrentFormBlocksCount( formBlocksCount );
		}
	}, [ currentFormBlocksCount, formBlocksCount, submitButtonCount ] );

	return null;
};

export default AutoSubmitButton;
