/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { map } from 'lodash';

/**
 * Internal dependencies
 */
import {
	ModalDialog,
	ModalHeader,
	ModalHeaderNote,
	ModalWrapper,
} from '../modal';
import ThemePreview from './theme-preview/theme-preview';
import { themes } from './themes';

/**
 * Style dependencies
 */
import { ThemesTemplateGrid } from './styles';

const ThemesModal = ( { activeTheme, onSelect } ) => {
	return (
		<ModalWrapper>
			<ModalDialog id="crowdsignal-themes-modal">
				<ModalHeader>
					{ __( 'Pick a design theme', 'dashboard' ) }
				</ModalHeader>
				<ModalHeaderNote>
					{ __(
						'Choose your favorite theme and customize it in the editor. And no worries, you can change your theme later.',
						'dashboard'
					) }
				</ModalHeaderNote>
				<ThemesTemplateGrid>
					{ map( themes, ( theme ) => (
						<ThemePreview
							key={ theme.name }
							activeTheme={ activeTheme }
							theme={ theme }
							onSelect={ onSelect }
						/>
					) ) }
				</ThemesTemplateGrid>
			</ModalDialog>
		</ModalWrapper>
	);
};

export default ThemesModal;
