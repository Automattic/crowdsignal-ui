/**
 * External dependencies
 */
import { useEffect } from '@wordpress/element';

const EditorFeedbackButton = () => {
	useEffect(
		() =>
			window.crowdsignal.FeedbackWidget( 2765015, {
				position: 'bottom left',
			} ),
		[]
	);

	return null;
};

export default EditorFeedbackButton;
