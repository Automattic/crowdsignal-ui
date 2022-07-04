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
import { ModalButton } from '../modal';

const ActiveThemeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 16px;
	color: var( --color-neutral-60 );

	> :first-of-type {
		text-align: center;
	}

	> *:not( :last-child ) {
		margin-bottom: 12px;
	}

	img {
		width: 160px;
		height: 112px;
		object-fit: cover;
	}
`;

const ActiveThemeHeader = styled.span`
	font-weight: 700;
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
			<ModalButton onClick={ onChangeThemeClick }>
				{ __( 'Change Theme', 'dashboard' ) }
			</ModalButton>
		</ActiveThemeWrapper>
	);
};

export default ActiveTheme;
