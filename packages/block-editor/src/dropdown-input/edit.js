/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { map, split, trim } from 'lodash';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { DropdownOption } from './option';
import { DropdownPlaceholder } from './placeholder';
import { changeFocus } from '../util/change-focus';
import { FormDropdownInput, FormInputWrapper } from '@crowdsignal/blocks';
import { useColorStyles } from '@crowdsignal/styles';
import { useClientId } from '@crowdsignal/hooks';
import Sidebar from './sidebar';

export default ( props ) => {
	const { attributes, className, isSelected, setAttributes } = props;

	useClientId( props );

	const optionsWrapper = useRef();
	const placeholder = useRef();

	const classes = classnames(
		className,
		'crowdsignal-forms-dropdown-input-block',
		{
			'is-required': attributes.mandatory,
		}
	);

	const focusOption = ( index, cursorToEnd ) =>
		changeFocus(
			optionsWrapper.current,
			'[role=textbox]',
			index,
			cursorToEnd
		);

	const handleChangeAttribute = ( key ) => ( value ) =>
		setAttributes( { [ key ]: value } );

	const handleSingleValue = ( index, value, cursorToEnd ) => {
		const options = [ ...attributes.options ];
		options[ index ] = value;
		setAttributes( { options } );
		focusOption( index, cursorToEnd );
	};

	const handleMultiValues = ( index, array ) => {
		const options = [ ...attributes.options ];
		options.splice( index, 1, ...array );
		setAttributes( { options } );
		focusOption( index + array.length - 1, true );
	};

	const handleChangeOption = ( index, cursorToEnd ) => ( value ) => {
		const values = split( value, '\n' ).filter(
			( op ) => op && trim( op ) !== ''
		);

		if ( ! values.length ) {
			return;
		}

		if ( values.length > 1 ) {
			handleMultiValues( index, values );
		} else {
			handleSingleValue( index, values.pop(), cursorToEnd );
		}
	};

	const handleSplitOption = ( index ) => ( value, isOriginal ) => {
		if ( ! isOriginal ) {
			return;
		}

		const splitValue = attributes.options[ index ].slice( value.length );
		handleMultiValues( index, [ value, splitValue ] );
	};

	const handleDeleteOption = ( index ) => () => {
		const options = [ ...attributes.options ];
		options.splice( index, 1 );
		setAttributes( { options } );

		if ( ! options.length ) {
			setTimeout( () => placeholder.current.focus(), 0 );
			return;
		}

		focusOption( Math.max( index - 1, 0 ), true );
	};

	return (
		<FormInputWrapper
			className={ classes }
			style={ { ...useColorStyles( attributes ) } }
		>
			<Sidebar { ...props } />
			<FormInputWrapper.Label className="crowdsignal-forms-dropdown-input-block__label">
				<RichText
					placeholder={ __( 'Enter form label', 'block-editor' ) }
					onChange={ handleChangeAttribute( 'label' ) }
					value={ attributes.label }
				/>
			</FormInputWrapper.Label>
			<FormDropdownInput.Wrapper>
				<FormDropdownInput.Button outline>
					<RichText
						placeholder={ __( 'Choose an option', 'blocks' ) }
						value={ attributes.buttonLabel }
						onChange={ handleChangeAttribute( 'buttonLabel' ) }
						allowedFormats={ [] }
						multiline={ false }
					/>
				</FormDropdownInput.Button>
				{ isSelected && (
					<FormDropdownInput.Options ref={ optionsWrapper }>
						{ attributes.options.length ? (
							map( attributes.options, ( option, index ) => (
								<DropdownOption
									key={ index }
									value={ option }
									onChange={ handleChangeOption( index ) }
									onRemove={ handleDeleteOption( index ) }
									onSplit={ handleSplitOption( index ) }
								/>
							) )
						) : (
							<DropdownPlaceholder
								key="placeholder"
								ref={ placeholder }
								onChange={ handleChangeOption( 0, true ) }
							/>
						) }
					</FormDropdownInput.Options>
				) }
			</FormDropdownInput.Wrapper>
		</FormInputWrapper>
	);
};
