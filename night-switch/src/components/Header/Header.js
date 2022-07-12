import React from 'react';
import '../../App.css';
import Switch from '../Switch/Switch';

const Header = (props) => {
    return(
        <header className={(props.switchState)?"App-header-light":"App-header-dark"}>
            <Switch clickFunc = {props.clickFunc} switchState = {props.switchState}/>
        </header>
    );
}

export default Header;