import React, { useState, createContext, useEffect } from 'react'
import { addRemoveListenerBack } from 'services/common'
import auth from '@react-native-firebase/auth'
import RNOtpVerify from 'react-native-otp-verify'

export const OtpContext = createContext()

function OtpContextProvider(props) {

  const { phone } = props.route.params
  const [otp, setOtp] = useState('')
  const [flag, setFlag] = useState('sms')
  const [confirm, setConfirm] = useState('')

  useEffect(() => {
    RNOtpVerify.getOtp()
      .then(() => RNOtpVerify.addListener(_otpHandler))
      .catch((p) => console.log(p))

    return () => {
      RNOtpVerify.removeListener()
    }
  }, [])

  const _otpHandler = (message) => {
    if (message && message !== '' && message !== 'Timeout Error.') {
      const OTP = /(\d{6})/g.exec(message)[0]
      setOtp(OTP)
      RNOtpVerify.removeListener()
    }
  };


  const _setFlag = (flag) => setFlag(flag)

  const _getOTP = async () => {
    console.log('hslo')
    const confirmation = await auth().signInWithPhoneNumber(`+62${Number(phone)}`)
    setConfirm(confirmation)
  }

  const _setOtp = (v) => setOtp(v)

  addRemoveListenerBack(props)

  return (
    <OtpContext.Provider
      value={{
        flag,
        phone: phone.match(/^..|..$/g),
        otp,
        _setFlag,
        _getOTP,
        _setOtp
      }}>
      {props.children}
    </OtpContext.Provider>
  )
}

export default OtpContextProvider
