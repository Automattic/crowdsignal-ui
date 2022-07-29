// @ts-check

/**
 * @typedef {Array<Object>} Page
 */

/**
 * @typedef {Object} ProjectContent
 *
 * @property {Array<Page>} pages     Page array.
 * @property {string}      timestamp Last edit timestamp.
 */

/**
 * @typedef {Partial<Object>} ProjectEmbedCardSettings
 *
 * @property {Object} viewport        Embed card viewport settings.
 * @property {number} viewport.width  Embed card viewport width.
 * @property {number} viewport.height Embed card viewport height.
 */

/**
 * @typedef {Object} Project
 *
 * @property {number}                   id               Project ID.
 * @property {string}                   created          Project creation date.
 * @property {ProjectContent}           draftContent     Project's draft content.
 * @property {ProjectEmbedCardSettings} draftEmbedCard   Project's draft embed card settings.
 * @property {Object}                   draftNavigation  Project's draft navigation settings.
 * @property {string}                   draftTheme       Project's draft theme.
 * @property {string}                   name             Project name.
 * @property {string}                   permalink        Project URL.
 * @property {boolean}                  public           True when project is public.
 * @property {ProjectContent | null}    publicContent    Project's last published content.
 * @property {ProjectEmbedCardSettings} publicEmbedCard  Project's public embed card settings.
 * @property {Object}                   publicNavigation Project's draft navigation settings.
 * @property {string | null}            publicTheme      Project's public theme.
 * @property {string}                   slug             Project slug.
 * @property {string}                   title            Project title.
 */

/**
 * @typedef {Partial<Omit<Project, "draftContent" | "publicContent"> & {
 *   draftContent: Partial<ProjectContent>,
 *   publicContent: Partial<ProjectContent>
 * }>} PartialProject
 */

import { isEqual } from 'lodash';

/**
 * Creates an eempty project instance.
 *
 * @return {Project}
 */
export const createProject = () => {
	const timestamp = new Date().toISOString();

	return {
		id: 0,
		created: timestamp,
		draftContent: {
			pages: [ [] ],
			timestamp,
		},
		draftEmbedCard: {},
		draftNavigation: {},
		draftTheme: 'leven',
		name: '',
		permalink: '',
		public: false,
		publicContent: null,
		publicEmbedCard: {},
		publicNavigation: {},
		publicTheme: null,
		slug: '',
		title: '',
	};
};

/**
 * @param  {Project} project Project.
 * @return {string}          Project's last updated date.
 */
export const getLastUpdatedDate = ( project ) => project.draftContent.timestamp;

/**
 * Returns true if project contains unpublished changes.
 *
 * @param  {Project} project Project.
 * @return {boolean}         True when project contains unpublished changes.
 */
export const hasUnpublishedChanges = ( project ) =>
	! project.publicContent ||
	project.publicContent.timestamp < project.draftContent.timestamp ||
	project.draftTheme !== project.publicTheme ||
	! isEqual( project.draftNavigation, project.publicNavigation );

/**
 * @param  {Project} project Project.
 * @return {boolean}         True if the project is public.
 */
export const isPublic = ( project ) => !! project.public;
