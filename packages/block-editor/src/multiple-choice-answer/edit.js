/**
 * External dependencies
 */
import { createBlock } from '@wordpress/blocks';
import { compose } from '@wordpress/compose';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { MultipleChoiceQuestion, getBlockStyle } from '@crowdsignal/blocks';
import { useClientId } from '@crowdsignal/hooks';
import { useParentAttributes } from '../util/use-parent-attributes';
import { withSharedSiblingAttributes } from '../util/with-shared-sibling-attributes';
import EditButtonAnswer from './edit-button';
import EditCheckboxAnswer from './edit-checkbox';
import Sidebar from './sidebar';

const EditMultipleChoiceAnswer = ( props ) => {
	const { attributes, className, clientId, onReplace, setAttributes } = props;

	const { removeBlock } = useDispatch( 'core/block-editor' );

	const answersCount = useSelect(
		( select ) => {
			const { getBlockCount, getBlockRootClientId } = select(
				'core/block-editor'
			);

			const questionClientId = getBlockRootClientId( clientId );
			return getBlockCount( questionClientId );
		},
		[ clientId ]
	);

	const questionAttributes = useParentAttributes( clientId );

	useClientId( { attributes, setAttributes } );

	const handleChangeLabel = ( label ) => setAttributes( { label } );

	const handleSplit = ( label ) =>
		createBlock( 'crowdsignal-forms/multiple-choice-answer', {
			...attributes,
			clientId:
				label && attributes.label.indexOf( label ) === 0
					? attributes.clientId
					: undefined,
			label,
		} );

	const handleDelete = () => {
		if ( answersCount <= 2 ) {
			return;
		}

		removeBlock( clientId );
	};

	const blockStyle = getBlockStyle( questionAttributes.className );

	return (
		<>
			<Sidebar blockStyle={ blockStyle } { ...props } />

			{ blockStyle === MultipleChoiceQuestion.Style.LIST && (
				<EditCheckboxAnswer
					attributes={ attributes }
					className={ className }
					multipleChoice={ questionAttributes.maximumChoices !== 1 }
					onChange={ handleChangeLabel }
					onReplace={ onReplace }
					onSplit={ handleSplit }
				/>
			) }

			{ blockStyle === MultipleChoiceQuestion.Style.BUTTON && (
				<EditButtonAnswer
					attributes={ attributes }
					className={ className }
					multipleChoice={ questionAttributes.maximumChoices !== 1 }
					onChange={ handleChangeLabel }
					onReplace={ onReplace }
					onSplit={ handleSplit }
					onDelete={ handleDelete }
				/>
			) }
		</>
	);
};

export default compose(
	withSharedSiblingAttributes( [
		'backgroundColor',
		'gradient',
		'textColor',
		'width',
	] )
)( EditMultipleChoiceAnswer );
