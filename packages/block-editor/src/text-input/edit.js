/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { ResizableBox } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { FormTextInput } from '@crowdsignal/blocks';
import { useColorStyles } from '@crowdsignal/styles';
import Sidebar from './sidebar';
import { useClientId } from '@crowdsignal/hooks';

const EditTextInput = ( props ) => {
	const { attributes, setAttributes, isSelected } = props;

	useClientId( props );

	const handleChangeLabel = ( label ) => setAttributes( { label } );

	const handleResizeInput = ( event, handle, element ) => {
		if ( handle !== 'bottom' && handle !== 'right' ) {
			return;
		}

		setAttributes( {
			inputHeight: element.offsetHeight,
			inputWidth: `${ element.offsetWidth }px`,
		} );
	};

	return (
		<div
			className="crowdsignal-forms-text-input-block"
			style={ { ...useColorStyles( attributes ) } }
		>
			<Sidebar { ...props } />
			<RichText
				placeholder={ __( 'Enter form label', 'block-editor' ) }
				onChange={ handleChangeLabel }
				value={ attributes.label }
			/>
			<ResizableBox
				minHeight="40px"
				showHandle={ isSelected }
				enable={ { bottom: true, right: true } }
				onResizeStop={ handleResizeInput }
				size={ {
					width: attributes.inputWidth,
					height: `${ attributes.inputHeight }px`,
				} }
			>
				<FormTextInput.Preview className="crowdsignal-forms-text-input-block__wrapper" />
			</ResizableBox>
		</div>
	);
};

export default EditTextInput;
