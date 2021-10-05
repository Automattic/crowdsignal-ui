/**
 * External dependencies
 */
import { createContext } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_NAME } from '../../data';

const Context = createContext( 'form' );

const Form = ( { children, name, onSubmit, ...props } ) => {
	const { data } = useSelect(
		( select ) => select( STORE_NAME ).getFormData( name ),
		[ name ]
	);

	const handleSubmit = ( event ) => {
		event.preventDefault();

		onSubmit( data );
	};

	return (
		<Context.Provider value={ name }>
			<form onSubmit={ handleSubmit } { ...props }>
				{ children }
			</form>
		</Context.Provider>
	);
};

Form.Context = Context;

export default Form;
