/**
 * Internal dependencies
 */
import { useBorderStyles, useColorStyles } from '@crowdsignal/styles';
import QuestionWrapper from '../';

export default {
	title: 'Blocks/Question Wrapper',
	component: QuestionWrapper,
};

const exampleAttributes = {
	borderRadius: 25,
	borderWidth: 0,
	gradient:
		'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
	textColor: '#ffffff',
};

const Default = () => (
	<QuestionWrapper
		className="custom-class-name"
		style={ {
			...useColorStyles( exampleAttributes ),
			...useBorderStyles( exampleAttributes ),
			width: '600px',
		} }
	/>
);

export { Default as QuestionWrapper };

// Probably it's safe for these to deal with attributes directly since they're meant to be used inside blocks.
//
// I should add a /blocks directory for all of them and they shall be named Block... components
