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
	const {
		currentPage,
		navigationSettings,
		pageContent,
		submitPage,
		fetchProject,
		theme,
		totalPages,
		showBranding,
	} = useProjectData( props );

	useEffect( () => {
		const observer = new window.ResizeObserver( () => {
			if ( ! pageContent ) {
				return;
			}

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
	}, [ pageContent ] );

	const handleNavigateBack = ( page ) => {
		fetchProject( props.projectCode, {
			preview: props.preview || false,
			page,
		} );
	};

	if ( ! pageContent ) {
		return 'Please wait, connecting to Crowdsignal...';
	}

	return (
		<ProjectFormThemeProvider theme={ theme }>
			<ProjectFormPage
				blocks={ pageContent }
				currentPage={ currentPage }
				navigation={ navigationSettings }
				onNavigateBack={ handleNavigateBack }
				onSubmit={ submitPage }
				projectCode={ props.projectCode }
				totalPages={ totalPages }
				showBranding={ showBranding }
			/>
		</ProjectFormThemeProvider>
	);
};

export default ProjectForm;
