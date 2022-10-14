import styled from '@emotion/styled';
import CrowdsignalFooter from '../crowdsignal-footer';

const Footer = styled.div`
	position: sticky;
	z-index: 1000;
	bottom: 0;
	height: 50px;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	background-color: var( --cs--style--color--background, white );
	padding: 12px;

	${ CrowdsignalFooter.Wrapper } {
		margin: 0;
		font-size: 13px;
	}
`;

const StickyFooter = ( { children } ) => {
	return <Footer className="crowdsignal-sticky-footer">{ children }</Footer>;
};

StickyFooter.Wrapper = Footer;

export default StickyFooter;
