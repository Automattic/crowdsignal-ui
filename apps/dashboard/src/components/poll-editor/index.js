/**
 * Internal dependencies
 */
import { BlockEditor } from '@crowdsignal/block-editor';
import PollNavigation from '../poll-navigation';

/**
 * Style dependencies
 */
import './style.scss';

const PollEditor = ( { pollId } ) => {
	return (
		<div className="poll-editor">
			<PollNavigation
				activeTab={ PollNavigation.Tab.EDITOR }
				pollId={ pollId }
			/>

			<BlockEditor />
		</div>
	);
};

export default PollEditor;
