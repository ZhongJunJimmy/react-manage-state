import React, {useContext} from 'react';
import { SwitchStateContext } from '../../context/SwitchStateContext';
import '../../App.css';
import Switch from '../Switch/Switch';

function Header(){
    const {switchState, toggleSwitchState} = useContext(SwitchStateContext);
    return(
        <header className={switchState?"App-header-light":"App-header-dark"}>
            <Switch />
        </header>
    );  
}

export default Header;