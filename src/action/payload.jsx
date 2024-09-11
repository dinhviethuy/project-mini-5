export const LoginAction = (status) => {
  return {
    type: 'LOGIN', status: status
  }
}

export const LogoutAction = (status) => {
  return {
    type: 'LOGOUT', status: status
  }
}

export const RegisterAction = (status) => {
  return {
    type: 'REGISTER', status: status
  }
}
