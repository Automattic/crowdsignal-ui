/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { Button } from '@crowdsignal/blocks';
import Sidebar from './sidebar';
import classnames from 'classnames';

const SubmitButton = ( props ) => {
	const { attributes, className, onReplace, setAttributes } = props;

	const handleChangeLabel = ( label ) => setAttributes( { label } );

	const classes = classnames(
		className,
		'crowdsignal-forms-submit-button-block'
	);

	return (
		<>
			<Sidebar { ...props } />

			<Button
				attributes={ attributes }
				as={ RichText }
				className={ classes }
				placeholder={ __( 'Submit', 'blocks' ) }
				multiline={ false }
				preserveWhiteSpace={ false }
				onChange={ handleChangeLabel }
				onReplace={ onReplace }
				value={ attributes.label }
				allowedFormats={ [] }
				withoutInteractiveFormatting
			/>
		</>
	);
};

export default SubmitButton;
