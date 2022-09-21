/**
 * External dependencies
 */

import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { FormInputWrapper, DateTimePicker } from '@crowdsignal/blocks';
import { useState } from '@wordpress/element';
import { useColorStyles } from '@crowdsignal/styles';
import Sidebar from './sidebar';
import { useClientId } from '@crowdsignal/hooks';
import { default as EditButton } from '../components/edit-button';

const EditDateTimePicker = ( props ) => {
	const [ startDate, setStartDate ] = useState( new Date() );

	const { attributes, setAttributes, className, isSelected } = props;

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
		<FormInputWrapper style={ { ...useColorStyles( attributes ) } }>
			<Sidebar { ...props } />
			<FormInputWrapper.Label className="crowdsignal-forms-text-input-block__label">
				<RichText
					placeholder={ __(
						'Enter date picker label',
						'block-editor'
					) }
					onChange={ handleChangeLabel }
					value={ attributes.label }
				/>
			</FormInputWrapper.Label>
			<DateTimePicker
				className={ classes }
				selected={ startDate }
				onChange={ ( date ) => setStartDate( date ) }
				customInput={ EditButton }
				{ ...props }
			/>
		</FormInputWrapper>
	);
};

export default EditDateTimePicker;
