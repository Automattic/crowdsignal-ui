/**
 * Crowdsignal embed component.
 */
class CrowdsignalCard extends window.HTMLElement {
	/**
	 * Reference to the main iframe
	 */
	#frame;

	constructor() {
		super();

		this.attachShadow( { mode: 'open' } );
	}

	connectedCallback() {
		const viewportWidth = parseInt(
			this.getAttribute( 'viewport-width', 10 )
		);
		const viewportHeight = parseInt(
			this.getAttribute( 'viewport-height', 10 )
		);

		const wrapper = document.createElement( 'div' );
		wrapper.style.width = '100%';
		wrapper.style.maxWidth = `${ viewportWidth }px`;
		this.shadowRoot.appendChild( wrapper );

		// Measure the wrapper width after it mounts to determine the scale factor
		const scale = wrapper.offsetWidth / viewportWidth;

		wrapper.style.width = `${ Math.floor( viewportWidth * scale ) }px`;
		wrapper.style.height = `${ Math.floor( viewportHeight * scale ) }px`;
		wrapper.style.position = 'relative';

		this.#frame = document.createElement( 'iframe' );
		this.#frame.src = this.getAttribute( 'src' );

		this.#frame.setAttribute( 'frameBorder', '0' );
		this.#frame.scrolling = 'no';

		this.#frame.style.maxWidth = null;
		this.#frame.style.width = `${ viewportWidth }px`;
		this.#frame.style.height = `${ viewportHeight }px`;
		this.#frame.style.transform = `scale(${ scale })`;
		this.#frame.style.transformOrigin = 'top left';

		wrapper.appendChild( this.#frame );
	}
}

export default CrowdsignalCard;
