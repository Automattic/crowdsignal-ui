/**
 * External dependencies
 */
import classNames from 'classnames';

/**
 * Style dependencies
 */
import './style.scss';

const FormTextInput = ( {
	className,
	compact,
	error,
	inputRef,
	prefix,
	style,
	warning,
	...props
} ) => {
	const classes = classNames( 'form-text-input', className, {
		'is-compact': compact,
		'is-error': error,
		'is-warning': warning,
	} );

	return (
		<div className={ classes } style={ style }>
			{ prefix && (
				<span className="form-text-input__prefix">{ prefix }</span>
			) }

			<input
				ref={ inputRef }
				type="text"
				className="form-text-input__input"
				{ ...props }
			/>
		</div>
	);
};

export default FormTextInput;
