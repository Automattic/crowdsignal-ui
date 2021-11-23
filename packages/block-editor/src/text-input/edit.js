/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { FormTextInput } from '@crowdsignal/blocks';
import { useColorStyles } from '@crowdsignal/styles';
import Sidebar from './sidebar';

const TextInput = ( props ) => {
	const { attributes, setAttributes } = props;

	const handleChangeLabel = ( label ) => setAttributes( { label } );

	return (
		<div style={ { ...useColorStyles( attributes ) } }>
			<Sidebar { ...props } />
			<RichText
				placeholder={ __( 'Enter form label', 'blocks' ) }
				onChange={ handleChangeLabel }
				value={ attributes.label }
			/>
			<FormTextInput
				style={ {
					width: `${ attributes.width }%`,
					height: `${ attributes.inputHeight }px`,
				} }
			/>
		</div>
	);
};

export default TextInput;
