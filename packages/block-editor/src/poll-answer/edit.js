/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { Button } from '@crowdsignal/blocks';
import { useClientId } from '@crowdsignal/hooks';
import Sidebar from './sidebar';

const PollAnswer = ( props ) => {
	const { attributes, className, onReplace, setAttributes } = props;

	useClientId( { attributes, setAttributes } );

	const handleChangeLabel = ( label ) => setAttributes( { label } );

	const handleSplit = ( label ) =>
		createBlock( 'crowdsignal-forms/poll-answer', {
			...attributes,
			clientId:
				label && attributes.label.indexOf( label ) === 0
					? attributes.clientId
					: undefined,
			label,
		} );

	const width = attributes.width ? `${ attributes.width }%` : null;

	const classes = classnames(
		'crowdsignal-forms-poll-answer-block',
		className
	);

	return (
		<>
			<Sidebar { ...props } />

			<Button
				attributes={ attributes }
				as={ RichText }
				className={ classes }
				style={ {
					width,
				} }
				placeholder={ __( 'Enter an answer', 'blocks' ) }
				multiline={ false }
				preserveWhiteSpace={ false }
				onChange={ handleChangeLabel }
				onReplace={ onReplace }
				onSplit={ handleSplit }
				value={ attributes.label }
				allowedFormats={ [] }
				withoutInteractiveFormatting
			/>
		</>
	);
};

export default PollAnswer;
