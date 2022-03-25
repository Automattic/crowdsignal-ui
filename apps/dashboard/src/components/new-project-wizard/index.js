/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { map } from 'lodash';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import {
	ModalHeader,
	ModalHeaderNote,
	ModalTemplateGrid,
	ModalWrapper,
} from '../modal';
import { STORE_NAME } from '../../data';
import ActiveTheme from './active-theme';
import TemplatePreview from './template-preview';
import * as projectTemplates from './templates';

/**
 * Style dependencies
 */
import { BackButton, ProjectWizardDialog } from './styles';

const NewProjectWizard = ( { onSelect, onChangeThemeClick } ) => {
	const editorTheme = useSelect( ( select ) =>
		select( STORE_NAME ).getEditorTheme()
	);

	return (
		<ModalWrapper>
			<ProjectWizardDialog id="crowdsignal-new-project-wizard">
				<BackButton href="/dashboard">
					{ __( 'Back to dashboard', 'dashboard' ) }
				</BackButton>

				<div>
					<ActiveTheme onChangeThemeClick={ onChangeThemeClick } />
				</div>
				<div>
					<ModalHeader>
						{ __(
							'What would you like to build today?',
							'dashboard'
						) }
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
								key={ `${ editorTheme }_${ template.name }` }
								template={ template }
								onSelect={ onSelect }
							/>
						) ) }
					</ModalTemplateGrid>
				</div>
			</ProjectWizardDialog>
		</ModalWrapper>
	);
};

export default NewProjectWizard;
