/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { forwardRef } from '@wordpress/element';
import { map } from 'lodash';

/**
 * Internal dependencies
 */
import { FormDropdownInput } from '@crowdsignal/blocks';
import { __ } from '@wordpress/i18n';

export const DropdownPlaceholder = forwardRef( ( { onChange }, ref ) => {
	const messages = [
		__( 'Enter dropdown options.', 'block-editor' ),
		__( 'Each row is one option.', 'block-editor' ),
		__( 'You can paste a list here, too.', 'block-editor' ),
	];

	return (
		<>
			{ map( messages, ( msg, index ) => (
				<FormDropdownInput.Option key={ index }>
					<RichText
						ref={ index === 0 ? ref : null }
						placeholder={ msg }
						onChange={ onChange }
						__unstableDisableFormats
					/>
				</FormDropdownInput.Option>
			) ) }
		</>
	);
} );
