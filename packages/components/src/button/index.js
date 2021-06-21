/**
 * External dependencies
 */
import { forwardRef } from '@wordpress/element';
import { omit } from 'lodash';

/**
 * Style dependencies
 */
import { Button } from './styles.js';

const ButtonComponent = ( {
    accent,
    borderless,
    children,
    className,
    compact,
    disabled,
    facebook,
    highlight,
    large,
    scary,
    twitter,
    ...props
}, ref ) => {
    if ( props.href && ! disabled ) {
        const rel = props.target
            ? ( props.rel || '' ).replace( /noopener|noreferrer/g, '' ) + ' noopener noreferrer'
            : props.rel;

        return (
            <Button as={ 'a' } ref={ ref } { ...props } rel={ rel } className={ className }>
                { children }
            </Button>
        );
    }

    const buttonProps = omit( props, [ 'href', 'rel', 'target' ] );

    return (
        <Button ref={ ref } type="button" { ...buttonProps } className={ className } disabled={ disabled }>
            { children }
        </Button>
    );
};

export default forwardRef( ButtonComponent );
