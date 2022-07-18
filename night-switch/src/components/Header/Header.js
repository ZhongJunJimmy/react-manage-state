import React from 'react';
import '../../App.css';
import Switch from '../Switch/Switch';

const Header = ({ switchOnOrOff, switchState }) => {
    return (
        <header id="header">
            <Switch switchOnOrOff={ switchOnOrOff } />
        </header>
    );
}

export default Header;