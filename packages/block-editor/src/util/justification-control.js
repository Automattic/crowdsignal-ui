/**
 * External dependencies
 */
import { BlockControls, JustifyContentControl } from '@wordpress/block-editor';

export const JustificationControl = ( { justification, onChange } ) => (
	<BlockControls group="block">
		<JustifyContentControl
			value={ justification }
			onChange={ onChange }
			allowedControls={ [ 'left', 'center', 'right' ] }
		/>
	</BlockControls>
);
