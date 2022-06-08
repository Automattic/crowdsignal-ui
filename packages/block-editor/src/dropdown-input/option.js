/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { noop } from 'lodash';

/**
 * Internal dependencies
 */
import { FormDropdownInput } from '@crowdsignal/blocks';

export const DropdownOption = ( { onChange, onSplit, onRemove, value } ) => {
	return (
		<FormDropdownInput.Option>
			<RichText
				value={ value }
				onChange={ onChange }
				onSplit={ onSplit }
				onRemove={ onRemove }
				onReplace={ noop }
				__unstableDisableFormats
			/>
		</FormDropdownInput.Option>
	);
};
