/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { TextareaControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { useClientId } from '@crowdsignal/hooks';

const FreeText = ( props ) => {
	const { attributes, setAttributes } = props;

	useClientId( props );

	const handleChangeQuestion = ( question ) => setAttributes( { question } );

	const handleChangeNote = ( note ) => setAttributes( { note } );

	return (
		<>
			<RichText
				tagName="h3"
				placeholder={ __( 'Enter your question', 'blocks' ) }
				onChange={ handleChangeQuestion }
				value={ attributes.question }
			/>
			<TextareaControl
				rows={ 6 }
				onChange={ handleChangeNote }
				value={ attributes.note }
			/>
		</>
	);
};

export default FreeText;
