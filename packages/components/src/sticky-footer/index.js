import styled from '@emotion/styled';
import CrowdsignalFooter from '../crowdsignal-footer';

const Footer = styled.div`
	position: sticky;
	z-index: 1000;
	bottom: 0;
	background-color: var( --cs--style--color--background, white );
	padding: 12px;
	filter: drop-shadow( 0 0 6px rgba( 0, 0, 0, 0.02 ) )
		drop-shadow( 0 2px 4px rgba( 0, 0, 0, 0.08 ) );

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
