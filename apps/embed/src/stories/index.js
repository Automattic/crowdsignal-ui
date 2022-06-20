/**
 * Internal dependencies
 */
import CrowdsignalEmbed from '../embed.js';

window.customElements.define( 'crowdsignal-embed', CrowdsignalEmbed );

export default {
	title: 'Embed/Embed',
};

const wrapperStyles = {
	margin: '50px auto',
	maxWidth: '660px',
};

export const Default = () => (
	<div style={ wrapperStyles }>
		<crowdsignal-embed src="https://crowdsignal.localhost:9001/B2A9100BBAB921D0?preview=true" />
	</div>
);
