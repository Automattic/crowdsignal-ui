/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
import { useEffect, useState } from '@wordpress/element';

export const useFeedbackSurvey = ( surveyId ) => {
	const [ survey, setSurvey ] = useState( null );

	useEffect( () => {
		try {
			setSurvey( await fetchSurvey( surveyId ) );
		} catch ( error ) {
			console.error( 'Unexpected!' );
		}
	}, [ surveyId ] );

	return survey;
};
