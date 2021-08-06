# Projects

## fetchProject

Returns a project.

```javascript
import { fetchProject } from '@crowdsignal/rest-api';

const project = await fetchProject( projectId );
```

### Params

**projectId**: Project ID.

- Type: `Number`
- Required: Yes

### Return

```json
{
	...
}
```

## createProject

Creates a new project.

```javascript
import { createProject } from '@crowdsignal/rest-api';

const project = await createProject( data );
```

### Params

**data**: Project data.

- Type: `Object`
- Required: Yes

### Return

```json
{
	...
}
```

## updateProject

Updates an existing project.

```javascript
import { updateProject } from '@crowdsignal/rest-api';

const result = updateProject( projectId, data );
```

### Params

**projectId**: Project ID.

- Type: `Number`
- Required: Yes

**data**: Project data.

- Type: `Object`
- Required: Yes

### Return
