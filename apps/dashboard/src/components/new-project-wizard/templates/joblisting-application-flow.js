/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { createTemplate } from './create-template';

export const joblistingApplicationFlowTemplate = createTemplate(
	__( 'Joblisting – Application Flow', 'dashboard' ),
	__( 'Description' ),
	[
		[
			{
				name: 'core/image',
				isValid: true,
				attributes: {
					align: 'center',
					url:
						'https://automattic.files.wordpress.com/2021/09/automattic-logotype-color.png',
					alt: '',
					caption: '',
					width: 200,
					height: 67,
					style: {
						color: [],
					},
				},
				innerBlocks: [],
				originalContent:
					'<figure class="wp-block-image aligncenter is-resized"><img src="https://automattic.files.wordpress.com/2021/09/automattic-logotype-color.png" alt="" width="200" height="67"/></figure>',
				validationIssues: [],
			},
			{
				name: 'core/heading',
				isValid: true,
				attributes: {
					content:
						'Senior Software Engineer <br>(Frontend, JavaScript)',
					level: 2,
				},
				innerBlocks: [],
				originalContent:
					'<h2>Senior Software Engineer <br>(Frontend, JavaScript)</h2>',
				validationIssues: [],
			},
			{
				name: 'core/paragraph',
				isValid: true,
				attributes: {
					content: '<em>Remote</em>',
					dropCap: false,
				},
				innerBlocks: [],
				originalContent: '<p><em>Remote</em></p>',
				validationIssues: [],
			},
			{
				name: 'core/paragraph',
				isValid: true,
				attributes: {
					content:
						'We\u2019re building&nbsp;<a href="https://github.com/WordPress/gutenberg">new ways</a>&nbsp;to <a href="https://github.com/Automattic/wp-calypso">interact with WordPress</a>. They\u2019re simple, fast, and highly usable. They\u2019re written in the latest web technologies and are used by millions of people. We want your help to expand our reach and keep our approach fresh.&nbsp;',
					dropCap: false,
				},
				innerBlocks: [],
				originalContent:
					'<p>We\u2019re building&nbsp;<a href="https://github.com/WordPress/gutenberg">new ways</a>&nbsp;to <a href="https://github.com/Automattic/wp-calypso">interact with WordPress</a>. They\u2019re simple, fast, and highly usable. They\u2019re written in the latest web technologies and are used by millions of people. We want your help to expand our reach and keep our approach fresh.&nbsp;</p>',
				validationIssues: [],
			},
			{
				name: 'core/paragraph',
				isValid: true,
				attributes: {
					content:
						'<strong>What have we worked on recently?</strong>',
					dropCap: false,
				},
				innerBlocks: [],
				originalContent:
					'<p><strong>What have we worked on recently?</strong></p>',
				validationIssues: [],
			},
			{
				name: 'core/list',
				isValid: true,
				attributes: {
					ordered: false,
					values:
						'<li><a href="https://wordpress.org/gutenberg/">Gutenberg</a>&nbsp;is a new block-level editor with clean abstractions for users, too, not just developers.</li><li><a href="https://jetpack.com/">Jetpack</a>&nbsp;is a plugin that brings cloud-scale features to self-hosted sites and a good example is&nbsp;<a href="https://jetpack.com/support/how-to-rewind/">Rewind</a>, think \u201cgit\u201d for WordPress sites.</li><li><a href="https://woocommerce.com/">WooCommerce</a>&nbsp;is the most popular e-commerce platform on the web.</li><li><a href="https://www.tumblr.com">Tumblr</a> is a microblogging social network where users create, share, and follow what they love.</li><li>To view more of our recent work, check out our longer product list on&nbsp;<a href="https://automattic.com/">Automattic.com</a>.</li>',
				},
				innerBlocks: [],
				originalContent:
					'<ul><li><a href="https://wordpress.org/gutenberg/">Gutenberg</a>&nbsp;is a new block-level editor with clean abstractions for users, too, not just developers.</li><li><a href="https://jetpack.com/">Jetpack</a>&nbsp;is a plugin that brings cloud-scale features to self-hosted sites and a good example is&nbsp;<a href="https://jetpack.com/support/how-to-rewind/">Rewind</a>, think \u201cgit\u201d for WordPress sites.</li><li><a href="https://woocommerce.com/">WooCommerce</a>&nbsp;is the most popular e-commerce platform on the web.</li><li><a href="https://www.tumblr.com">Tumblr</a> is a microblogging social network where users create, share, and follow what they love.</li><li>To view more of our recent work, check out our longer product list on&nbsp;<a href="https://automattic.com/">Automattic.com</a>.</li></ul>',
				validationIssues: [],
			},
			{
				name: 'core/paragraph',
				isValid: true,
				attributes: {
					content:
						'<strong><em>We are hiring heavily for teams across all of Automattic. Please highlight if you have experience or interests any in the following areas: e-commerce, payments, shipping, CMS, website builders, social media applications, marketing/advertising, marketplaces, or partner integrations.</em></strong>',
					dropCap: false,
				},
				innerBlocks: [],
				originalContent:
					'<p><strong><em>We are hiring heavily for teams across all of Automattic. Please highlight if you have experience or interests any in the following areas: e-commerce, payments, shipping, CMS, website builders, social media applications, marketing/advertising, marketplaces, or partner integrations.</em></strong></p>',
				validationIssues: [],
			},
			{
				name: 'core/paragraph',
				isValid: true,
				attributes: {
					content:
						'<strong>As a Senior JavaScript Engineer you:</strong>',
					dropCap: false,
				},
				innerBlocks: [],
				originalContent:
					'<p><strong>As a Senior JavaScript Engineer you:</strong></p>',
				validationIssues: [],
			},
			{
				name: 'core/list',
				isValid: true,
				attributes: {
					ordered: false,
					values:
						'<li>Are passionate about and have a rock-solid understanding of the core JavaScript language, HTML5, and CSS3.&nbsp;</li><li>Are accomplished at developing well-structured web applications using modern JavaScript tools like React and Redux.</li><li>Have a passion for crafting experiences that users rave about.</li><li>Are able to iterate and ship ideas quickly, within a highly collaborative yet autonomous team.</li><li>Have experience with a&nbsp;server-side language such as NodeJS, Go, PHP, Ruby, or Python.&nbsp;</li>',
				},
				innerBlocks: [],
				originalContent:
					'<ul><li>Are passionate about and have a rock-solid understanding of the core JavaScript language, HTML5, and CSS3.&nbsp;</li><li>Are accomplished at developing well-structured web applications using modern JavaScript tools like React and Redux.</li><li>Have a passion for crafting experiences that users rave about.</li><li>Are able to iterate and ship ideas quickly, within a highly collaborative yet autonomous team.</li><li>Have experience with a&nbsp;server-side language such as NodeJS, Go, PHP, Ruby, or Python.&nbsp;</li></ul>',
				validationIssues: [],
			},
			{
				name: 'core/paragraph',
				isValid: true,
				attributes: {
					content: '<strong>Extra credit if you have:</strong>',
					dropCap: false,
				},
				innerBlocks: [],
				originalContent:
					'<p><strong>Extra credit if you have:</strong></p>',
				validationIssues: [],
			},
			{
				name: 'core/list',
				isValid: true,
				attributes: {
					ordered: false,
					values:
						'<li>Experience using type safe JavaScript based languages, such as TypeScript.</li><li>WordPress programming experience.</li><li>Experience using containers, Kubernetes, and Prometheus.</li><li>Open source contributions.</li><li>Contributions to programs designed to help underrepresented people enter the tech field.</li><li>Experience&nbsp;and enthusiasm for building accessible web pages and products.</li><li>Data analysis experience, and understanding of how analytics can help with product decisions.</li><li>Experience setting up and customizing JavaScript tooling and build systems.</li><li><strong><em>If you are most interested in working for a particular&nbsp;<a href="https://automattic.com/">product</a>, please let us know in your application!</em></strong></li>',
				},
				innerBlocks: [],
				originalContent:
					'<ul><li>Experience using type safe JavaScript based languages, such as TypeScript.</li><li>WordPress programming experience.</li><li>Experience using containers, Kubernetes, and Prometheus.</li><li>Open source contributions.</li><li>Contributions to programs designed to help underrepresented people enter the tech field.</li><li>Experience&nbsp;and enthusiasm for building accessible web pages and products.</li><li>Data analysis experience, and understanding of how analytics can help with product decisions.</li><li>Experience setting up and customizing JavaScript tooling and build systems.</li><li><strong><em>If you are most interested in working for a particular&nbsp;<a href="https://automattic.com/">product</a>, please let us know in your application!</em></strong></li></ul>',
				validationIssues: [],
			},
			{
				name: 'core/paragraph',
				isValid: true,
				attributes: {
					content:
						'<strong>Speaking of interests and skills, here are some areas in which you can grow and have further impact in the future at the company:</strong>',
					dropCap: false,
				},
				innerBlocks: [],
				originalContent:
					'<p><strong>Speaking of interests and skills, here are some areas in which you can grow and have further impact in the future at the company:</strong></p>',
				validationIssues: [],
			},
			{
				name: 'core/list',
				isValid: true,
				attributes: {
					ordered: false,
					values:
						'<li>Leadership \u2013 we offer a variety of leadership options to those who have interest, including becoming a team lead and managing releases.</li><li>Learning and development \u2013 we have a generous personal development budget and encourage you to grow your skills through courses, books and conferences.</li><li>Architecture \u2013 we encourage developers to develop expertise in the systems they work with, guide their evolution and mentor other developers working on them.</li><li>Engineering effectiveness \u2013 we believe in helping other developers become more effective through tools, practices, cross-team collaborations, and process improvements.</li>',
				},
				innerBlocks: [],
				originalContent:
					'<ul><li>Leadership \u2013 we offer a variety of leadership options to those who have interest, including becoming a team lead and managing releases.</li><li>Learning and development \u2013 we have a generous personal development budget and encourage you to grow your skills through courses, books and conferences.</li><li>Architecture \u2013 we encourage developers to develop expertise in the systems they work with, guide their evolution and mentor other developers working on them.</li><li>Engineering effectiveness \u2013 we believe in helping other developers become more effective through tools, practices, cross-team collaborations, and process improvements.</li></ul>',
				validationIssues: [],
			},
			{
				name: 'core/paragraph',
				isValid: true,
				attributes: {
					content: '<strong>How do we work?</strong>',
					dropCap: false,
				},
				innerBlocks: [],
				originalContent: '<p><strong>How do we work?</strong></p>',
				validationIssues: [],
			},
			{
				name: 'core/list',
				isValid: true,
				attributes: {
					ordered: false,
					values:
						'<li>We\u2019re&nbsp;<a href="https://automattic.com/creed/help-a-colleague/">kind to each other</a>&nbsp;and our users \u2013 we strive to build a positive, supportive, and inclusive culture of cohesive teams focused on delivering value to our customers.</li><li>We work as a global and distributed workforce resulting in a unique way of working built around&nbsp;<a href="https://automattic.com/creed">our creed</a>.&nbsp;</li><li>We offer flexible work arrangements allowing our team members to work when they feel best.</li><li>We open-source! We\u2019re cool with&nbsp;<a href="https://github.com/Automattic">open-sourcing</a>&nbsp;everything except passwords, or secret keys.</li><li>We ship often,&nbsp;<a href="https://automattic.com/about/">deploying many</a>&nbsp;times daily with the help of peer code review, continuous integration, and our global workforce in over 70 countries.</li><li>We welcome collaboration, and you can be involved in any discussion across our many communication channels.</li>',
				},
				innerBlocks: [],
				originalContent:
					'<ul><li>We\u2019re&nbsp;<a href="https://automattic.com/creed/help-a-colleague/">kind to each other</a>&nbsp;and our users \u2013 we strive to build a positive, supportive, and inclusive culture of cohesive teams focused on delivering value to our customers.</li><li>We work as a global and distributed workforce resulting in a unique way of working built around&nbsp;<a href="https://automattic.com/creed">our creed</a>.&nbsp;</li><li>We offer flexible work arrangements allowing our team members to work when they feel best.</li><li>We open-source! We\u2019re cool with&nbsp;<a href="https://github.com/Automattic">open-sourcing</a>&nbsp;everything except passwords, or secret keys.</li><li>We ship often,&nbsp;<a href="https://automattic.com/about/">deploying many</a>&nbsp;times daily with the help of peer code review, continuous integration, and our global workforce in over 70 countries.</li><li>We welcome collaboration, and you can be involved in any discussion across our many communication channels.</li></ul>',
				validationIssues: [],
			},
			{
				name: 'core/paragraph',
				isValid: true,
				attributes: {
					content:
						'<em>Curious who works in engineering at Automattic?&nbsp;<a rel="noreferrer noopener" href="https://www.youtube.com/watch?list=PLQFhxUeNFfdLLlGwu90TFFAP0rNuMlCgG&amp;v=k7cBoL06w5s" target="_blank">Meet our JavaScript Engineers</a>&nbsp;\u2013 Lena and Riad!</em>',
					dropCap: false,
				},
				innerBlocks: [],
				originalContent:
					'<p><em>Curious who works in engineering at Automattic?&nbsp;<a rel="noreferrer noopener" href="https://www.youtube.com/watch?list=PLQFhxUeNFfdLLlGwu90TFFAP0rNuMlCgG&amp;v=k7cBoL06w5s" target="_blank">Meet our JavaScript Engineers</a>&nbsp;\u2013 Lena and Riad!</em></p>',
				validationIssues: [],
			},
			{
				name: 'core/spacer',
				isValid: true,
				attributes: {
					height: '50px',
				},
				innerBlocks: [],
				originalContent:
					'<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>',
				validationIssues: [],
			},
			{
				name: 'core/heading',
				isValid: true,
				attributes: {
					content: '<strong>APPLICATION PROCESS</strong>',
					level: 3,
				},
				innerBlocks: [],
				originalContent:
					'<h3><strong>APPLICATION PROCESS</strong></h3>',
				validationIssues: [],
			},
			{
				name: 'core/paragraph',
				isValid: true,
				attributes: {
					content:
						'<strong>What to Expect</strong><br>We know applying to jobs can be stressful and we want to ease the stress by giving clear expectations upfront about our process. We\u2019ve outlined&nbsp;<a href="https://automattic.com/work-with-us/how-we-hire-developers/">everything you need to know here</a> including all of the steps in the process as well as how we approach hiring.&nbsp;',
					dropCap: false,
				},
				innerBlocks: [],
				originalContent:
					'<p><strong>What to Expect</strong><br>We know applying to jobs can be stressful and we want to ease the stress by giving clear expectations upfront about our process. We\u2019ve outlined&nbsp;<a href="https://automattic.com/work-with-us/how-we-hire-developers/">everything you need to know here</a> including all of the steps in the process as well as how we approach hiring.&nbsp;</p>',
				validationIssues: [],
			},
			{
				name: 'core/paragraph',
				isValid: true,
				attributes: {
					content:
						'<strong>Please note that we are paying extra attention to your answers to the questions in the application form.</strong>&nbsp;<br>They are a significant part of the hiring process, and we will review them just like we would review any other step of the hiring process. We\u2019re always iterating so if you happen to join us in the process, please feel free to offer feedback on what else we can include there!',
					dropCap: false,
				},
				innerBlocks: [],
				originalContent:
					'<p><strong>Please note that we are paying extra attention to your answers to the questions in the application form.</strong>&nbsp;<br>They are a significant part of the hiring process, and we will review them just like we would review any other step of the hiring process. We\u2019re always iterating so if you happen to join us in the process, please feel free to offer feedback on what else we can include there!</p>',
				validationIssues: [],
			},
			{
				name: 'core/spacer',
				isValid: true,
				attributes: {
					height: '50px',
				},
				innerBlocks: [],
				originalContent:
					'<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>',
				validationIssues: [],
			},
			{
				name: 'core/heading',
				isValid: true,
				attributes: {
					content: '<strong>ABOUT AUTOMATTIC</strong>',
					level: 3,
				},
				innerBlocks: [],
				originalContent: '<h3><strong>ABOUT AUTOMATTIC</strong></h3>',
				validationIssues: [],
			},
			{
				name: 'core/paragraph',
				isValid: true,
				attributes: {
					content:
						'We are the people behind <a href="http://wordpress.com/">WordPress.com</a>, <a href="http://woocommerce.com/">WooCommerce</a>, <a href="https://www.tumblr.com/">Tumblr</a>, <a href="http://simplenote.com/">Simplenote</a>, <a href="http://jetpack.com/">Jetpack</a>,&nbsp;<a href="http://longreads.com/">Longreads</a>, <a href="https://dayoneapp.com/" target="_blank" rel="noreferrer noopener">Day One</a>, <a href="https://www.pocketcasts.com" target="_blank" rel="noreferrer noopener">PocketCasts</a>, and more. We believe in making the web a better place.',
					dropCap: false,
				},
				innerBlocks: [],
				originalContent:
					'<p>We are the people behind <a href="http://wordpress.com/">WordPress.com</a>, <a href="http://woocommerce.com/">WooCommerce</a>, <a href="https://www.tumblr.com/">Tumblr</a>, <a href="http://simplenote.com/">Simplenote</a>, <a href="http://jetpack.com/">Jetpack</a>,&nbsp;<a href="http://longreads.com/">Longreads</a>, <a href="https://dayoneapp.com/" target="_blank" rel="noreferrer noopener">Day One</a>, <a href="https://www.pocketcasts.com" target="_blank" rel="noreferrer noopener">PocketCasts</a>, and more. We believe in making the web a better place.</p>',
				validationIssues: [],
			},
			{
				name: 'core/paragraph',
				isValid: true,
				attributes: {
					content:
						'We\u2019re a distributed company with more than 2000 Automatticians in 96 countries speaking 120+ different languages. We democratize publishing and commerce so anyone with a story can tell it, and anyone with a product can sell it, regardless of income, gender, politics, language, or country.',
					dropCap: false,
				},
				innerBlocks: [],
				originalContent:
					'<p>We\u2019re a distributed company with more than 2000 Automatticians in 96 countries speaking 120+ different languages. We democratize publishing and commerce so anyone with a story can tell it, and anyone with a product can sell it, regardless of income, gender, politics, language, or country.</p>',
				validationIssues: [],
			},
			{
				name: 'core/paragraph',
				isValid: true,
				attributes: {
					content:
						'We believe in Open Source and the vast majority of our work is available under the&nbsp;<a href="https://en.wikipedia.org/wiki/GNU_General_Public_License">GPL</a>.',
					dropCap: false,
				},
				innerBlocks: [],
				originalContent:
					'<p>We believe in Open Source and the vast majority of our work is available under the&nbsp;<a href="https://en.wikipedia.org/wiki/GNU_General_Public_License">GPL</a>.</p>',
				validationIssues: [],
			},
			{
				name: 'core/heading',
				isValid: true,
				attributes: {
					content: 'Diversity, Equity, and Inclusion at Automattic',
					level: 4,
				},
				innerBlocks: [],
				originalContent:
					'<h4>Diversity, Equity, and Inclusion at Automattic</h4>',
				validationIssues: [],
			},
			{
				name: 'core/paragraph',
				isValid: true,
				attributes: {
					content:
						'We\u2019re improving diversity, equity, and inclusion in the tech industry. At Automattic, we want people to love their work and show respect and empathy to all. We welcome differences and strive to increase participation from traditionally underrepresented groups. Our DEI committee involves Automatticians across the company and drives grassroots change. For example, this group has helped facilitate private online spaces for affiliated Automatticians to gather and helps run a monthly DEI People Lab series for further learning. Diversity, Equity and Inclusion is a priority at Automattic, though our dedication influences far more than just Automatticians: We make our products freely available and translate our products into and offer customer support in numerous languages. We require unconscious bias training for our hiring teams and ensure our products are accessible across different bandwidths and devices. Learn more about our dedication to&nbsp;<a rel="noreferrer noopener" href="https://href.li/?https://automattic.com/diversity-and-inclusion/" target="_blank">diversity, equity, and inclusion</a>&nbsp;and our&nbsp;<a rel="noreferrer noopener" href="https://automattic.com/automattician-resource-groups/" target="_blank">Employee Resource Groups</a>.',
					dropCap: false,
				},
				innerBlocks: [],
				originalContent:
					'<p>We\u2019re improving diversity, equity, and inclusion in the tech industry. At Automattic, we want people to love their work and show respect and empathy to all. We welcome differences and strive to increase participation from traditionally underrepresented groups. Our DEI committee involves Automatticians across the company and drives grassroots change. For example, this group has helped facilitate private online spaces for affiliated Automatticians to gather and helps run a monthly DEI People Lab series for further learning. Diversity, Equity and Inclusion is a priority at Automattic, though our dedication influences far more than just Automatticians: We make our products freely available and translate our products into and offer customer support in numerous languages. We require unconscious bias training for our hiring teams and ensure our products are accessible across different bandwidths and devices. Learn more about our dedication to&nbsp;<a rel="noreferrer noopener" href="https://href.li/?https://automattic.com/diversity-and-inclusion/" target="_blank">diversity, equity, and inclusion</a>&nbsp;and our&nbsp;<a rel="noreferrer noopener" href="https://automattic.com/automattician-resource-groups/" target="_blank">Employee Resource Groups</a>.</p>',
				validationIssues: [],
			},
			{
				name: 'core/spacer',
				isValid: true,
				attributes: {
					height: '50px',
				},
				innerBlocks: [],
				originalContent:
					'<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>',
				validationIssues: [],
			},
			{
				name: 'crowdsignal-forms/submit-button',
				isValid: true,
				attributes: {
					label: 'Apply now',
				},
				innerBlocks: [],
				originalContent: '',
				validationIssues: [],
			},
		],
		[
			{
				name: 'core/image',
				isValid: true,
				attributes: {
					align: 'center',
					url:
						'https://automattic.files.wordpress.com/2021/09/automattic-logotype-color.png',
					alt: '',
					caption: '',
					width: 200,
					height: 67,
					style: {
						color: [],
					},
				},
				innerBlocks: [],
				originalContent:
					'<figure class="wp-block-image aligncenter is-resized"><img src="https://automattic.files.wordpress.com/2021/09/automattic-logotype-color.png" alt="" width="200" height="67"/></figure>',
				validationIssues: [],
			},
			{
				name: 'core/heading',
				isValid: true,
				attributes: {
					content: 'Apply for the Job',
					level: 3,
				},
				innerBlocks: [],
				originalContent: '<h3>Apply for the Job</h3>',
				validationIssues: [],
			},
			{
				name: 'core/spacer',
				isValid: true,
				attributes: {
					height: '10px',
				},
				innerBlocks: [],
				originalContent:
					'<div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>',
				validationIssues: [],
			},
			{
				name: 'crowdsignal-forms/text-input',
				isValid: true,
				attributes: {
					label: 'First Name',
					placeholder: '',
					mandatory: true,
					inputHeight: '',
					inputWidth: '100%',
					validation: null,
				},
				innerBlocks: [],
				originalContent: '',
				validationIssues: [],
			},
			{
				name: 'crowdsignal-forms/text-input',
				isValid: true,
				attributes: {
					label: 'Last Name',
					placeholder: '',
					mandatory: true,
					inputHeight: '',
					inputWidth: '100%',
					validation: null,
				},
				innerBlocks: [],
				originalContent: '',
				validationIssues: [],
			},
			{
				name: 'crowdsignal-forms/text-input',
				isValid: true,
				attributes: {
					label: 'Email',
					placeholder: 'example@domain.com',
					mandatory: true,
					inputHeight: '',
					inputWidth: '100%',
					validation: [ 'emailValidation' ],
				},
				innerBlocks: [],
				originalContent: '',
				validationIssues: [],
			},
			{
				name: 'crowdsignal-forms/text-input',
				isValid: true,
				attributes: {
					label: 'Phone',
					placeholder: '',
					mandatory: false,
					inputHeight: '',
					inputWidth: '100%',
					validation: null,
				},
				innerBlocks: [],
				originalContent: '',
				validationIssues: [],
			},
			{
				name: 'crowdsignal-forms/text-input',
				isValid: true,
				attributes: {
					label:
						'GitHub Username (we use this for a portion of our process)',
					placeholder: '',
					mandatory: true,
					inputHeight: '',
					inputWidth: '100%',
					validation: null,
				},
				innerBlocks: [],
				originalContent: '',
				validationIssues: [],
			},
			{
				name: 'core/spacer',
				isValid: true,
				attributes: {
					height: '50px',
				},
				innerBlocks: [],
				originalContent:
					'<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>',
				validationIssues: [],
			},
			{
				name: 'crowdsignal-forms/file-input',
				isValid: true,
				attributes: {
					label: 'Upload Resume /CV',
					buttonLabel: 'Choose file',
					mandatory: false,
					allowedTypes: [ 'pdf' ],
					fileSizeLimit: 5242880,
				},
				innerBlocks: [],
				originalContent: '',
				validationIssues: [],
			},
			{
				name: 'core/spacer',
				isValid: true,
				attributes: {
					height: '24px',
				},
				innerBlocks: [],
				originalContent:
					'<div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>',
				validationIssues: [],
			},
			{
				name: 'crowdsignal-forms/file-input',
				isValid: true,
				attributes: {
					label: 'Upload Cover Letter',
					buttonLabel: 'Choose file',
					mandatory: false,
					allowedTypes: [ 'pdf' ],
					fileSizeLimit: 5242880,
				},
				innerBlocks: [],
				originalContent: '',
				validationIssues: [],
			},
			{
				name: 'core/spacer',
				isValid: true,
				attributes: {
					height: '50px',
				},
				innerBlocks: [],
				originalContent:
					'<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>',
				validationIssues: [],
			},
			{
				name: 'crowdsignal-forms/submit-button',
				isValid: true,
				attributes: {
					label: 'Next',
				},
				innerBlocks: [],
				originalContent: '',
				validationIssues: [],
			},
		],
		[
			{
				name: 'core/image',
				isValid: true,
				attributes: {
					align: 'center',
					url:
						'https://automattic.files.wordpress.com/2021/09/automattic-logotype-color.png',
					alt: '',
					caption: '',
					width: 200,
					height: 67,
					style: {
						color: [],
					},
				},
				innerBlocks: [],
				originalContent:
					'<figure class="wp-block-image aligncenter is-resized"><img src="https://automattic.files.wordpress.com/2021/09/automattic-logotype-color.png" alt="" width="200" height="67"/></figure>',
				validationIssues: [],
			},
			{
				name: 'crowdsignal-forms/text-question',
				isValid: true,
				attributes: {
					restrictions: [],
					question:
						'What was the hardest technical problem you had to solve:',
					note: '',
					placeholder: '',
					mandatory: false,
					borderRadius: '',
					boxShadow: false,
					borderWidth: '',
					inputHeight: '80px',
					width: 100,
				},
				innerBlocks: [],
				originalContent: '',
				validationIssues: [],
			},
			{
				name: 'core/paragraph',
				isValid: true,
				attributes: {
					content:
						'Tell us about the hardest technical problem you had to solve. Any problem is okay \u2013 a compelling architectural decision, a hard-to-track bug, a performance or scaling issue, etc. Please outline the problem as you would describe it to a colleague.',
					dropCap: false,
				},
				innerBlocks: [],
				originalContent:
					'<p>Tell us about the hardest technical problem you had to solve. Any problem is okay \u2013 a compelling architectural decision, a hard-to-track bug, a performance or scaling issue, etc. Please outline the problem as you would describe it to a colleague.</p>',
				validationIssues: [],
			},
			{
				name: 'core/paragraph',
				isValid: true,
				attributes: {
					content:
						'Here are some pointers you might want to consider in your answer:<br>- What was especially challenging about the problem?<br>- What was the solution?<br>- What were the trade-offs of the proposed solution?<br>- What was your role in it?<br>- What did you learn from working on the problem?',
					dropCap: false,
				},
				innerBlocks: [],
				originalContent:
					'<p>Here are some pointers you might want to consider in your answer:<br>- What was especially challenging about the problem?<br>- What was the solution?<br>- What were the trade-offs of the proposed solution?<br>- What was your role in it?<br>- What did you learn from working on the problem?</p>',
				validationIssues: [],
			},
			{
				name: 'crowdsignal-forms/submit-button',
				isValid: true,
				attributes: {
					label: 'Next',
				},
				innerBlocks: [],
				originalContent: '',
				validationIssues: [],
			},
		],
		[
			{
				name: 'core/image',
				isValid: true,
				attributes: {
					align: 'center',
					url:
						'https://automattic.files.wordpress.com/2021/09/automattic-logotype-color.png',
					alt: '',
					caption: '',
					width: 200,
					height: 67,
					style: {
						color: [],
					},
				},
				innerBlocks: [],
				originalContent:
					'<figure class="wp-block-image aligncenter is-resized"><img src="https://automattic.files.wordpress.com/2021/09/automattic-logotype-color.png" alt="" width="200" height="67"/></figure>',
				validationIssues: [],
			},
			{
				name: 'crowdsignal-forms/text-question',
				isValid: true,
				attributes: {
					restrictions: [],
					question:
						'Share with us your production experience with two different technologies that are solving a similar problem:',
					note: '',
					placeholder: '',
					mandatory: false,
					borderRadius: '',
					boxShadow: false,
					borderWidth: '',
					inputHeight: '80px',
					width: 100,
				},
				innerBlocks: [],
				originalContent: '',
				validationIssues: [],
			},
			{
				name: 'core/paragraph',
				isValid: true,
				attributes: {
					content:
						'Tell us about your production experience with two different technologies that are solving a similar problem. It could be two different programming languages, two different frameworks, two different databases, services, etc.&nbsp;&nbsp;*',
					dropCap: false,
				},
				innerBlocks: [],
				originalContent:
					'<p>Tell us about your production experience with two different technologies that are solving a similar problem. It could be two different programming languages, two different frameworks, two different databases, services, etc.&nbsp;&nbsp;*</p>',
				validationIssues: [],
			},
			{
				name: 'core/paragraph',
				isValid: true,
				attributes: {
					content:
						'For each technology, please outline:<br>- What made it a good or bad fit for the project at hand?<br>- Which of its strengths or weaknesses showed in the projects you worked on?<br>- In what ways did it make you think differently or approach the work in different ways?',
					dropCap: false,
				},
				innerBlocks: [],
				originalContent:
					'<p>For each technology, please outline:<br>- What made it a good or bad fit for the project at hand?<br>- Which of its strengths or weaknesses showed in the projects you worked on?<br>- In what ways did it make you think differently or approach the work in different ways?</p>',
				validationIssues: [],
			},
			{
				name: 'core/paragraph',
				isValid: true,
				attributes: {
					content: '',
					dropCap: false,
				},
				innerBlocks: [],
				originalContent: '<p></p>',
				validationIssues: [],
			},
			{
				name: 'crowdsignal-forms/submit-button',
				isValid: true,
				attributes: {
					label: 'Next',
				},
				innerBlocks: [],
				originalContent: '',
				validationIssues: [],
			},
		],
		[
			{
				name: 'core/image',
				isValid: true,
				attributes: {
					align: 'center',
					url:
						'https://automattic.files.wordpress.com/2021/09/automattic-logotype-color.png',
					alt: '',
					caption: '',
					width: 200,
					height: 67,
					style: {
						color: [],
					},
				},
				innerBlocks: [],
				originalContent:
					'<figure class="wp-block-image aligncenter is-resized"><img src="https://automattic.files.wordpress.com/2021/09/automattic-logotype-color.png" alt="" width="200" height="67"/></figure>',
				validationIssues: [],
			},
			{
				name: 'crowdsignal-forms/text-question',
				isValid: true,
				attributes: {
					restrictions: [],
					question: 'Why Automattic and why now?',
					note: '',
					placeholder: '',
					mandatory: true,
					borderRadius: '',
					boxShadow: false,
					borderWidth: '',
					inputHeight: '80px',
					width: 100,
				},
				innerBlocks: [],
				originalContent: '',
				validationIssues: [],
			},
			{
				name: 'core/paragraph',
				isValid: true,
				attributes: {
					content: '',
					dropCap: false,
				},
				innerBlocks: [],
				originalContent: '<p></p>',
				validationIssues: [],
			},
			{
				name: 'crowdsignal-forms/submit-button',
				isValid: true,
				attributes: {
					label: 'Submit Application',
				},
				innerBlocks: [],
				originalContent: '',
				validationIssues: [],
			},
		],
		[
			{
				name: 'core/image',
				isValid: true,
				attributes: {
					align: 'center',
					url:
						'https://automattic.files.wordpress.com/2021/09/automattic-logotype-color.png',
					alt: '',
					caption: '',
					width: 200,
					height: 67,
					style: {
						color: [],
					},
				},
				innerBlocks: [],
				originalContent:
					'<figure class="wp-block-image aligncenter is-resized"><img src="https://automattic.files.wordpress.com/2021/09/automattic-logotype-color.png" alt="" width="200" height="67"/></figure>',
				validationIssues: [],
			},
			{
				name: 'core/spacer',
				isValid: true,
				attributes: {
					height: '180px',
				},
				innerBlocks: [],
				originalContent:
					'<div style="height:180px" aria-hidden="true" class="wp-block-spacer"></div>',
				validationIssues: [],
			},
			{
				name: 'core/heading',
				isValid: true,
				attributes: {
					textAlign: 'center',
					content: 'Thank you!',
					level: 2,
				},
				innerBlocks: [],
				originalContent:
					'<h2 class="has-text-align-center">Thank you!</h2>',
				validationIssues: [],
			},
			{
				name: 'core/spacer',
				isValid: true,
				attributes: {
					height: '250px',
				},
				innerBlocks: [],
				originalContent:
					'<div style="height:250px" aria-hidden="true" class="wp-block-spacer"></div>',
				validationIssues: [],
			},
		],
	]
);
