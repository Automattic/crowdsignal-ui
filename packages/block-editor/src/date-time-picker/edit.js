/**
 * External dependencies
 */

import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';
import DatePicker from 'react-datepicker';

/**
 * Internal dependencies
 */
import { FormInputWrapper } from '@crowdsignal/blocks';
import { useColorStyles } from '@crowdsignal/styles';
import Sidebar from './sidebar';
import { useClientId } from '@crowdsignal/hooks';

/**
 * Style dependencies
 */
import { DatePickerPlaceholderStyle } from './styles';

const EditDateTimePicker = ( props ) => {
	const { attributes, setAttributes, className } = props;

	useClientId( props );

	const handleChangeLabel = ( label ) => setAttributes( { label } );

	const classes = classnames(
		className,
		'crowdsignal-forms-date-time-picker-block',
		{
			'is-required': attributes.mandatory,
		}
	);

	return (
		<FormInputWrapper
			style={ { ...useColorStyles( attributes ) } }
			className={ classes }
		>
			<Sidebar { ...props } />
			<FormInputWrapper.Label className="crowdsignal-forms-date-time-picker-block__label">
				<RichText
					placeholder={ __(
						'Enter date picker label',
						'block-editor'
					) }
					onChange={ handleChangeLabel }
					value={ attributes.label }
				/>
			</FormInputWrapper.Label>
			<DatePickerPlaceholderStyle>
				<DatePicker
					selected={ new Date() }
					dateFormat="MMMM d, yyyy"
					popperModifiers={ [
						{
							name: 'arrow',
							options: {
								padding: 100,
							},
						},
					] }
				/>
			</DatePickerPlaceholderStyle>
		</FormInputWrapper>
	);
};

export default EditDateTimePicker;
