/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { useColorStyles } from '@crowdsignal/styles';
import { FormTextInput } from '../components';

const TextInput = ( { attributes } ) => {
	return (
		<div style={ { ...useColorStyles( attributes ) } }>
			<RichText.Content value={ attributes.label } />
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
