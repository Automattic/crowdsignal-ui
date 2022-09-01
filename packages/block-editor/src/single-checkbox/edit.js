/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { FormCheckbox, FormInputWrapper } from '@crowdsignal/blocks';
import { useClientId } from '@crowdsignal/hooks';
import Sidebar from './sidebar';
import Toolbar from '../ranking-question/toolbar';

const EditCheckbox = ( props ) => {
	const { attributes, className, setAttributes } = props;

	useClientId( props );

	const handleChangeLabel = ( label ) => setAttributes( { label } );

	const classes = classnames(
		className,
		'crowdsignal-forms-simple-checkbox',
		'is-inline',
		{
			'is-required': attributes.mandatory,
		}
	);
	return (
		<FormInputWrapper className={ classes }>
			<Sidebar { ...props } />
			<Toolbar { ...props } />

			<FormCheckbox isMultiSelect />
			<FormInputWrapper.Label className="crowdsignal-forms-text-input-block__label">
				<RichText
					placeholder={ __( 'Enter your question', 'block-editor' ) }
					onChange={ handleChangeLabel }
					value={ attributes.label }
				/>
			</FormInputWrapper.Label>
		</FormInputWrapper>
	);
};

export default EditCheckbox;
