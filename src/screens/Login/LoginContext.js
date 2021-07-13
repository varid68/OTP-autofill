import React, { useState, useEffect, createContext } from 'react'
import { addRemoveListenerBack } from 'services/common'
import auth from '@react-native-firebase/auth'

export const LoginContext = createContext()

function LoginContextProvider(props) {
  const [fields, setFields] = useState({
    phone: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(true)


  addRemoveListenerBack(props)

  const _togglePassword = () => setShowPassword(!showPassword)

  const _onChange = (field, value) => setFields({ ...fields, [field]: value })

  const _navigate = async () => {
    const confirmation = await auth().signInWithPhoneNumber(`+62${Number(fields.phone)}`)
    console.log(confirmation)
  }

  const _clear = () => setFields({ phone: '', password: '' })

  return (
    <LoginContext.Provider
      value={{
        fields,
        showPassword,
        _togglePassword,
        _onChange,
        _navigate,
        _clear
      }}>
      {props.children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider
