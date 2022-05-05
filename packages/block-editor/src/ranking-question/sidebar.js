/**
 * External dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import BorderSettings from '../components/border-settings';
import ColorSettings from '../components/color-settings';

const Sidebar = ( { attributes, setAttributes } ) => {
	return (
		<InspectorControls>
			<ColorSettings
				initialOpen={ false }
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
			<BorderSettings
				initialOpen={ false }
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
		</InspectorControls>
	);
};

export default Sidebar;
