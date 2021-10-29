// @ts-check

/**
 * External dependencies
 */
import { slice } from 'lodash';

/**
 * Internal dependencies
 */
import { curry } from '@crowdsignal/functional';

/**
 * @typedef {Array<Object>} Page
 */

/**
 * @typedef {Object} ProjectContent
 *
 * @property {Array<Page>} pages     Page array.
 * @property {number}      timestamp Last edit timestamp.
 */

/**
 * @typedef {Object} Project
 *
 * @property {number}                created       Project creation date.
 * @property {ProjectContent}        draftContent  Project's draft content.
 * @property {string}                name          Project name.
 * @property {string}                permalink     Project URL.
 * @property {boolean}               public        True when project is public.
 * @property {ProjectContent | null} publicContent Project's last published content.
 * @property {string}                slug          Project slug.
 * @property {string}                title         Project title.
 */

/**
 * Creates a new project.
 *
 * @return {Project} New Project object.
 */
export const createProject = () => {
	const currentTimestamp = Math.floor( Date.now() / 1000 );

	return {
		created: currentTimestamp,
		draftContent: {
			pages: [ [] ],
			timestamp: currentTimestamp,
		},
		name: '',
		permalink: '',
		public: false,
		publicContent: null,
		slug: '',
		title: '',
	};
};

/**
 * Helper for detecting whether a project contains unpublished changes.
 *
 * @param  {Project} project Project.
 * @return {boolean}         True when project contains unpublished changes.
 */
export const hasUnpublishedChanges = ( project ) => ! project.public;

/**
 * Updates the project's public content.
 *
 * @param  {Project} project Project.
 * @return {Project}         Updated project.
 */
export const publishProject = ( project ) => ( {
	...project,
	publicContent: project.draftContent,
	public: true,
} );

/**
 * Merges two project objects.
 *
 * @param  {Project} project      Projct to merge into.
 * @param  {Project} otherProject Project to be merged.
 * @return {Project}              Merged project.
 */
const __mergeProject = ( project, otherProject ) => ( {
	...project,
	...otherProject,
} );
export const mergeProject = curry( __mergeProject );

/**
 * Update a project's title.
 *
 * @param  {Project} project Project to update.
 * @param  {string}  title   Project title.
 * @return {Project}         Project with an updated title.
 */
const __updateProjectTitle = ( project, title ) => ( {
	...project,
	title,
	name: title,
} );
export const updateProjectTitle = curry( __updateProjectTitle );

/**
 * Update a project's page.
 * Any updates are saved as draft by default and require publishProject
 * to be called separately to update the public content.
 *
 * @param  {Project} project   Project to update.
 * @param  {Page}    page      The updated page.
 * @param  {number=} pageIndex Index of the updated page. Defaults to 0.
 * @return {Project}           Updated project.
 */
const __updateProjectPage = ( project, page, pageIndex = 0 ) => ( {
	...project,
	draftContent: {
		pages: [
			...slice( project.draftContent.pages || [], 0, pageIndex ),
			page,
			...slice( project.draftContent.pages || [], pageIndex + 1 ),
		],
		timestamp: Math.floor( Date.now() / 1000 ),
	},
	public: false,
} );
export const updateProjectPage = curry( __updateProjectPage );
