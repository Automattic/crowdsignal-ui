/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { map } from 'lodash';
import { useSelect } from '@wordpress/data';
import { chevronLeft, Icon } from '@wordpress/icons';

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
import projectTemplates from './templates';

/**
 * Style dependencies
 */
import {
	BackButton,
	ProjectWizardDialog,
	ProjectWizardContent,
} from './styles';

const NewProjectWizard = ( { onSelect, onChangeThemeClick } ) => {
	const editorTheme = useSelect( ( select ) =>
		select( STORE_NAME ).getEditorTheme()
	);

	return (
		<ModalWrapper className="crowdsignal-modal-wrapper">
			<ProjectWizardDialog
				id="crowdsignal-new-project-wizard"
				className="crowdsignal-new-project-wizard"
			>
				<BackButton
					href="/dashboard"
					className="crowdsignal-modal-wrapper__back-button"
				>
					<Icon icon={ chevronLeft } />
					{ __( 'Back', 'dashboard' ) }
				</BackButton>

				<div>
					<ActiveTheme onChangeThemeClick={ onChangeThemeClick } />
				</div>
				<ProjectWizardContent>
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

					<ModalTemplateGrid className="crowdsignal-new-project-wizard__grid">
						{ map( projectTemplates, ( template ) => (
							<TemplatePreview
								key={ `${ editorTheme }_${ template.name }` }
								template={ template }
								onSelect={ onSelect }
							/>
						) ) }
					</ModalTemplateGrid>
				</ProjectWizardContent>
			</ProjectWizardDialog>
		</ModalWrapper>
	);
};

export default NewProjectWizard;
