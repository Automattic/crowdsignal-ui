import { format } from '@wordpress/date';

const DEFAULT_FORMAT = 'F j, Y H:i';

export const timestampToDate = ( timestamp, defaultFormat = DEFAULT_FORMAT ) =>
	format( defaultFormat, timestamp * 1000 );
