import React from 'react';
import '../../App.css';
import Switch from '../Switch/Switch';
import { useSelector } from 'react-redux';


const Header = (props) => {
    const switchState = useSelector(state => state.switchState);
    return(
        <header className={switchState?"App-header-light":"App-header-dark"}>
            <Switch/>
        </header>
    );
}

export default Header;