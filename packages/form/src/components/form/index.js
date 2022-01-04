/**
 * External dependencies
 */
import { createContext } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_NAME } from '../../data';
import { values } from 'lodash';

const Context = createContext( 'form' );

const Form = ( { children, name, onSubmit, ...props } ) => {
	//Should I useState here?
	const validations = {};

	const data = useSelect(
		( select ) => select( STORE_NAME ).getFormData( name ),
		[ name ]
	);

	const { startSubmit, stopSubmit } = useDispatch( STORE_NAME );

	const registerValidation = ( fieldName, validation ) =>
		( validations[ fieldName ] = validation );

	const isValid = () =>
		values( validations ).every( ( validation ) => validation.call() );

	const handleSubmit = ( event ) => {
		event.preventDefault();

		if ( ! isValid() ) {
			return;
		}

		startSubmit( name );

		onSubmit( data ).finally( () => stopSubmit( name ) );
	};

	return (
		<Context.Provider value={ { name, registerValidation } }>
			<form onSubmit={ handleSubmit } { ...props }>
				{ children }
			</form>
		</Context.Provider>
	);
};

Form.Context = Context;

export default Form;
