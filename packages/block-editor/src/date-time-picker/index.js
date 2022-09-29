/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import { DateTimePicker } from '@crowdsignal/blocks';
import { DatePickerIcon } from '@crowdsignal/icons';
import attributes from './attributes';
import EditDateTimePicker from './edit';
import variation from './variations';

const settings = {
	apiVersion: 1,
	title: __( 'Date Picker', 'block-editor' ),
	description: __( 'A date picker for your form.', 'block-editor' ),
	category: 'crowdsignal-forms/form',
	keywords: [
		__( 'date', 'block-editor' ),
		__( 'time', 'block-editor' ),
		__( 'calendar', 'block-editor' ),
	],
	icon: <DatePickerIcon />,
	variations: variation,
	edit: EditDateTimePicker,
	attributes,
	example: {
		attributes: {
			label: __( 'Select Date', 'block-editor' ),
		},
	},
};

export default {
	name: DateTimePicker.blockName,
	settings,
};
