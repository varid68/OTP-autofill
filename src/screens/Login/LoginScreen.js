import React from 'react'
import LoginView from './LoginView'
import LoginContextProvider from './LoginContext'


const LoginScreen = ({ navigation, route }) => {
  return (
    <LoginContextProvider navigation={navigation} route={route}>
      <LoginView navigation={navigation} />
    </LoginContextProvider>
  )
}

export default LoginScreen
