/**
 * External dependencies
 */
import { Dropdown } from '@wordpress/components';
import {
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState
} from '@wordpress/element';

/**
 * Internal dependencies
 */
import { fetchFeedbackSurvey } from '@crowdsignal/rest-api';
import FeedbackPopover from './popover';
import FeedbackToggle from './toggle';
import { adjustFrameOffset, getPopoverPosition, getTogglePosition } from './util';
import { ToggleMode } from './constants'

/**
 * Style dependencies
 */
import { PopoverWrapper } from './styles/popover-styles';

const settings = {
	emailRequired: true,
	position: 'center right',
	style: {
	},
	text: {
		email: 'Your email',
		feedback: 'Please give some feedback',
		header: 'Oh, hi Mark!',
		submitButton: 'All in!',
		submitMessage: 'Much success!',
		toggle: 'Get to the chopper!',
	},
	toggleMode: ToggleMode.CLICK,
	showBranding: true,
};

const FeedbackWidget = ( {
	surveyId,
} ) => {
	const [ survey, setSurvey ] = useState( null );
	const [ position, setPosition ] = useState( {} );

	const toggle = useRef( null );

	const updatePosition = useCallback( () => {
		const [ y, x ] = settings.position.split( ' ' );

		setPosition(
			adjustFrameOffset(
				getTogglePosition(
					settings.position,
					toggle.current.offsetWidth,
					y === 'center'
						? toggle.current.offsetWidth
						: toggle.current.offsetHeight,
					{
						top: 20,
						bottom: 20,
						left: y === 'center' ? 0 : 20,
						right: y === 'center' ? 0 : 20,
					},
					document.body
				),
				y,
				toggle.current.offsetWidth,
				toggle.current.offsetHeight,
			)
		);
	}, [ toggle.current ] );

	useLayoutEffect( () => {
		updatePosition();
	}, [ updatePosition ] );

	useEffect( () => {
		const fetchData = async () => {
			const survey = await fetchFeedbackSurvey( surveyId );
			console.log( survey );
		};

		fetchData();
	}, [] );

	return (
		<PopoverWrapper position={ position }>
			<Dropdown
				popoverProps={ {
					position: getPopoverPosition( settings.position ),
				} }
				renderToggle={ ( { isOpen, onToggle } ) => (
					<FeedbackToggle
						ref={ toggle }
						isOpen={ isOpen }
						onClick={ onToggle }
						onToggle={ updatePosition }
						settings={ settings }
					/>
				) }
				renderContent={ () => (
					<FeedbackPopover surveyId={ surveyId } settings={ settings } />
				) }
			/>
		</PopoverWrapper>
	);
};

export default FeedbackWidget;
