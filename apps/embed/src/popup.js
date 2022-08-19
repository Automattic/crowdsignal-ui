/**
 * Crowdsignal embed component.
 */
class CrowdsignalPopup extends window.HTMLElement {
	/**
	 * Wrapper container reference
	 */
	#wrapper;

	/**
	 * Close Button reference
	 */
	#closeButton;

	/**
	 * Reference to the main iframe
	 */
	#frame;

	connectedCallback() {
		const isWpEditor =
			this.ownerDocument.body.className.indexOf( 'wp-block-embed' ) !==
			-1;

		if ( isWpEditor ) {
			this.#showPlaceholder();
		} else {
			this.#showPopup();
		}

		window.addEventListener( 'message', ( event ) => {
			if (
				this.getAttribute( 'src' ).indexOf( event.origin ) !== 0 ||
				isWpEditor
			) {
				return;
			}

			if ( event.data.type === 'crowdsignal-forms-project-page-loaded' ) {
				this.#wrapper.style.height = `${
					event.data.pageHeight + 12
				}px`;
			}
		} );
	}

	#showPlaceholder() {
		const projectURL = this.getAttribute( 'src' );

		this.#wrapper = document.createElement( 'div' );
		this.#wrapper.innerHTML = `
			<style>
				body {
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
					color: #1e1e1e;
				}

				.crowdsignal-web-popup-placeholder {
					border: 1px solid;
					padding: 22px;
					border-radius: 2px;
					font-size: 13px;
					line-height: 1.5;
				}

				.crowdsignal-web-popup-placeholder .placeholder--header {
					display: flex;
					align-items: center;
					margin-bottom: 16px;
				}

				.crowdsignal-web-popup-placeholder .placeholder--icon {
					display: flex;
					margin-right: 16px;
				}

				.crowdsignal-web-popup-placeholder h3 {
					font-size: 24px;
					font-weight: 400;
					margin: 0;
				}

				.crowdsignal-web-popup-placeholder a, .crowdsignal-web-popup-placeholder a:visited {
					color: #0073aa;
				}
			</style>
			<div class="crowdsignal-web-popup-placeholder" style="">
				<div class="placeholder--header">
					<span class="placeholder--icon">
						<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V9.8l4.7-5.3H19c.3 0 .5.2.5.5v14zm-6-9.5L16 12l-2.5 2.8 1.1 1L18 12l-3.5-3.5-1 1zm-3 0l-1-1L6 12l3.5 3.8 1.1-1L8 12l2.5-2.5z"></path></svg>
					</span>
					<h3>Crowdsignal Wep Popup</h3>
				</div>
				<p>On a live page the project content will be shown as a popup</p>
				<p class="placeholder--text">
					<span>Project URL: </span>
					<a>${ projectURL }</a>
				</p>
			</div>
		`;

		this.appendChild( this.#wrapper );
	}

	#showPopup() {
		this.innerHTML += `
			<style>
				.crowdsignal-web-popup__wrapper {
					width: 400px;
					max-height: 90vh;
					min-height: 250px;
					position: fixed;
					left: 20px;
					bottom: 20px;
					z-index: 1000;
					padding-top: 12px;
				}

				.crowdsignal-web-popup__close-button {
					position: absolute;
					top: 0;
					right: 0;
					z-index: 1;
					width: 24px;
					height: 24px;
					border-radius: 100%;
					background: #65696F;
					cursor: pointer;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.crowdsignal-web-popup__frame {
					width: 100%;
					height: 100%;
					border-radius: 10px;
					filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.02)) drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.08));
				}
			</style>
		`;

		this.#wrapper = document.createElement( 'div' );
		this.#wrapper.className = 'crowdsignal-web-popup__wrapper';
		this.appendChild( this.#wrapper );

		this.#closeButton = document.createElement( 'span' );
		this.#closeButton.className = 'crowdsignal-web-popup__close-button';
		this.#closeButton.innerHTML = `
			<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M4.99954 6.0602L8.71184 9.7725L9.7725 8.71184L6.0602 4.99954L9.77251 1.28723L8.71185 0.226571L4.99954 3.93888L1.28722 0.226562L0.226562 1.28722L3.93888 4.99954L0.226571 8.71185L1.28723 9.77251L4.99954 6.0602Z" fill="#EDFAEF"/>
			</svg>
		`;

		this.#closeButton.addEventListener( 'click', () => {
			this.#wrapper.style.display = 'none';
		} );

		this.#wrapper.appendChild( this.#closeButton );

		this.#frame = document.createElement( 'iframe' );
		this.#frame.className = 'crowdsignal-web-popup__frame';

		const embedUrl = new window.URL( this.getAttribute( 'src' ) );
		embedUrl.searchParams.append( 'iframe', 1 );

		this.#frame.src = embedUrl.toString();
		this.#frame.setAttribute( 'frameBorder', '0' );

		this.#wrapper.appendChild( this.#frame );
	}
}

export default CrowdsignalPopup;
