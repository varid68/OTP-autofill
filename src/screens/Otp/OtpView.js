import React, { useContext, Fragment } from 'react'
import { View, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import Text from 'components/Text'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { GHOST, GRAY, MERCURY, YELLOW } from 'constants/Colors'
import { COLUMN_BETWEEN_CENTER } from 'constants/Styles'
import styles from './OtpStyles'

import SMSAuth from './Components/SMSAuth'
import GoogleAuth from './Components/GoogleAuth'

import { OtpContext } from './OtpContext'


const OtpView = ({ navigation }) => {
  const value = useContext(OtpContext)

  return (
    <Fragment>
      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        <StatusBar backgroundColor={GRAY} />

        <TouchableOpacity
          style={{
            width: 30,
            height: 30
          }}>
          <Icon name='arrow-back' size={30} color={MERCURY} />
        </TouchableOpacity>

        <Text size='exMassive' color={GHOST} style={{ marginVertical: 20 }}>Verification</Text>

        <View style={styles.tab}>
          <TouchableOpacity
            style={COLUMN_BETWEEN_CENTER}
            onPress={value._setFlag.bind(null, 'sms')}>
            <Text size='small' weight={400} style={{ paddingVertical: 15 }} color={value.flag == 'google' ? MERCURY : GHOST}>
              SMS Auth
            </Text>
            {
              value.flag == 'sms' &&
              <View style={{
                height: 3,
                width: 40,
                backgroundColor: YELLOW
              }} />
            }
          </TouchableOpacity>
          <TouchableOpacity
            style={COLUMN_BETWEEN_CENTER}
            onPress={value._setFlag.bind(null, 'google')}>
            <Text size='small' weight={400} style={{ paddingVertical: 15 }} color={value.flag != 'google' ? MERCURY : GHOST}>
              Google Auth
            </Text>
            {
              value.flag != 'sms' &&
              <View style={{
                height: 3,
                width: 40,
                backgroundColor: YELLOW
              }} />
            }
          </TouchableOpacity>
        </View>

        {value.flag == 'sms' ? <SMSAuth /> : <GoogleAuth />}

        <View style={styles.btnSubmit}>
          <Text size='small'>Submit</Text>
        </View>
      </ScrollView>
    </Fragment>
  )
}

export default OtpView
