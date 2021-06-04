/**
 * WordPress dependencies
 */
import { RawHTML } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { Header } from './styles/form-styles.js'

const FeedbackSubmit = ( { settings } ) => (
	<Header { ...settings.style }>
		<RawHTML>{ settings.text.submitMessage }</RawHTML>
	</Header>
);

export default FeedbackSubmit;
