/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { useField } from '@crowdsignal/form';
import { FormTextarea, QuestionWrapper } from '../components';

const FreeText = ( { attributes, className } ) => {
	const { inputProps } = useField( {
		name: `q_${ attributes.clientId }`,
	} );

	return (
		<QuestionWrapper attributes={ attributes } className={ className }>
			<RichText.Content tagName="h3" value={ attributes.question } />

			<FormTextarea { ...inputProps } rows={ 6 } />
		</QuestionWrapper>
	);
};

export default FreeText;
