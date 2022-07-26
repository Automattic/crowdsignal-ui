/**
 * Internal dependencies
 */
import CrowdsignalCard from './card';
import CrowdsignalEmbed from './embed';

if ( window.customElements.get( 'crowdsignal-card' ) === undefined ) {
	window.customElements.define( 'crowdsignal-card', CrowdsignalCard );
}

if ( window.customElements.get( 'crowdsignal-embed' ) === undefined ) {
	window.customElements.define( 'crowdsignal-embed', CrowdsignalEmbed );
}
