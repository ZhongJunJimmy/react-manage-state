import React, {createContext, useState} from 'react';

const SwitchStateContext = createContext();

function SwitchStateProvider(props){
    const [switchState, setSwitchState] = useState(false);

    const toggleSwitchState= () => {
        setSwitchState(!switchState);
    };
    return (
        <div>  
            <SwitchStateContext.Provider value={{switchState, toggleSwitchState}}>
                {props.children}
            </SwitchStateContext.Provider>
        </div>
    )
};

export {SwitchStateContext, SwitchStateProvider};   