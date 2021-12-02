/**
 * External dependencies
 */
// eslint-disable-next-line import/named
import { DocumentSection } from 'isolated-block-editor';
import { get } from 'lodash';
import { __ } from '@wordpress/i18n';
// eslint-disable-next-line
import { __experimentalGetSettings, format } from '@wordpress/date';
import {
	CustomSelectControl,
	ExternalLink,
	PanelBody,
	PanelRow,
	ToggleControl,
} from '@wordpress/components';
// import { GlobalStylesUI } from '@wordpress/edit-site/src/components/global-styles';

const DocumentSettings = ( { project } ) => {
	const dateSettings = __experimentalGetSettings();
	const formatDate = ( timestamp ) =>
		format( dateSettings.formats.datetime, timestamp * 1000 );

	const formTimeoutOptions = [ { key: 24, name: '24 hours' } ];

	const isPublic = get( project, [ 'content', 'public' ], false );
	const visibiliy = isPublic
		? __( 'Public', 'dashboard' )
		: __( 'Private', 'dashboard' );

	const publicTimestamp = get(
		project,
		[ 'content', 'public', 'timestamp' ],
		0
	);
	const draftTimestamp = get(
		project,
		[ 'content', 'draft', 'timestamp' ],
		0
	);
	const lastUpdated = Math.max( publicTimestamp, draftTimestamp );

	//eslint-disable-next-line
	const handleChangeRestriction = ( key ) => ( value ) => {
		//TODO: Call API to save values
	};

	return (
		<DocumentSection>
			<PanelBody title={ __( 'Status & Visibility', 'dashboard' ) }>
				<PanelRow>
					<span>{ __( 'Visibility', 'dashboard' ) }</span>
					<span>{ visibiliy }</span>
				</PanelRow>
				<PanelRow>
					<span>{ __( 'Created', 'dashboard' ) }</span>
					<span>{ formatDate( project.created ) }</span>
				</PanelRow>
				<PanelRow>
					<span>{ __( 'Last Updated', 'dashboard' ) }</span>
					<span>{ formatDate( lastUpdated ) }</span>
				</PanelRow>
			</PanelBody>
			<PanelBody
				title={ __( 'Permalink', 'dashboard' ) }
				initialOpen={ false }
			>
				<PanelRow>
					<span>View Project</span>
				</PanelRow>
				<ExternalLink href={ project.permalink }>
					{ project.permalink }
				</ExternalLink>
			</PanelBody>
			<PanelBody
				title={ __( 'Restrictions', 'dashboard' ) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __( 'Captcha protection', 'dashboard' ) }
					value={ project.restrictCaptcha }
					onChange={ handleChangeRestriction( 'restrictCaptcha' ) }
				/>
				<ToggleControl
					label={ __( 'Password protection', 'dashboard' ) }
					value={ project.restrictPassword }
					onChange={ handleChangeRestriction( 'restrictPassword' ) }
				/>
				<ToggleControl
					label={ __( 'One response per computer', 'dashboard' ) }
					value={ project.restrictQuota }
					onChange={ handleChangeRestriction( 'restrictQuota' ) }
				/>
				<ToggleControl
					label={ __( 'IP restriction', 'dashboard' ) }
					value={ project.restrictIp }
					onChange={ handleChangeRestriction( 'restrictIp' ) }
				/>
				<ToggleControl
					label={ __( 'Email restriction', 'dashboard' ) }
					value={ project.restrictEmail }
					onChange={ handleChangeRestriction( 'restrictEmail' ) }
				/>
				<CustomSelectControl
					label={ __( 'Form Timeout', 'dashboard' ) }
					options={ formTimeoutOptions }
					value={ formTimeoutOptions.find(
						( o ) => o.key === project.responseTimeout
					) }
				/>
			</PanelBody>
			{ /*<PanelBody title={ __( 'Theme', 'dashboard' ) } />*/ }
			{ /*<PanelBody title={ __( 'Navigation', 'dashboard' ) } />*/ }
			{ /*<PanelBody title={ __( 'Language', 'dashboard' ) } />*/ }
			{ /*<GlobalStylesUI />*/ }
		</DocumentSection>
	);
};

export default DocumentSettings;
