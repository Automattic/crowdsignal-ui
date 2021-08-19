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
import { useClientId } from '@crowdsignal/hooks';
import { useColorStyles } from '@crowdsignal/styles';
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

	return (
		<>
			<Sidebar { ...props } />

			<div className={ classnames( className, 'wp-block-button' ) }>
				<RichText
					className="wp-block-button__link"
					style={ {
						...useColorStyles( attributes ),
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
			</div>
		</>
	);
};

export default PollAnswer;
