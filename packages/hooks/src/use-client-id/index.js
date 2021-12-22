/**
 * External dependencies
 */
import { useEffect } from '@wordpress/element';
import { v4 as uuid } from 'uuid';

/**
 * A list containing crowdsignal client IDs as keys and block ID's as values.
 *
 * @type {Object}
 */
const crowdsignalClientIds = {};

const useClientId = ( { attributes, clientId: blockId, setAttributes } ) => {
	useEffect( () => {
		if ( attributes.clientId ) {
			if ( ! crowdsignalClientIds[ attributes.clientId ] ) {
				crowdsignalClientIds[ attributes.clientId ] = blockId;
			}

			if ( crowdsignalClientIds[ attributes.clientId ] === blockId ) {
				return;
			}
		}

		const clientId = uuid();

		crowdsignalClientIds[ clientId ] = blockId;

		setAttributes( { clientId } );
	}, [] );
};

export default useClientId;
