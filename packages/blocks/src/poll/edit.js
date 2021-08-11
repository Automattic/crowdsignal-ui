/**
 * External dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

const ALLOWED_BLOCKS = [ 'crowdsignal-forms/poll-answer', 'core/paragraph' ];

const PollBlock = () => {
	return (
		<div>
			<InnerBlocks
				template={ [
					[ 'crowdsignal-forms/poll-answer', {} ],
					[ 'crowdsignal-forms/poll-answer', {} ],
					[ 'crowdsignal-forms/poll-answer', {} ],
				] }
				templateInsertUpdatesSelection={ false }
				templateLock=""
				allowedBlocks={ ALLOWED_BLOCKS }
				orientation="vertical"
			/>
		</div>
	);
};

export default PollBlock;
