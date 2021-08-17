/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { noop } from 'lodash';

/**
 * Internal dependencies
 */
import { useClientId } from '@crowdsignal/hooks';

/**
 * Style dependencies
 */

const PollAnswer = ( { attributes, setAttributes } ) => {
	useClientId( { attributes, setAttributes } );

	const handleChangeLabel = ( label ) => setAttributes( { label } );

	return (
		<div>
			<RichText
				placeholder={ __( 'Enter an answer', 'blocks' ) }
				multiline={ false }
				preserveWhiteSpace={ false }
				onChange={ handleChangeLabel }
				onSplit={ noop }
				onReplace={ noop }
				onRemove={ noop }
				value={ attributes.label }
				allowedFormats={ [] }
				withoutInteractiveFormatting
			/>
		</div>
	);
};

export default PollAnswer;
