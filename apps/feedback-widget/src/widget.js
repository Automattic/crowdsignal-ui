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
import { Popover } from '@crowdsignal/components';
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
	emailRequired: false,
	position: 'center right',
	style: {
	},
	text: {
		email: 'Your email (optional)',
		feedback: 'Anything we can help you with?',
		header: '&#x1F44B; Do you have some feedback for us?',
		submitButton: 'Submit',
		submitMessage: 'Thanks for letting us know! &#x1F64F;',
		toggle: 'Get to the chopper!',
	},
	toggleMode: ToggleMode.CLICK,
	showBranding: false,
};

const FeedbackWidget = ( {
	surveyId,
} ) => {
	const [ active, setActive ] = useState( false );
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

	const handleToggle = useCallback( () => {
		setActive( ! active );
	}, [ active, setActive ] );

	const handleClose = useCallback( () => {
		setActive( false );
	}, [ setActive ] );

	return (
		<>
			<PopoverWrapper position={ position }>
				<FeedbackToggle
					ref={ toggle }
					isOpen={ active }
					onClick={ handleToggle }
					onToggle={ updatePosition }
					settings={ settings }
				/>
			</PopoverWrapper>

			<Popover
				isVisible={ active }
				context={ toggle }
				onClose={ handleClose }
				position={ getPopoverPosition( settings.position ) }
			>
				<FeedbackPopover surveyId={ surveyId } settings={ settings } />
			</Popover>
		</>
	);
};

export default FeedbackWidget;
