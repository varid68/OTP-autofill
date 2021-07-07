import React from 'react'
import HomeView from './HomeView'
import HomeContextProvider from './HomeContext'


const HomeScreen = ({ navigation, route }) => {
  return (
    <HomeContextProvider navigation={navigation} route={route}>
      <HomeView navigation={navigation} />
    </HomeContextProvider>
  )
}

export default HomeScreen
