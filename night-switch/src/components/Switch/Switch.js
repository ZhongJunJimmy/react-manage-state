import React from 'react';
import '../../App.css';

const Switch = ({ switchOnOrOff }) => {
    return (
        <img id="light-switch" onClick={ switchOnOrOff } className='Lightswitch' alt="switch" />
    );
}

export default Switch;