/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { FormInputWrapper } from '@crowdsignal/blocks';
import Sidebar from './sidebar';
import { useColorStyles } from '@crowdsignal/styles';
import { useClientId } from '@crowdsignal/hooks';

export default ( props ) => {
	const { attributes, className, setAttributes } = props;

	useClientId( props );

	const handleChangeAttribute = ( key ) => ( value ) =>
		setAttributes( { [ key ]: value } );

	const classes = classnames(
		className,
		'crowdsignal-forms-dropdown-input-block',
		{
			'is-required': attributes.mandatory,
		}
	);

	return (
		<FormInputWrapper
			className={ classes }
			style={ { ...useColorStyles( attributes ) } }
		>
			<Sidebar { ...props } />
			<FormInputWrapper.Label className="crowdsignal-forms-dropdown-input-block__label">
				<RichText
					placeholder={ __( 'Enter form label', 'block-editor' ) }
					onChange={ handleChangeAttribute( 'label' ) }
					value={ attributes.label }
				/>
			</FormInputWrapper.Label>
			<div>[Dropdown Here]</div>
		</FormInputWrapper>
	);
};
