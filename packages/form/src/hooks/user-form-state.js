/**
 * External dependencies
 */
import { useContext } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { Form } from '../components';
import { STORE_NAME } from '../data';

export const useFormState = () => {
	const form = useContext( Form.Context );

	return useSelect(
		( select ) => ( {
			isSubmitting: select( STORE_NAME ).isSubmitting( form ),
		} ),
		[ form ]
	);
};
