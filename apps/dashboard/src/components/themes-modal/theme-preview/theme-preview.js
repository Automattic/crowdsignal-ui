/**
 * External dependencies
 */
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';

/**
 * Style dependencies
 */
import {
	ThemePreviewActive,
	ThemePreviewButton,
	ThemePreviewContent,
	ThemePreviewFooter,
	ThemePreviewImg,
	ThemePreviewName,
	ThemePreviewOverlay,
	ThemePreviewWrapper,
} from './styles';

const ThemePreview = ( { activeTheme, theme, onSelect } ) => {
	const classes = classnames( {
		'is-active': theme.slug === activeTheme,
	} );

	return (
		<ThemePreviewWrapper className={ classes }>
			<ThemePreviewContent>
				<ThemePreviewOverlay>
					<ThemePreviewButton
						onClick={ () => onSelect( theme.slug ) }
					>
						{ __( 'Activate this design', 'dashboard' ) }
					</ThemePreviewButton>
				</ThemePreviewOverlay>
				<ThemePreviewImg src={ theme.image } />
			</ThemePreviewContent>
			<ThemePreviewFooter>
				<ThemePreviewName>{ theme.name }</ThemePreviewName>
				<ThemePreviewActive>
					{ __( 'Active', 'dashboard' ) }
				</ThemePreviewActive>
			</ThemePreviewFooter>
		</ThemePreviewWrapper>
	);
};

export default ThemePreview;
