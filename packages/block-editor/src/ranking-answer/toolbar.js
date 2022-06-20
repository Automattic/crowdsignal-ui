import { AlignmentControl, BlockControls } from '@wordpress/block-editor';

export default ( { attributes, setAttributes } ) => (
	<BlockControls group="block">
		<AlignmentControl
			value={ attributes.textAlign }
			onChange={ ( nextAlign ) => {
				setAttributes( { textAlign: nextAlign } );
			} }
		/>
	</BlockControls>
);
