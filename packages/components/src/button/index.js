/**
 * External dependencies
 */
import { forwardRef } from '@wordpress/element';
import { omit } from 'lodash';
import classnames from 'classnames';

/**
 * Style dependencies
 */
import { Button } from './styles.js';

const ButtonComponent = (
	{
		borderless,
		children,
		className,
		compact,
		disabled,
		highlight,
		large,
		primary,
		scary,
		...props
	},
	ref
) => {
	const classes = classnames( className, {
		'is-borderless': borderless,
		'is-compact': compact,
		'is-highlight': highlight,
		'is-large': large,
		'is-primary': primary,
		'is-scary': scary,
	} );

	if ( props.href && ! disabled ) {
		const rel = props.target
			? ( props.rel || '' ).replace( /noopener|noreferrer/g, '' ) +
			  ' noopener noreferrer'
			: props.rel;

		return (
			<Button
				as={ 'a' }
				ref={ ref }
				{ ...props }
				rel={ rel }
				className={ classes }
			>
				{ children }
			</Button>
		);
	}

	const buttonProps = omit( props, [ 'href', 'rel', 'target' ] );

	return (
		<Button
			ref={ ref }
			type="button"
			{ ...buttonProps }
			className={ classes }
			disabled={ disabled }
		>
			{ children }
		</Button>
	);
};

ButtonComponent.className = Button;

export default forwardRef( ButtonComponent );
