function LogoutReducer(state = false, action) {
  switch (action.type) {
    case 'LOGOUT':
      return action.status;
    default:
      return state;
  }
}

export default LogoutReducer