/**
 * External dependencies
 */
import {
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from '@wordpress/element';
import { merge } from 'lodash';

/**
 * Internal dependencies
 */
import { Popover } from '@crowdsignal/components';
import { fetchFeedbackSurvey } from '@crowdsignal/rest-api';
import FeedbackPopover from './popover';
import FeedbackToggle from './toggle';
import {
	adjustFrameOffset,
	getPopoverPosition,
	getTogglePosition,
} from './util';
import { ToggleMode } from './constants';

/**
 * Style dependencies
 */
import { PopoverWrapper } from './styles/popover-styles';

const defaultSettings = {
	emailRequired: false,
	position: 'center right',
	style: {},
	text: {
		email: 'Your email (optional)',
		feedback: 'Anything we can help you with?',
		header: '&#x1F44B; Do you have some feedback for us?',
		submitButton: 'Submit',
		submitMessage: 'Thanks for letting us know! &#x1F64F;',
		toggle: 'Feedback',
	},
	toggleMode: ToggleMode.CLICK,
	showBranding: false,
};

const FeedbackWidget = ( { settings, surveyId } ) => {
	const [ active, setActive ] = useState( false );
	const [ _, setSurvey ] = useState( null );
	const [ position, setPosition ] = useState( {} );

	const toggle = useRef( null );

	const widgetSettings = merge( defaultSettings, settings );

	const updatePosition = useCallback( () => {
		const [ y ] = widgetSettings.position.split( ' ' );

		setPosition(
			adjustFrameOffset(
				getTogglePosition(
					widgetSettings.position,
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
				toggle.current.offsetHeight
			)
		);
	}, [ toggle.current ] );

	useLayoutEffect( () => {
		updatePosition();
	}, [ updatePosition ] );

	useEffect( () => {
		const fetchData = async () =>
			setSurvey( await fetchFeedbackSurvey( surveyId ) );

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
					settings={ widgetSettings }
				/>
			</PopoverWrapper>

			<Popover
				isVisible={ active }
				context={ toggle }
				onClose={ handleClose }
				position={ getPopoverPosition( widgetSettings.position ) }
			>
				<FeedbackPopover
					surveyId={ surveyId }
					settings={ widgetSettings }
				/>
			</Popover>
		</>
	);
};

export default FeedbackWidget;
