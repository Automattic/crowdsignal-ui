/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { RawHTML } from '@wordpress/element';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { ErrorMessage, FormFileInput, FormInputWrapper } from '../components';
import { useColorStyles } from '@crowdsignal/styles';
import { useField } from '@crowdsignal/form';

const FileInput = ( { attributes, className } ) => {
	const { error, onChange, fieldValue } = useField( {
		fieldName: `q_${ attributes.clientId }_upload`,
		validation: ( files ) => {
			if ( attributes.mandatory && ( ! files || files.length === 0 ) ) {
				return __( 'This field is required', 'blocks' );
			}

			if ( files && files[ 0 ].size > attributes.fileSizeLimit ) {
				return __(
					'File size limit exceeded. Max allowed size is 5MB',
					'blocks'
				);
			}

			const extension = files && files[ 0 ].name.split( '.' ).pop();
			if (
				extension &&
				! attributes.allowedTypes.includes( extension )
			) {
				return __(
					'File type not allowed. Please choose another file',
					'blocks'
				);
			}
		},
	} );

	const classes = classnames(
		className,
		'crowdsignal-forms-file-input-block',
		{
			'is-required': attributes.mandatory,
			'is-error': error,
		}
	);

	return (
		<FormInputWrapper
			className={ classes }
			style={ { ...useColorStyles( attributes ) } }
		>
			<FormInputWrapper.Label className="crowdsignal-forms-file-input-block__label">
				<RawHTML>{ attributes.label }</RawHTML>
			</FormInputWrapper.Label>
			<FormFileInput
				attributes={ attributes }
				files={ fieldValue }
				onChange={ onChange }
			/>
			{ error && <ErrorMessage>{ error }</ErrorMessage> }
		</FormInputWrapper>
	);
};

FileInput.blockName = 'crowdsignal-forms/file-input';

export default FileInput;
