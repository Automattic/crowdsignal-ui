/**
 * External dependencies
 */
import { RawHTML } from '@wordpress/element';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { useColorStyles } from '@crowdsignal/styles';
import { ErrorMessage, FormInputWrapper } from '../components';
import { useField } from '@crowdsignal/form';

const UploadBlock = ( { attributes, className } ) => {
	const { inputProps, error } = useField( {
		name: `q_${ attributes.clientId }_upload`,
		type: 'file',
	} );

	const classes = classnames( className, 'crowdsignal-forms-upload-block', {
		'is-required': attributes.mandatory,
		'is-error': error,
	} );

	return (
		<FormInputWrapper
			className={ classes }
			style={ { ...useColorStyles( attributes ) } }
		>
			<FormInputWrapper.Label className="crowdsignal-forms-upload-block__label">
				<RawHTML>{ attributes.label }</RawHTML>
			</FormInputWrapper.Label>
			<input { ...inputProps } />
			{ error && <ErrorMessage>{ error }</ErrorMessage> }
		</FormInputWrapper>
	);
};

UploadBlock.blockName = 'crowdsignal-forms/upload-block';

export default UploadBlock;
