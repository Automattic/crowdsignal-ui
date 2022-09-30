/**
 * External dependencies
 */

import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { FormInputWrapper, FormDateTimePicker } from '@crowdsignal/blocks';
import { useColorStyles } from '@crowdsignal/styles';
import Sidebar from './sidebar';
import { useClientId } from '@crowdsignal/hooks';

const EditTimePicker = ( props ) => {
	const { attributes, setAttributes, className } = props;

	useClientId( props );

	const handleChangeLabel = ( label ) => setAttributes( { label } );

	const classes = classnames(
		className,
		'crowdsignal-forms-time-picker-block',
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
			<FormInputWrapper.Label className="crowdsignal-forms-time-picker-block__label">
				<RichText
					placeholder={ __(
						'Enter time picker label',
						'block-editor'
					) }
					onChange={ handleChangeLabel }
					value={ attributes.label }
				/>
			</FormInputWrapper.Label>
			<FormDateTimePicker timePicker />
		</FormInputWrapper>
	);
};

export default EditTimePicker;
