/**
 * External dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import ColorSettings from '../components/color-settings';

const Sidebar = ( { attributes, setAttributes } ) => {
	return (
		<InspectorControls>
			<ColorSettings
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
		</InspectorControls>
	);
};

export default Sidebar;
