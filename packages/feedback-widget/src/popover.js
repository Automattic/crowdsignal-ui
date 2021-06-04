/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
import { useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { CrowdsignalFooter } from '@crowdsignal/components';
import FeedbackForm from './form';
import FeedbackSubmit from './submit';
import { View } from './constants';

/**
 * Style dependencies
 */
import { Popover } from './styles/popover-styles';

const FeedbackPopover = ( { settings, surveyId } ) => {
	const [ currentView, setCurrentView ] = useState( View.QUESTION );
	const [ height, setHeight ] = useState( 'auto' );

	const popover = useRef( null );

	const handleSubmit = () => {
		setHeight( `${ popover.current.offsetHeight }px` );
		setCurrentView( View.SUBMIT );
	};

	return (
		<Popover
			ref={ popover }
			height={ height }
			{ ...settings.style }
		>
			{ currentView === View.QUESTION && (
				<FeedbackForm
					surveyId={ surveyId }
					onSubmit={ handleSubmit }
					settings={ settings }
				/>
			) }

			{ currentView === View.SUBMIT && (
				<FeedbackSubmit settings={ settings } />
			) }

			{ settings.showBranding && (
				<CrowdsignalFooter
					logo
					source="feedback-widget"
					message={ __(
						'Collect your own feedback with Crowdsignal',
						'feedback-widget',
					) }
				/>
			) }
		</Popover>
	);
};

export default FeedbackPopover;
