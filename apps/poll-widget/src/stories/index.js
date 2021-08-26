/**
 * Internal dependencies
 */
import Widget from '../widget';
import exampleBlocks from './example';

export default {
	title: 'Poll Widget/Poll Widget',
	component: Widget,
};

export const PollWidget = () => <Widget blocks={ exampleBlocks } />;
