import React from 'react'
import { View, TextInput } from 'react-native'
import { MERCURY, GRAY_50 } from 'constants/Colors'
import Text from 'components/Text'
import styles from '../OtpStyles'


export default function SMSAuth() {
  return (
    <View style={{
      flexDirection: 'column',
      marginTop: 50
    }}>
      <Text color={MERCURY} size='xmini'>Code will be sent to 82***79</Text>
      <TextInput
        placeholder='Please enter code'
        placeholderTextColor={GRAY_50}
        style={[styles.field, { paddingLeft: 20, marginTop: 10 }]} />
    </View>
  )
}
