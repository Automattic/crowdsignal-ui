import { BlockControls, JustifyContentControl } from '@wordpress/block-editor';

const SubmitButtonToolbar = ( { attributes, setAttributes } ) => {
	return (
		<BlockControls group="block">
			<JustifyContentControl
				value={ attributes.justification }
				onChange={ ( value ) => {
					setAttributes( { justification: value } );
				} }
				allowedControls={ [ 'left', 'center', 'right' ] }
			/>
		</BlockControls>
	);
};

export default SubmitButtonToolbar;
