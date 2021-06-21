# Feedback Survey

## fetchFeedbackSurvey

Returns a feedback survey.

```javascript
import { fetchFeedbackSurvey } from '@crowdsignal/rest-api';

const survey = await fetchFeedbackSurvey( surveyId );
```

### Params

**surveyId**: Survey ID for the feedback survey.

- Type: `Number`
- Required: Yes

### Return

```json
{
	...
}
```

## updateFeedbackResponse

Submits a response for a feedback survey.

```javascript
import { updateFeedbackResponse } from '@crowdsignal/rest-api';

const response = updateFeedbackResponse( surveyId, data );
```

### Params

**surveyId**: Survey ID for the feedback survey to submit the response to.

- Type: `Number`
- Required: Yes

**data**: Response data

- Type: `Object`
- Required: Yes

**data.email**: Email field of the response

- Type: `String`
- Required: No
- Default: `''`

**data.feedback**: Feedback field of the response

- Type: `String`
- Required: No
- Default: `''`

### Return

```json
{
	...
}
```

