/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';

export const useParentAttributes = ( clientId ) =>
	useSelect( ( select ) => {
		const blockEditor = select( 'core/block-editor' );

		return blockEditor.getBlockAttributes(
			blockEditor.getBlockRootClientId( clientId )
		);
	} );
