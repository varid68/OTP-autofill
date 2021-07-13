import React, { useContext, Fragment } from 'react'
import { View, StatusBar, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import Text from 'components/Text'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { GHOST, GRAY, GRAY_50, GRAY_75, MERCURY, RED, YELLOW } from 'constants/Colors'
import { LIST_ITEM_BASE } from 'constants/Styles'
import styles from './LoginStyles'

import { LoginContext } from './LoginContext'


const LoginView = ({ navigation }) => {
  const value = useContext(LoginContext)

  return (
    <Fragment>

      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        <StatusBar backgroundColor={GRAY} />

        <View style={{
          ...LIST_ITEM_BASE,
          marginBottom: 20
        }}>
          <Icon name='arrow-back' size={30} color={MERCURY} />
          <Text color={YELLOW}>Register</Text>
        </View>

        <Text color={GHOST} size='huge' weight={500}>Log In</Text>

        <View style={{
          flexDirection: 'column',
          marginTop: 20
        }}>
          <View style={LIST_ITEM_BASE}>
            <Text color={MERCURY} size='xmini'>Mobile</Text>
            <Text color={YELLOW} size='xmini'>Log in with email</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: 7
          }}>
            <TouchableOpacity
              onPress={value._clear}
              style={styles.clearText}>
              <Icon name='close' color={GRAY_75} size={20} />
            </TouchableOpacity>
            <View style={styles.countryCode}>
              <Image style={styles.countryFlag} source={require('images/Flag-Indonesia.jpeg')} />
              <Text color={GRAY_75} style={{ paddingHorizontal: 7 }}>+62</Text>
              <Ionicons name='caret-down' color={GHOST} size={18} />
            </View>
            <TextInput
              maxLength={13}
              onChangeText={e => value._onChange('phone', e)}
              keyboardType='number-pad'
              value={value.fields.phone}
              placeholder='Mobile Number'
              placeholderTextColor={GRAY_50}
              style={[styles.field]} />
          </View>
          {
            value.fields.phone.length < 9 || value.fields.phone.length > 12 ?
              <Text color={RED} weight={400} size='xmini'>Please enter the correct mobile number.</Text>
              : null
          }
        </View>


        <View style={{
          flexDirection: 'column',
          marginTop: 20
        }}>
          <Text color={MERCURY} size='xmini'>Password</Text>
          <View style={{
            flexDirection: 'row',
            marginTop: 10
          }}>
            <TouchableOpacity
              onPress={value._togglePassword}
              style={styles.clearText}>
              <Ionicons name={value.showPassword ? 'eye-off-outline' : 'eye-outline'} color={GRAY_75} size={20} />
            </TouchableOpacity>
            <TextInput
              secureTextEntry={value.showPassword}
              placeholder='Please enter password'
              placeholderTextColor={GRAY_50}
              style={[styles.field, { paddingLeft: 20, marginBottom: 7 }]} />
          </View>
          <Text color={MERCURY} weight={400} size='xmini'>Password must be at least 8 characters with uppercase letters.</Text>
        </View>


        <Text size='xmini' color={YELLOW} style={{ marginTop: 40 }}>Forgot password?</Text>

      </ScrollView>

      <TouchableOpacity style={styles.btnSubmit} onPress={value._navigate}>
        <Ionicons name='arrow-forward' size={30} />
      </TouchableOpacity>
    </Fragment>
  )
}

export default LoginView
