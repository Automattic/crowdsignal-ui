/**
 * External dependencies
 */
import styled from '@emotion/styled';

const ContentWrapper = styled.div`
	box-sizing: border-box;
	margin: 0;
	width: 100%;

	&
		> *:not( .alignwide ):not( .alignfull ):not( .alignleft ):not( .alignright ):not( .justify ):not( .wp-block-separator ):not( .entry-attachment ),
	&
		[class*='inner-container']
		> *:not( .alignwide ):not( .alignfull ):not( .alignleft ):not( .alignright ):not( .justify ):not( .wp-block-separator ) {
		max-width: 720px;
		margin-left: auto;
		margin-right: auto;
	}

	& > .alignwide,
	& > .wp-block-image.alignwide {
		max-width: 1080px;
		margin-left: auto;
		margin-right: auto;
	}
`;

export default ContentWrapper;
