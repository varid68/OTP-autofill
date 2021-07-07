
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from 'screens/SplashScreen'
import LoginScreen from 'screens/Login/LoginScreen'
import OTPScreen from 'screens/Otp/OtpScreen'
import HomeScreen from 'screens/Home/HomeScreen'


const Stack = createStackNavigator()

function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName='Splash'>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default App