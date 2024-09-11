function RegisterReducer(state = false, action) {
  switch (action.type) {
    case 'REGISTER':
      return action.status;
    default:
      return state;
  }
}

export default RegisterReducer