import React, { useContext } from 'react'
import { View } from 'react-native'
import Text from 'components/Text'
import SafeAreaView from 'react-native-safe-area-context'

import { LoginContext } from './LoginContext'


const LoginView = ({ navigation }) => {
  const value = useContext(LoginContext)

  return (
    <Text>INI PAGE Login</Text>
  )
}

export default LoginView
