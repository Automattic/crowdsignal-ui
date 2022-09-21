/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import { DateTimePicker } from '@crowdsignal/blocks';
import { TextInputIcon } from '@crowdsignal/icons';
import attributes from './attributes';
import EditDateTimePicker from './edit';

const settings = {
	apiVersion: 1,
	title: __( 'Date-Time Picker', 'block-editor' ),
	description: __( 'A date picker for your form.', 'block-editor' ),
	category: 'crowdsignal-forms/form',
	keywords: [
		__( 'date', 'block-editor' ),
		__( 'time', 'block-editor' ),
		__( 'calendar', 'block-editor' ),
	],
	icon: <TextInputIcon />,
	edit: EditDateTimePicker,
	attributes,
	example: {
		attributes: {
			label: __( 'Name', 'block-editor' ),
		},
	},
};

export default {
	name: DateTimePicker.blockName,
	settings,
};
