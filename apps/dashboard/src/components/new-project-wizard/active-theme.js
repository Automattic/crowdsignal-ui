/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import { getTheme } from '../../util/theme/themes';
import { STORE_NAME } from '../../data';

const ActiveThemeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 40px;
	font-size: 16px;
	color: var( --color-neutral-60 );

	> *:not( :last-child ) {
		margin-bottom: 12px;
	}

	img {
		width: 150px;
		height: 112px;
		object-fit: cover;
	}
`;

const ActiveThemeHeader = styled.span`
	font-weight: 700;
`;

const ChangeThemeButton = styled.button`
	font-size: 14px;
	background-color: transparent;
	border: 1px solid var( --color-neutral-10 );
	border-radius: 2px;
	padding: 12px;
`;

const ActiveTheme = ( { onChangeThemeClick } ) => {
	const editorTheme = useSelect( ( select ) =>
		select( STORE_NAME ).getEditorTheme()
	);

	const activeTheme = getTheme( editorTheme );

	return (
		<ActiveThemeWrapper>
			<ActiveThemeHeader>
				{ __( 'Your active theme:', 'dashboard' ) }
			</ActiveThemeHeader>
			<img src={ activeTheme.image } alt={ activeTheme.name } />
			<span>{ activeTheme.name }</span>
			<ChangeThemeButton onClick={ onChangeThemeClick }>
				{ __( 'Change Theme', 'dashboard' ) }
			</ChangeThemeButton>
		</ActiveThemeWrapper>
	);
};

export default ActiveTheme;
