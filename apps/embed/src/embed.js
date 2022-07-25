/**
 * Crowdsignal embed component.
 */
class CrowdsignalEmbed extends window.HTMLElement {
	/**
	 * Reference to the main iframe
	 */
	#frame;

	connectedCallback() {
		this.#frame = document.createElement( 'iframe' );

		const embedUrl = new window.URL( this.getAttribute( 'src' ) );
		embedUrl.searchParams.append( 'iframe', 1 );

		this.#frame.src = embedUrl.toString();

		this.#frame.setAttribute( 'frameBorder', '0' );

		this.#frame.width = '100%';
		this.#frame.scrolling = 'no';

		this.appendChild( this.#frame );

		window.addEventListener( 'message', ( event ) => {
			if ( this.getAttribute( 'src' ).indexOf( event.origin ) !== 0 ) {
				return;
			}

			if ( event.data.type === 'crowdsignal-forms-project-page-loaded' ) {
				this.#frame.height = `${ event.data.pageHeight }px`;
			}
		} );
	}
}

export default CrowdsignalEmbed;
