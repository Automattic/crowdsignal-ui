/**
 * External dependencies
 */
import { Helmet } from 'react-helmet';

const HeaderMeta = ( { title } ) => (
	<Helmet>
		<title>{ `${ title } | Crowdsignal` }</title>
	</Helmet>
);

export default HeaderMeta;
