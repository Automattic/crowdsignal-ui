/**
 * External dependencies
 */
import { includes, isEmpty, keys } from 'lodash';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { multipleChoiceAnswerBlock } from '@crowdsignal/block-editor';

/**
 * An 'is-empty' class name will be applied to the wrappers of blocks
 * in this list based on the value of given attribute.
 *
 * @type {Object}
 */
const BLOCKS = {
	[ multipleChoiceAnswerBlock.name ]: 'label',
};

export const withEmptyClassName = ( BlockListBlock ) => {
	return ( props ) => {
		if ( ! includes( keys( BLOCKS ), props.name ) ) {
			return <BlockListBlock { ...props } />;
		}

		const attribute = BLOCKS[ props.name ];

		const wrapperProps = {
			...props.wrapperProps,
			className: classnames( props?.wrapperProps?.className, {
				'is-empty': isEmpty( props?.attributes[ attribute ] ),
			} ),
		};

		return <BlockListBlock { ...props } wrapperProps={ wrapperProps } />;
	};
};
