import React, { useContext } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import { MERCURY, GRAY_50, YELLOW } from 'constants/Colors'
import Text from 'components/Text'
import styles from '../OtpStyles'

import { OtpContext } from '../OtpContext'


export default function SMSAuth() {
  const value = useContext(OtpContext)

  return (
    <View style={{
      flexDirection: 'column',
      marginTop: 50
    }}>
      <Text color={MERCURY} size='xmini'>Code will be sent to {`${value.phone[0]}****${value.phone[1]}`} </Text>

      <View>
        <TouchableOpacity
          onPress={value._getOTP}
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            paddingHorizontal: 10,
            paddingVertical: 15,
            zIndex: 99
          }}>
          <Text color={YELLOW}>Send Code</Text>
        </TouchableOpacity>
        <TextInput
          value={value.otp}
          keyboardType='number-pad'
          maxLength={6}
          placeholder='Please enter code'
          placeholderTextColor={GRAY_50}
          onChangeText={v => value._setOtp(v)}
          style={[styles.field, { paddingLeft: 20, marginTop: 10 }]} />
      </View>
    </View>
  )
}
