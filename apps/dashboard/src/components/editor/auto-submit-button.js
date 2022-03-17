/**
 * External dependencies
 */
import { createBlock } from '@wordpress/blocks';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { flatten, includes, map } from 'lodash';

/**
 * Internal dependencies
 */
import {
	multipleChoiceAnswerBlock,
	multipleChoiceQuestionBlock,
	ratingScaleQuestionBlock,
	textQuestionBlock,
	textInputBlock,
	submitButtonBlock,
} from '@crowdsignal/block-editor';

const FORM_BLOCKS = map(
	[
		multipleChoiceAnswerBlock,
		multipleChoiceQuestionBlock,
		ratingScaleQuestionBlock,
		textQuestionBlock,
		textInputBlock,
	],
	'name'
);

/**
 * Returns a flat array of all block names, including child-blocks
 *
 * @param  {Array} blocks Blocks
 * @return {Array}        Block names
 */
const flattenBlocksNames = ( blocks ) => {
	if ( blocks.length === 0 ) {
		return [];
	}

	return flatten(
		blocks.map( ( block ) => [
			block.name,
			...flattenBlocksNames( block.innerBlocks ),
		] )
	);
};

const AutoSubmitButton = () => {
	const [ currentFormBlocks, setCurrentFormBlocks ] = useState( 0 );

	const { insertBlock } = useDispatch( 'core/block-editor' );
	const { formBlocks, submitButtonBlocks, totalBlocks } = useSelect(
		( select ) => {
			const blocks = select( 'core/block-editor' ).getBlocks();
			const blockNames = flattenBlocksNames( blocks );

			return {
				totalBlocks: blocks.length,
				formBlocks: blockNames.filter( ( blockName ) =>
					includes( FORM_BLOCKS, blockName )
				).length,
				submitButtonBlocks: blockNames.filter(
					( blockName ) => blockName === submitButtonBlock.name
				).length,
			};
		}
	);

	useEffect( () => {
		if (
			currentFormBlocks === 0 &&
			formBlocks !== 0 &&
			submitButtonBlocks === 0
		) {
			insertBlock(
				createBlock( 'core/paragraph' ),
				totalBlocks + 1,
				'',
				false
			);

			insertBlock(
				createBlock( submitButtonBlock.name ),
				totalBlocks + 2,
				'',
				false
			);
		}

		if ( currentFormBlocks !== formBlocks ) {
			setCurrentFormBlocks( formBlocks );
		}
	}, [ currentFormBlocks, formBlocks, submitButtonBlocks ] );

	return null;
};

export default AutoSubmitButton;
