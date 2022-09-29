/**
 * external dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * internal dependencies
 */
import { TimePickerIcon } from '@crowdsignal/icons';

export default [
	{
		name: 'crowdsignal-forms/time-picker',
		isDefault: false,
		title: __( 'Time Picker', 'block-editor' ),
		description: __(
			'Allow your audience to set a time in your form.',
			'block-editor'
		),
		icon: <TimePickerIcon />,
		attributes: {
			label: __( 'Enter time', 'block-editor' ),
			placeholderText: '12:00 PM',
			showTimeInput: true,
			showTimeSelectOnly: true,
			dateFormat: 'h:mm aa',
		},
		keywords: [
			__( 'time input', 'block-editor' ),
			__( 'clock', 'block-editor' ),
			__( 'hour', 'block-editor' ),
		],
		isActive: ( blockAttributes, variationAttributes ) =>
			blockAttributes.label === variationAttributes.label,
	},
];
