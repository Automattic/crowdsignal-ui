/**
 * Crowdsignal embed component.
 */
class CrowdsignalCard extends window.HTMLElement {
	/**
	 * Wrapper container reference
	 */
	#wrapper;

	/**
	 * iframe reference.
	 */
	#frame;

	connectedCallback() {
		const viewportWidth = parseInt(
			this.getAttribute( 'viewport-width', 10 )
		);
		const viewportHeight = parseInt(
			this.getAttribute( 'viewport-height', 10 )
		);

		const embedUrl = new window.URL( this.getAttribute( 'src' ) );
		embedUrl.searchParams.append( 'iframe', 1 );

		this.#wrapper = document.createElement( 'div' );
		this.appendChild( this.#wrapper );

		this.#frame = document.createElement( 'iframe' );
		this.#frame.src = embedUrl.toString();

		this.#frame.setAttribute( 'frameBorder', '0' );
		this.#frame.scrolling = 'no';

		this.#wrapper.appendChild( this.#frame );

		this.#resizeViewport( viewportWidth || 1000, viewportHeight || 600 );

		window.addEventListener( 'message', ( event ) => {
			if ( this.getAttribute( 'src' ).indexOf( event.origin ) !== 0 ) {
				return;
			}

			if ( event.data.type === 'crowdsignal-forms-project-embed-card' ) {
				if (
					!! event.data.embedCardSettings.viewport &&
					! viewportWidth &&
					! viewportHeight
				) {
					this.#resizeViewport(
						event.data.embedCardSettings.viewport.width,
						event.data.embedCardSettings.viewport.height
					);
				}
			}
		} );
	}

	#resizeViewport( viewportWidth, viewportHeight ) {
		this.#wrapper.style.width = '100%';
		this.#wrapper.style.maxWidth = `${ viewportWidth }px`;

		// Measure the wrapper width after it mounts to determine the scale factor
		const scale = this.#wrapper.offsetWidth / viewportWidth;

		this.#wrapper.style.width = `${ Math.floor(
			viewportWidth * scale
		) }px`;
		this.#wrapper.style.height = `${ Math.floor(
			viewportHeight * scale
		) }px`;
		this.#wrapper.style.position = 'relative';

		this.#frame.style.maxWidth = null;
		this.#frame.style.width = `${ viewportWidth }px`;
		this.#frame.style.height = `${ viewportHeight }px`;
		this.#frame.style.transform = `scale(${ scale })`;
		this.#frame.style.transformOrigin = 'top left';
	}
}

export default CrowdsignalCard;
