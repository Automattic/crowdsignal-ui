/**
 * External dependencies
 */
import { createContext, forwardRef } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_NAME } from '../../data';
import { values } from 'lodash';

const Context = createContext( 'form' );

const Form = forwardRef( ( { children, name, onSubmit, ...props }, ref ) => {
	const validations = {};

	const data = useSelect(
		( select ) => select( STORE_NAME ).getFormData( name ),
		[ name ]
	);

	const { startSubmit, stopSubmit, initForm } = useDispatch( STORE_NAME );

	const registerValidation = ( fieldName, validation ) =>
		( validations[ fieldName ] = validation );

	const isFormValid = () =>
		values( validations ).reduce(
			( isValid, validation ) => validation.call() && isValid,
			true
		);

	const handleSubmit = ( event ) => {
		event.preventDefault();

		if ( ! isFormValid() ) {
			return;
		}

		startSubmit( name );

		onSubmit( data )
			.then( () => initForm( name, {} ) )
			.finally( () => stopSubmit( name ) );
	};

	return (
		<Context.Provider value={ { name, registerValidation } }>
			<form ref={ ref } onSubmit={ handleSubmit } { ...props }>
				{ children }
			</form>
		</Context.Provider>
	);
} );

Form.Context = Context;

export default Form;
