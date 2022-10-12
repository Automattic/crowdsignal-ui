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
	attributes = {},
	className,
	hideCheck = false,
	multipleChoice,
	onChange,
	onReplace,
	onSplit,
	onDelete,
	placeholder = __( 'Enter an answer', 'block-editor' ),
	value,
} ) => (
	<FormCheckbox.Label
		as={ 'div' }
		className={ className }
		style={ useColorStyles( attributes ) }
	>
		{ ! hideCheck && (
			<FormCheckbox type={ multipleChoice ? 'checkbox' : 'radio' } />
		) }

		<RichText
			placeholder={ placeholder }
			multiline={ false }
			preserveWhiteSpace={ false }
			onChange={ onChange }
			onReplace={ onReplace }
			onSplit={ onSplit }
			onRemove={ onDelete }
			value={ value || attributes.label }
			allowedFormats={ [] }
			withoutInteractiveFormatting
		/>
	</FormCheckbox.Label>
);

export default EditCheckboxAnswer;
