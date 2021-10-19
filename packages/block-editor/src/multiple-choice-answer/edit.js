/**
 * External dependencies
 */
import { createBlock } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { MultipleChoiceQuestion, getBlockStyle } from '@crowdsignal/blocks';
import { useClientId } from '@crowdsignal/hooks';
import { useParentAttributes } from '../util/use-parent-attributes';
import EditButtonAnswer from './edit-button';
import EditCheckboxAnswer from './edit-checkbox';
import Sidebar from './sidebar';

const EditMultipleChoiceAnswer = ( props ) => {
	const { attributes, className, clientId, onReplace, setAttributes } = props;

	const questionAttributes = useParentAttributes( clientId );

	useClientId( { attributes, setAttributes } );

	const handleChangeLabel = ( label ) => setAttributes( { label } );

	const handleSplit = ( label ) =>
		createBlock( 'crowdsignal-forms/answer', {
			...attributes,
			clientId:
				label && attributes.label.indexOf( label ) === 0
					? attributes.clientId
					: undefined,
			label,
		} );

	const blockStyle = getBlockStyle( questionAttributes.className );

	return (
		<>
			<Sidebar { ...props } />

			{ blockStyle === MultipleChoiceQuestion.Style.CHECKBOX && (
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
				/>
			) }
		</>
	);
};

export default EditMultipleChoiceAnswer;
