import React from 'react';
import switchOnImg from '../../images/switch-on.png'
import switchOffImg from '../../images/switch-off.png'
import '../../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSwitchstate } from '../../action';
import store from '../../store';

const Switch = (props) => {
    const switchState = useSelector(state => state.switchState);
    //store.dispatch(toggleSwitchstate());
    //console.log(toggleSwitchstate());
    //const dispatch = useDispatch();
    return(
    //const dispatch = useDispatch();
        <img className='Lightswitch' onClick={()=>store.dispatch(toggleSwitchstate())} src={switchState?switchOnImg:switchOffImg}/>
    );
}

export default Switch;