import React, {useContext} from 'react';
import { SwitchStateContext } from '../../context/SwitchStateContext';
import switchOnImg from '../../images/switch-on.png'
import switchOffImg from '../../images/switch-off.png'
import '../../App.css';

function Switch(){
    const {switchState, toggleSwitchState} = useContext(SwitchStateContext);
    return(
        <img className='Lightswitch' onClick={toggleSwitchState} src={(switchState)?switchOnImg:switchOffImg}/>
    );
}

export default Switch;