/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { FormCheckbox, FormInputWrapper } from '@crowdsignal/blocks';
import { useClientId } from '@crowdsignal/hooks';
import Sidebar from './sidebar';
import { useColorStyles, useBorderStyles } from '@crowdsignal/styles';

const EditCheckbox = ( props ) => {
	const { attributes, className, setAttributes } = props;

	useClientId( props );

	const handleChangeLabel = ( label ) => setAttributes( { label } );

	const classes = classnames(
		className,
		'crowdsignal-forms-checkbox-input',
		'is-inline',
		{
			'is-required': attributes.mandatory,
		}
	);
	return (
		<FormInputWrapper
			style={ {
				...useColorStyles( attributes ),
				...useBorderStyles( attributes ),
			} }
			className={ classes }
		>
			<Sidebar { ...props } />

			<FormCheckbox isMultiSelect />
			<FormInputWrapper.Label className="crowdsignal-forms-checkbox-input-block__label">
				<RichText
					allowedFormats={ [
						'core/bold',
						'core/italic',
						'core/code',
						'core/strikethrough',
						'core/subscript',
						'core/superscript',
					] }
					placeholder={ __( 'Enter text label', 'block-editor' ) }
					onChange={ handleChangeLabel }
					value={ attributes.label }
				/>
			</FormInputWrapper.Label>
		</FormInputWrapper>
	);
};

export default EditCheckbox;
