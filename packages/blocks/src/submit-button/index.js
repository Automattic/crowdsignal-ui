/**
 * External dependencies
 */
import styled from '@emotion/styled';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { Button, Spinner } from '../components';
import { useFormState } from '@crowdsignal/form';

const StyledButtonContent = styled.span();

const StyledButton = styled( Button )`
	${ Spinner } {
		display: none;
	}

	&.is-loading {
		${ StyledButtonContent } {
			opacity: 0;
		}

		${ Spinner } {
			position: absolute;
			display: block;
		}
	}
`;

const SubmitButton = ( { attributes, className } ) => {
	const { isSubmitting } = useFormState();

	const classes = classnames(
		className,
		'crowdsignal-forms-submit-button-block',
		{
			'is-loading': isSubmitting,
		}
	);

	return (
		<StyledButton
			attributes={ attributes }
			className={ classes }
			disabled={ isSubmitting }
			type="submit"
		>
			<StyledButtonContent>{ attributes.label }</StyledButtonContent>
			<Spinner />
		</StyledButton>
	);
};

export default SubmitButton;
