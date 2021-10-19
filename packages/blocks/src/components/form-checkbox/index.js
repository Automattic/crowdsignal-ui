/**
 * External dependencies
 */
import styled from '@emotion/styled';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { popAnimation } from '@crowdsignal/styles';

const CheckboxLabel = styled.label`
	display: flex;
	align-items: baseline;
`;

const CheckboxWrapper = styled.div`
	align-items: center;
	background-color: transparent;
	border: 2px solid;
	border-radius: 2px;
	box-sizing: border-box;
	content: '';
	display: flex;
	flex-shrink: 0;
	height: 1em;
	justify-content: center;
	margin-right: 0.7em;
	overflow: hidden;
	position: relative;
	width: 1em;

	&.is-selected {
		background-color: #000;
	}

	&.is-selected::after {
		border-color: #000;
		border-style: solid;
		border-width: 0 0 2px 2px;
		box-sizing: border-box;
		content: '';
		display: inline-flex;
		filter: invert( 1 );
		height: 0.25em;
		margin: -20% 0 0 -30%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: rotateZ( -45deg );
		width: 0.5em;
	}

	&.is-radio {
		border-radius: 50%;
	}

	&.is-radio.is-selected {
		background-color: none;
	}

	&.is-radio.is-selected::after {
		animation-duration: 0.3s;
		animation-name: ${ popAnimation };
		animation-iteration-count: 1;
		animation-timing-function: ease-out;
		background-clip: padding-box;
		background-color: var( --wp--preset--color--border );
		background-color: #000;
		border: 4.5px solid transparent;
		border-radius: 50%;
		height: 1em;
		position: absolute;
		left: -2px;
		top: -2px;
		transform: none;
		width: 1em;
	}
`;

const CheckboxInput = styled.input`
	height: 1px;
	position: absolute;
	top: -20px;
	width: 1px;
`;

const FormCheckbox = ( { className, ...props } ) => {
	const classes = classnames( className, {
		'is-selected': props.checked,
		'is-radio': props.type === 'radio',
	} );

	return (
		<CheckboxWrapper className={ classes }>
			<CheckboxInput type="checkbox" { ...props } />
		</CheckboxWrapper>
	);
};

FormCheckbox.className = CheckboxWrapper;
FormCheckbox.Label = CheckboxLabel;

export default FormCheckbox;
