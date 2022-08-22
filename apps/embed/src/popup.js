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

	/**
	 * Reference to the project code
	 */
	#projectCode;

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

			if (
				event.data.type === 'crowdsignal-forms-project-page-loaded' &&
				event.data.pageHeight > 0 &&
				! this.#getPopupClosedCookie( event.data.projectCode )
			) {
				const height = event.data.pageHeight + 12;
				this.#wrapper.style.height = `${ height }px`;
				this.#wrapper.style.bottom = '20px';
				this.#projectCode = event.data.projectCode;

				// We want the animation to play only on the first load
				// Need to add some timeout here to wait the first animation to play
				setTimeout( () => {
					this.#wrapper.style.transition = 'unset';
				}, 2000 );
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

				.crowdsignal-web-popup-placeholder .placeholder--icon img {
					width: 36px;
					height: 36px;
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
						<img src="https://crowdsignal.wordpress.com/wp-content/themes/a8c/crowd-signal/assets/images/logo-dots.svg" alt="Crowdsignal">
					</span>
					<h3>Crowdsignal Popup</h3>
				</div>
				<p>
					Your embedded popup will appear on page load. Click on Preview to test it.<br/>
					This placeholder block will not be visible. You can place it anywhere on this page.
				</p>
				<p class="placeholder--text">
					<span>Crowdsignal Project URL: </span>
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
					height: 0;
					position: fixed;
					left: 20px;
					bottom: -30px;
					z-index: 1000;
					padding-top: 12px;
					transition: height 1s ease, bottom 0.3s linear;
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
			this.#setPopupClosedCookie();
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

	#setPopupClosedCookie() {
		const expireDays = 30;
		const expires = new Date();
		expires.setTime( expires.getTime() + expireDays * 24 * 60 * 60 * 1000 );
		document.cookie = `cs-popup-closed-${
			this.#projectCode
		}=true; expires=${ expires.toUTCString() }; Secure`;
	}

	#getPopupClosedCookie( projectCode ) {
		return document.cookie
			.split( '; ' )
			.find( ( row ) =>
				row.startsWith( `cs-popup-closed-${ projectCode }` )
			);
	}
}

export default CrowdsignalPopup;
