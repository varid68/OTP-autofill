import React, { useState, useEffect, createContext } from 'react'
import { addRemoveListenerBack } from 'services/common'

export const OtpContext = createContext()

function OtpContextProvider(props) {
  const [flag, setFlag] = useState('sms')

  useEffect(() => {

  }, [])

  const _setFlag = (flag) => setFlag(flag)

  addRemoveListenerBack(props)

  return (
    <OtpContext.Provider
      value={{
        flag,
        _setFlag
      }}>
      {props.children}
    </OtpContext.Provider>
  )
}

export default OtpContextProvider
