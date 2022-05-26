import CoreEmbed from './core-embed';
import MatrixQuestion from './matrix-question';
import MultipleChoiceAnswer from './multiple-choice-answer';
import MultipleChoiceQuestion from './multiple-choice-question';
import Poll from './poll';
import PollAnswer from './poll-answer';
import RankingAnswer from './ranking-answer';
import RankingQuestion from './ranking-question';
import RatingScaleAnswer from './rating-scale-answer';
import RatingScaleQuestion from './rating-scale-question';
import SubmitButton from './submit-button';
import TextInput from './text-input';
import TextQuestion from './text-question';

export * from './components';

export {
	CoreEmbed,
	MatrixQuestion,
	MultipleChoiceAnswer,
	MultipleChoiceQuestion,
	Poll,
	PollAnswer,
	RankingAnswer,
	RankingQuestion,
	RatingScaleAnswer,
	RatingScaleQuestion,
	SubmitButton,
	TextInput,
	TextQuestion,
};

export const projectBlocks = [
	CoreEmbed,
	MatrixQuestion,
	MultipleChoiceAnswer,
	MultipleChoiceQuestion,
	RankingAnswer,
	RankingQuestion,
	RatingScaleAnswer,
	RatingScaleQuestion,
	SubmitButton,
	TextInput,
	TextQuestion,
];

export { renderBlocks } from './render-blocks';

export * from './util';
