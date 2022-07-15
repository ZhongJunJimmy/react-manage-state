import React from 'react';
import switchOnImg from '../../images/switch-on.png'
import switchOffImg from '../../images/switch-off.png'
import '../../App.css';

const Switch = ({ switchOnOrOff, switchState }) => {
    return (
        <img className='Lightswitch' onClick={ switchOnOrOff } src={ switchState ? switchOnImg : switchOffImg } />
    );
}

export default Switch;