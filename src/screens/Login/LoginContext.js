import React, { useState, createContext, useEffect } from 'react'
import { addRemoveListenerBack } from 'services/common'

export const LoginContext = createContext()

function LoginContextProvider(props) {
  const [fields, setFields] = useState({
    phone: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(true)
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    fields.phone.length < 9 || fields.phone.length > 12 ? setIsValid(false) : setIsValid(true)
  }, [fields.phone])


  addRemoveListenerBack(props)

  const _togglePassword = () => setShowPassword(!showPassword)

  const _onChange = (field, value) => setFields({ ...fields, [field]: value })

  const _navigate = async () => props.navigation.navigate('OTP', { phone: fields.phone })

  const _clear = () => setFields({ phone: '', password: '' })

  return (
    <LoginContext.Provider
      value={{
        fields,
        showPassword,
        isValid,
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
