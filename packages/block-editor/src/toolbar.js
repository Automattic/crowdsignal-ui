/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { ToolbarSlot } from 'isolated-block-editor'; // eslint-disable-line import/named

/**
 * Internal dependencies
 */
// import { Button } from '@crowdsignal/components';

const Toolbar = () => {
	return (
		<ToolbarSlot className="block-editor__crowdsignal-toolbar">
			<Button className="is-crowdsignal" variant="tertiary">
				{ __( 'Preview', 'block-editor' ) }
			</Button>
			<Button className="is-crowdsignal" variant="primary">
				{ __( 'Share', 'block-editor' ) }
			</Button>
		</ToolbarSlot>
	);
};

export default Toolbar;
