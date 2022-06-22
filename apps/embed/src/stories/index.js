/**
 * Internal dependencies
 */
import CrowdsignalCard from '../card.js';
import CrowdsignalEmbed from '../embed.js';

window.customElements.define( 'crowdsignal-card', CrowdsignalCard );
window.customElements.define( 'crowdsignal-embed', CrowdsignalEmbed );

export default {
	title: 'Embed/Embed',
};

const wrapperStyles = {
	display: 'flex',
	flexDirection: 'column',
	justifyItems: 'center',
	margin: '50px auto',
	maxWidth: '660px',
};

export const Default = () => (
	<div style={ wrapperStyles }>
		<crowdsignal-embed src="https://crowdsignal.localhost:9001/B2A9100BBAB921D0" />
	</div>
);

export const Card = () => (
	<>
		<div style={ wrapperStyles }>
			<crowdsignal-card
				src="https://crowdsignal.localhost:9001/B2A9100BBAB921D0"
				viewport-width="1200"
				viewport-height="600"
			/>
		</div>
		<div style={ wrapperStyles }>
			<crowdsignal-card
				src="https://crowdsignal.localhost:9001/B2A9100BBAB921D0"
				viewport-width="300"
				viewport-height="300"
			/>
		</div>
	</>
);
