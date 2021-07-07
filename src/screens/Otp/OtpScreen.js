import React from 'react'
import OtpView from './OtpView'
import OtpContextProvider from './OtpContext'


const OtpScreen = ({ navigation, route }) => {
  return (
    <OtpContextProvider navigation={navigation} route={route}>
      <OtpView navigation={navigation} />
    </OtpContextProvider>
  )
}

export default OtpScreen
