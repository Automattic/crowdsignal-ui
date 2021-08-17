/**
 * External dependencies
 */
import { useEffect } from '@wordpress/element';
import { v4 as uuid } from 'uuid';

const useClientId = ( { attributes, setAttributes } ) => {
	useEffect( () => {
		if ( attributes.clientId ) {
			return;
		}

		setAttributes( {
			clientId: uuid(),
		} );
	}, [] );
};

export default useClientId;
