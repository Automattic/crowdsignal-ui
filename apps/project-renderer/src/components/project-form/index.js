/**
 * Internal dependencies
 */
import ProjectFormPage from './page';
import ProjectFormThemeProvider from './theme-provider';
import { useProjectData } from './use-project-data';

const ProjectForm = ( props ) => {
	const { pageContent, submitPage, theme } = useProjectData( props );

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
