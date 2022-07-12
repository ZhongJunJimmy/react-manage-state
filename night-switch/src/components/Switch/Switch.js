import React from 'react';
import switchOnImg from '../../images/switch-on.png'
import switchOffImg from '../../images/switch-off.png'
import '../../App.css';

const Switch = (props) => {
    return(
        <img className='Lightswitch' onClick={props.clickFunc} src={(props.switchState)?switchOnImg:switchOffImg}/>
    );
}

export default Switch;