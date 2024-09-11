function LoginReducer(state = false, action) {
  switch (action.type) {
    case 'LOGIN':
      return 'LOGIN';
    case 'LOGOUT':
      return 'LOGOUT'
    case 'REGISTER':
      return 'REGISTER'
    default:
      return state;
  }
}

export default LoginReducer