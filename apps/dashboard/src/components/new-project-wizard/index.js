/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { map } from 'lodash';

/**
 * Internal dependencies
 */
import {
	ModalHeader,
	ModalHeaderNote,
	ModalTemplateGrid,
	ModalWrapper,
} from '../modal';
import TemplatePreview from './template-preview';
import * as projectTemplates from './templates';

/**
 * Style dependencies
 */
import { ProjectWizardDialog } from './styles';

const NewProjectWizard = ( { onSelect } ) => {
	return (
		<ModalWrapper>
			<ProjectWizardDialog id="crowdsignal-new-project-wizard">
				<ModalHeader>
					{ __( 'What would you like to build today?', 'dashboard' ) }
				</ModalHeader>
				<ModalHeaderNote>
					{ __(
						'Pick a template and make it your own or start with a blank page.',
						'dashboard'
					) }
				</ModalHeaderNote>

				<ModalTemplateGrid>
					{ map( projectTemplates, ( template ) => (
						<TemplatePreview
							key={ template.name }
							template={ template }
							onSelect={ onSelect }
						/>
					) ) }
				</ModalTemplateGrid>
			</ProjectWizardDialog>
		</ModalWrapper>
	);
};

export default NewProjectWizard;
