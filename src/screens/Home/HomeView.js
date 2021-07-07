import React, { useContext } from 'react'
import { View } from 'react-native'
import Text from 'components/Text'
import SafeAreaView from 'react-native-safe-area-context'

import { HomeContext } from './HomeContext'


const HomeView = ({ navigation }) => {
  const value = useContext(HomeContext)

  return (
    <Text>INI PAGE Home</Text>
  )
}

export default HomeView
