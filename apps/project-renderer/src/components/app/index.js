/**
 * Internal dependencies
 */
import FormPreview from '../form-preview';

const App = ( { project } ) => {
	const content = project.content.published.pages[ 0 ];
	return (
		<div className="app">
			<FormPreview content={ content } />
		</div>
	);
};

export default App;
