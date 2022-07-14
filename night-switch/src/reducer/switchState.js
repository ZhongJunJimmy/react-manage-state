const initState = {
  switchState: 0,
};

const switchStateReducer = (state = initState, action) => {
  switch (action.type) {
    case 'toggleSwitchState':
        return Object.assign({}, state, {
        switchState: !(state.switchState)
      })
    default:
      return state;
  }
};

export default switchStateReducer;