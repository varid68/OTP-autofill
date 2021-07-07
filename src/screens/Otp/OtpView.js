import React, { useContext } from 'react'
import { View } from 'react-native'
import Text from 'components/Text'
import SafeAreaView from 'react-native-safe-area-context'

import { OtpContext } from './OtpContext'


const OtpView = ({ navigation }) => {
  const value = useContext(OtpContext)

  return (
    <Text>INI PAGE Otp</Text>
  )
}

export default OtpView
