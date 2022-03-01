/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { map } from 'lodash';

/**
 * Internal dependencies
 */
import TemplatePreview from './template-preview';
import * as projectTemplates from './templates';

/**
 * Style dependencies
 */
import {
	ProjectWizardDialog,
	ProjectWizardHeader,
	ProjectWizardHeaderNote,
	ProjectWizardTemplateGrid,
	ProjectWizardWrapper,
} from './styles';

const NewProjectWizard = ( { onSelect } ) => {
	return (
		<ProjectWizardWrapper>
			<ProjectWizardDialog id="crowdsignal-new-project-wizard">
				<ProjectWizardHeader>
					{ __( 'What would you like to build today?', 'dashboard' ) }
				</ProjectWizardHeader>
				<ProjectWizardHeaderNote>
					{ __(
						'Pick a template and make it your own or start with a blank page.',
						'dashboard'
					) }
				</ProjectWizardHeaderNote>

				<ProjectWizardTemplateGrid>
					{ map( projectTemplates, ( template ) => (
						<TemplatePreview
							key={ template.name }
							template={ template }
							onSelect={ onSelect }
						/>
					) ) }
				</ProjectWizardTemplateGrid>
			</ProjectWizardDialog>
		</ProjectWizardWrapper>
	);
};

export default NewProjectWizard;
