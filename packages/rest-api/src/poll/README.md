# Polls

## fetchPoll

Returns a poll.

```javascript
import { fetchPoll } from '@crowdsignal/rest-api';

const poll = await fetchPoll( pollId );
```

### Params

**pollId**: Poll ID.

- Type: `Number`
- Required: Yes

### Return

```json
{
	...
}
```

## createPoll

Creates a new poll.

```javascript
import { createPoll } from '@crowdsignal/rest-api';

const poll = await createPoll( data );
```

### Params

**data**: Poll data.

- Type: `Object`
- Required: Yes

### Return

```json
{
	...
}
```

## updatePoll

Updates an existing poll.

```javascript
import { updatePoll } from '@crowdsignal/rest-api';

const result = await updatePoll( pollId, data );
```

### Params

**data**: Poll data.

- Type: `Object`
- Required: Yes

### Return
