/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { map } from 'lodash';
import { useRef } from '@wordpress/element';
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import Button from '../button';

const FileInputWrapper = styled.div`
	display: flex;
	flex-direction: column;

	input[type='file'] {
		display: none;
	}
`;

const FileInputButton = styled( Button )`
	margin-top: 16px;
`;

const FileInputMessage = styled.span`
	padding: 10px 16px;
	border: 1px solid #818181;
	border-radius: 2px;
	font-weight: 400;
	font-size: 13px;
	line-height: 150%;
	color: #818181;
`;

const FileInputFile = styled( FileInputMessage )`
	display: flex;
	justify-content: space-between;
	color: var( --color-text );
`;

const FileInputFileRemove = styled.a`
	display: block;
`;

const FileInput = ( { inputProps, attributes } ) => {
	const { files, onChange } = inputProps;
	const inputFile = useRef( null );

	const handleFileInputClick = ( event ) => {
		event.preventDefault();
		inputFile.current.click();
	};

	const handleFileRemove = () => {
		onChange( { target: { value: null } } );
	};

	return (
		<FileInputWrapper>
			<input { ...inputProps } ref={ inputFile } />
			<FileInputButton onClick={ handleFileInputClick } outline>
				{ attributes.buttonLabel }
			</FileInputButton>
			{ files.length > 0 &&
				map( Array.from( files ), ( file, index ) => (
					<FileInputFile key={ index }>
						<span>{ file.name }</span>
						<FileInputFileRemove onClick={ handleFileRemove }>
							{ __( 'remove', 'blocks' ) }
						</FileInputFileRemove>
					</FileInputFile>
				) ) }
			{ ! files.length && (
				<FileInputMessage>{ attributes.message }</FileInputMessage>
			) }
		</FileInputWrapper>
	);
};

FileInput.Wrapper = FileInputWrapper;
FileInput.Button = FileInputButton;
FileInput.Message = FileInputMessage;

export default FileInput;
