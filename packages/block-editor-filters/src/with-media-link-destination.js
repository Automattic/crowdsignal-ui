/**
 * This lines exist in core/image code:
	```
	if (!attributes.linkDestination) {
		// Use the WordPress option to determine the proper default.
		switch (((_wp = wp) === null || _wp === void 0 ? void 0 : (_wp$media = _wp.media) === null || _wp$media === void 0 ? void 0 : (_wp$media$view = _wp$media.view) === null || _wp$media$view === void 0 ? void 0 : (_wp$media$view$settin = _wp$media$view.settings) === null || _wp$media$view$settin === void 0 ? void 0 : (_wp$media$view$settin2 = _wp$media$view$settin.defaultProps) === null || _wp$media$view$settin2 === void 0 ? void 0 : _wp$media$view$settin2.link) || LINK_DESTINATION_NONE) {
		...
	```
 * making it impossible to use the image block without the (deprecated) linkDestination attribute (or wp global).
 * This filter will provide a fixed value 'media' which is, for now, all we'd be using on upload.
 *
 *
 * @param  {Function} BlockEdit Block edit component
 * @return {Function}           Enhanced BlockEdit
 */
export const withMediaLinkDestination = ( BlockEdit ) => {
	return ( props ) => {
		if ( props.name !== 'core/image' ) {
			return <BlockEdit { ...props } />;
		}

		const newProps = {
			...props,
			attributes: {
				...props.attributes,
				linkDestination: 'media',
			},
		};
		return <BlockEdit { ...newProps } />;
	};
};
