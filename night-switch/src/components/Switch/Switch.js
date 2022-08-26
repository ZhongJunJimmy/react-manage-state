import React from 'react';
import switchOnImg from '../../images/switch-on.png'
import switchOffImg from '../../images/switch-off.png'
import '../../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react'
import { toggleSwitchstate } from '../../action';

const Switch = (props) => {
    const switchState = useSelector(state => state.switchState);
    const dispatch = useDispatch();
    const increaseCounter = useCallback(() => dispatch(toggleSwitchstate()), [])
    //store.dispatch(toggleSwitchstate());
    //console.log(toggleSwitchstate());
    //const dispatch = useDispatch();
    return (
        //const dispatch = useDispatch();
        <img className='Lightswitch' onClick={ increaseCounter } src={ switchState ? switchOnImg : switchOffImg } />
    );
}

export default Switch;