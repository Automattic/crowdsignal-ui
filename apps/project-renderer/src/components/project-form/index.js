/**
 * External dependencies
 */
import { useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import ProjectFormPage from './page';
import ProjectFormThemeProvider from './theme-provider';
import { useProjectData } from './use-project-data';

const ProjectForm = ( props ) => {
	const { pageContent, submitPage, theme } = useProjectData( props );

	useEffect( () => {
		const observer = new window.ResizeObserver( () => {
			window.parent.postMessage(
				{
					type: 'crowdsignal-forms-project-page-loaded',
					projectCode: props.projectCode,
					pageHeight: document.body.offsetHeight,
				},
				'*'
			);
		} );

		observer.observe( document.body );

		return () => observer.unobserve( document.body );
	}, [] );

	if ( ! pageContent ) {
		return 'Wait...';
	}

	return (
		<ProjectFormThemeProvider theme={ theme }>
			<ProjectFormPage
				blocks={ pageContent }
				onSubmit={ submitPage }
				projectCode={ props.projectCode }
			/>
		</ProjectFormThemeProvider>
	);
};

export default ProjectForm;
