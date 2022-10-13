/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import { TimePicker } from '@crowdsignal/blocks';
import { TimePickerIcon } from '@crowdsignal/icons';
import attributes from './attributes';
import EditTimePicker from './edit';

const settings = {
	apiVersion: 1,
	title: __( 'Time Picker', 'block-editor' ),
	description: __( 'A time picker for your form.', 'block-editor' ),
	category: 'crowdsignal-forms/form',
	keywords: [ __( 'time', 'block-editor' ), __( 'clock', 'block-editor' ) ],
	icon: <TimePickerIcon />,
	edit: EditTimePicker,
	attributes,
	example: {
		attributes: {
			label: __( 'Select Time', 'block-editor' ),
		},
	},
};

export default {
	name: TimePicker.blockName,
	settings,
};
