/**
 * External dependencies
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { useCallback } from '@wordpress/element';
import { filter, first, map, pick } from 'lodash';

export const useSharedSiblingAttributes = ( {
	attributes,
	clientId,
	setAttributes,
	sharedAttributes,
} ) => {
	const { updateBlockAttributes } = useDispatch( 'core/block-editor' );

	const siblings = useSelect(
		( select ) => {
			const blockEditor = select( 'core/block-editor' );

			const blockName = blockEditor.getBlockName( clientId );
			const parentId = first(
				blockEditor.getBlockParents( clientId, true )
			);

			return filter(
				map(
					blockEditor.getBlock( parentId ).innerBlocks,
					( block ) => block.clientId
				),
				( childClientId ) =>
					childClientId !== clientId &&
					blockEditor.getBlockName( childClientId ) === blockName
			);
		},
		[ clientId ]
	);

	const syncAttributes = useCallback(
		( newAttributes ) => {
			if (
				attributes.shareSiblingAttributes ||
				newAttributes.shareSiblingAttributes
			) {
				updateBlockAttributes(
					siblings,
					pick(
						attributes.shareSiblingAttributes
							? newAttributes
							: { ...attributes, ...newAttributes },
						[ ...sharedAttributes, 'shareSiblingAttributes' ]
					)
				);
			}

			setAttributes( newAttributes );
		},
		[ ...siblings, ...sharedAttributes, attributes ]
	);

	return syncAttributes;
};

export const withSharedSiblingAttributes = ( sharedAttributes ) => (
	WrappedComponent
) => ( { attributes, clientId, setAttributes, ...props } ) => {
	const syncAttributes = useSharedSiblingAttributes( {
		attributes,
		clientId,
		setAttributes,
		sharedAttributes,
	} );

	return (
		<WrappedComponent
			attributes={ attributes }
			clientId={ clientId }
			setAttributes={ syncAttributes }
			{ ...props }
		/>
	);
};
