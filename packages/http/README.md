# @crowdsignal/http

Ligtweight fetch API wrapper used by other Crwodsignal libraries.

## Usage

```javascript
import { http } from '@crowdsignal/http';

const feedbackSurvey = await http( {
	host: 'https://api.crwodsignal.com',
	path: '/v3/feedback/123456',
	method: 'GET',
	mode: 'cors',
} );
```

## Options

Unless otherwise specified, all options passed to `http()` are passed as is to the underlying `fetch()` call.

### host

API host. Host specific headers are added depending on this value.

- Type: `String`
- Required: No
- Default: `''`

### path

Endpoint URI.

- Type: `String`
- Required: Yes

### headers

Additional headers to append to the request. Will be merged into global and host headers.

- Type: `Object`
- Required: No
- Default: `{}`

### query

Request query parameters passed as key-value pairs.

- Type: `Object`
- Required: No
- Default `{}`

## Global and host headers

You can set custom headers to be automatically appended to all requests globally, or based on the host using `setGlobalHeader` and `setHostHeader`.

```javascript
import { setGlobalHeader, setHostHeader } from '@crowdsignal/http';

// Will add an 'X-Requested-With: ajax' header to all requests.
setGlobalHeader( 'X-Requested-With', 'ajax' );

// Adds `Authorization: 123456789` header to all requests to https://api.crowdsignal.com
setHostHeader( 'Authorization', 123456789 );
```

Should you ever need to determine the value of a header at a given time, `getHeader` can be used. The second `host` argument is optional.

```javascript
import { getHeader } from '@crowdsignal/http';

const actualHeaderValue = get( 'X-Nonce', 'https://api.crowdsignal.com' );
```
