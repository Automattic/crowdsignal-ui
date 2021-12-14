/**
 * External dependencies
 */
import styled from '@emotion/styled';

const Checkmark = styled.span`
	display: inline-block;
	box-sizing: content-box;
	height: 1em;
	margin-left: auto;
	padding-left: 16px;
	width: 1em;

	&::before {
		border-bottom: 6px solid currentColor;
		border-right: 6px solid currentColor;
		content: '';
		display: block;
		margin: 0 auto;
		height: 100%;
		transform: scale( 0.5 ) rotate( 45deg ) translateY( -5px )
			translateX( -5px );
		width: 50%;
	}
`;

const CheckmarkWrapper = ( { isMultiSelect, isSelected } ) => {
	if ( isMultiSelect || ! isSelected ) {
		return null;
	}

	return <Checkmark />;
};

export default CheckmarkWrapper;
