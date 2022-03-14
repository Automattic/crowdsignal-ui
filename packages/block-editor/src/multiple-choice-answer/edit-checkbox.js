/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { FormCheckbox } from '@crowdsignal/blocks';
import { useColorStyles } from '@crowdsignal/styles';

const EditCheckboxAnswer = ( {
	attributes,
	className,
	multipleChoice,
	onChange,
	onReplace,
	onSplit,
	onDelete,
} ) => (
	<FormCheckbox.Label
		as={ 'div' }
		className={ className }
		style={ useColorStyles( attributes ) }
	>
		<FormCheckbox type={ multipleChoice ? 'checkbox' : 'radio' } />

		<RichText
			placeholder={ __( 'Enter an answer', 'block-editor' ) }
			multiline={ false }
			preserveWhiteSpace={ false }
			onChange={ onChange }
			onReplace={ onReplace }
			onSplit={ onSplit }
			onRemove={ onDelete }
			value={ attributes.label }
			allowedFormats={ [] }
			withoutInteractiveFormatting
		/>
	</FormCheckbox.Label>
);

export default EditCheckboxAnswer;
