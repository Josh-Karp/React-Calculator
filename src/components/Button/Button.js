import React from 'react';

const button = (props) => {
    const classes = ['btn']

    // check for a large buttons type
    if (typeof props !== 'undefined' && typeof props.type !== 'undefined')
        classes.push('btn--' + props.type);

    return (
        <button className={classes.join(' ')}>
            {props.children}
        </button>
    );
}

export default button;