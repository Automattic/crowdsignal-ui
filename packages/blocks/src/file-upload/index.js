/**
 * External dependencies
 */
import { RawHTML } from '@wordpress/element';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { ErrorMessage, FileInput, FormInputWrapper } from '../components';
import { useColorStyles } from '@crowdsignal/styles';
import { useField } from '@crowdsignal/form';
import { __ } from '@wordpress/i18n';

const UploadBlock = ( { attributes, className } ) => {
	const { inputProps, error } = useField( {
		name: `q_${ attributes.clientId }_upload`,
		type: 'file',
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
		'crowdsignal-forms-file-upload-block',
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
			<FormInputWrapper.Label className="crowdsignal-forms-upload-block__label">
				<RawHTML>{ attributes.label }</RawHTML>
			</FormInputWrapper.Label>
			<FileInput attributes={ attributes } inputProps={ inputProps } />
			{ error && <ErrorMessage>{ error }</ErrorMessage> }
		</FormInputWrapper>
	);
};

UploadBlock.blockName = 'crowdsignal-forms/upload-block';

export default UploadBlock;
