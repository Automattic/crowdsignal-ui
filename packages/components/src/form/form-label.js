/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import styled from '@emotion/styled';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { StyledFormRadio } from './form-radio';
import FormSettingExplanation from './form-setting-explanation';
import ScreenReaderText from '../screen-reader-text';

const StyledFormLabel = styled.label`
	cursor: pointer;
	display: block;
	font-size: 12;
	font-weight: bold;
	margin: 0;

	& + ${ FormSettingExplanation } {
		margin-top: 8px;
		padding: 0px;

		${ StyledFormRadio } + & {
			padding: 0 0 0 36px;
		}
	}

	${ FormSettingExplanation } + & {
		margin-top: 16px;
	}

	${ StyledFormRadio } + & {
		display: inline-block;
		font-weight: normal;
		line-height: 20px;
		margin-left: 16px;
	}
`;

const FormLabel = ( { className, children, htmlFor, required, ...props } ) => {
	const classes = classnames( className, {
		'is-required': required,
	} );

	return (
		<StyledFormLabel className={ classes } htmlFor={ htmlFor } { ...props }>
			{ children }

			{ htmlFor && (
				<ScreenReaderText>
					{ required
						? __( '(required)', 'components' )
						: __( '(optional)', 'components' ) }
				</ScreenReaderText>
			) }
		</StyledFormLabel>
	);
};

export default FormLabel;
