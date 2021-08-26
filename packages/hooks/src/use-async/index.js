/**
 * External dependencies
 */
import { useEffect, useState } from '@wordpress/element';

const useAsync = ( callback, watchProps = [] ) => {
	const [ error, setError ] = useState( null );
	const [ result, setResult ] = useState( null );
	const [ loading, setLoading ] = useState( false );

	useEffect( () => {
		setLoading( true );
		setError( null );
		setResult( null );

		callback()
			.then( setResult )
			.catch( setError )
			.finally( () => setLoading( false ) );
	}, watchProps );

	return {
		error,
		result,
		loading,
	};
};

export default useAsync;
