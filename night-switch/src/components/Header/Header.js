import React from 'react';
import '../../App.css';
import Switch from '../Switch/Switch';

const Header = ({ switchOnOrOff, switchState }) => {
    return (
        <header className={ (switchState) ? "App-header-light" : "App-header-dark" }>
            <Switch switchOnOrOff={ switchOnOrOff } switchState={ switchState } />
        </header>
    );
}

export default Header;