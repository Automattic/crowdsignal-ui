/**
 * Internal dependencies
 */
import { http } from '@crowdsignal/http';

export const fetchFeedbackSurvey = ( surveyId ) =>
	http( {
		host: 'https://api.crowdsignal.com',
		path: `/v3/feedback/${ surveyId }`,
		method: 'GET',
		mode: 'cors',
	} );

export const updateFeedbackResponse = ( surveyId, data ) =>
	http( {
		host: 'https://api.crowdsignal.com',
		path: `/v3/feedback/${ surveyId }/response`,
		method: 'POST',
		mode: 'cors',
		body: JSON.stringify( data ),
	} );
