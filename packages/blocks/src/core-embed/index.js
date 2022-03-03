/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { isEmpty } from 'lodash';
import { renderToString } from '@wordpress/element';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { Sandbox } from '@crowdsignal/components';

const getPhotoHtml = ( photo ) => {
	const imageUrl = photo.thumbnail_url || photo.url;
	const photoPreview = (
		<p>
			<img src={ imageUrl } alt={ photo.title } width="100%" />
		</p>
	);
	return renderToString( photoPreview );
};

const CoreEmbed = ( { attributes } ) => {
	const { url, className, caption, type, providerNameSlug } = attributes;

	const { preview } = useSelect(
		( select ) => {
			const embedPreview = select( coreStore ).getEmbedPreview( url );
			const badEmbedProvider =
				embedPreview?.html === false &&
				embedPreview?.type === undefined;
			const validPreview = !! embedPreview && ! badEmbedProvider;

			return {
				preview: validPreview ? embedPreview : {},
			};
		},
		[ url ]
	);

	const classes = classnames( className, 'wp-block-embed', {
		'is-type-video': 'video' === type,
	} );

	const html = 'photo' === type ? getPhotoHtml( preview ) : preview.html;

	const iframeTitle = sprintf(
		// translators: %s: host providing embed content e.g: www.youtube.com
		__( 'Embedded content from %s', 'blocks' ),
		providerNameSlug
	);

	return (
		<figure className={ classes }>
			<div className="wp-block-embed__wrapper">
				<Sandbox
					html={ html }
					scripts={ preview.scripts }
					title={ iframeTitle }
					type={ classnames( type, className ) }
				/>
			</div>
			{ ! isEmpty( caption ) && <figcaption>{ caption }</figcaption> }
		</figure>
	);
};

export default CoreEmbed;
