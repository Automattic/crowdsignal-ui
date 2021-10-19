/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import {
	Button,
	FormCheckbox,
	MultipleChoiceQuestion,
	getBlockStyle,
} from '@crowdsignal/blocks';
import { useClientId } from '@crowdsignal/hooks';
import { useParentAttributes } from '../util/use-parent-attributes';
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

	const width = attributes.width ? `${ attributes.width }%` : null;

	return (
		<>
			<Sidebar { ...props } />

			{ blockStyle === MultipleChoiceQuestion.Style.CHECKBOX && (
				<FormCheckbox.Label as={ 'div' } className={ className }>
					<FormCheckbox
						type={
							questionAttributes.maximumChoices === 1
								? 'radio'
								: 'checkbox'
						}
					/>

					<RichText
						placeholder={ __( 'Enter an answer', 'blocks' ) }
						multiline={ false }
						preserveWhiteSpace={ false }
						onChange={ handleChangeLabel }
						onReplace={ onReplace }
						onSplit={ handleSplit }
						value={ attributes.label }
						allowedFormats={ [] }
						withoutInteractiveFormatting
					/>
				</FormCheckbox.Label>
			) }

			{ blockStyle === MultipleChoiceQuestion.Style.BUTTON && (
				<Button
					attributes={ attributes }
					as={ RichText }
					className={ className }
					style={ {
						width,
					} }
					placeholder={ __( 'Enter an answer', 'blocks' ) }
					multiline={ false }
					preserveWhiteSpace={ false }
					onChange={ handleChangeLabel }
					onReplace={ onReplace }
					onSplit={ handleSplit }
					value={ attributes.label }
					allowedFormats={ [] }
					withoutInteractiveFormatting
				/>
			) }
		</>
	);
};

export default EditMultipleChoiceAnswer;
