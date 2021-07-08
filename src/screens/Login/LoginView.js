import React, { useContext } from 'react'
import { View, StatusBar, TextInput, Image, TouchableOpacity } from 'react-native'
import Text from 'components/Text'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { GHOST, GRAY, GRAY_25, GRAY_50, GRAY_75, MERCURY, YELLOW } from 'constants/Colors'
import { LIST_ITEM_BASE } from 'constants/Styles'
import styles from './LoginStyles'

import { LoginContext } from './LoginContext'


const LoginView = ({ navigation }) => {
  const value = useContext(LoginContext)

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={GRAY} />

      <View style={{
        ...LIST_ITEM_BASE,
        marginBottom: 20
      }}>
        <Icon name='clear' size={30} color={MERCURY} />
        <Text color={YELLOW}>Register</Text>
      </View>

      <Text color={GHOST} size='huge' weight={500}>Log In</Text>

      <View style={{
        flexDirection: 'column',
        marginTop: 20
      }}>
        <View style={LIST_ITEM_BASE}>
          <Text color={MERCURY} size='tiny'>Mobile</Text>
          <Text color={YELLOW} size='tiny'>Log in with email</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          marginTop: 10
        }}>
          <TouchableOpacity
            onPress={null}
            style={[styles.clearText, { top: 7 }]}>
            <Icon name='close' color={GRAY_75} size={20} />
          </TouchableOpacity>
          <View style={styles.countryCode}>
            <Image style={styles.countryFlag} source={require('images/Flag-Indonesia.jpeg')} />
            <Text color={GRAY_75} style={{ paddingHorizontal: 7 }}>+62</Text>
            <Ionicons name='caret-down' color={GHOST} size={18} />
          </View>
          <TextInput
            keyboardType='number-pad'
            placeholder='Mobile Number'
            placeholderTextColor={GRAY_50}
            style={styles.field} />
        </View>
      </View>


      <View style={{
        flexDirection: 'column',
        marginTop: 20
      }}>
        <Text color={MERCURY} size='tiny'>Password</Text>
        <View style={{
          flexDirection: 'row',
          marginTop: 10
        }}>
          <TouchableOpacity
            onPress={null}
            style={[styles.clearText, { top: 15 }]}>
            <Ionicons name='eye-off-outline' color={GRAY_75} size={20} />
          </TouchableOpacity>
          <TextInput
            placeholder='Please enter password'
            placeholderTextColor={GRAY_50}
            style={[styles.field, { paddingLeft: 20, marginVertical: 10 }]} />
        </View>
        <Text color={MERCURY} size='tiny'>Password must be at least 8 characters with uppercase letters.</Text>
      </View>


      <Text size='tiny' color={YELLOW} style={{ marginTop: 40 }}>Forgot password?</Text>

      <TouchableOpacity style={styles.btnSubmit}>
        <Ionicons name='arrow-forward' size={30} />
      </TouchableOpacity>
    </View>
  )
}

export default LoginView
