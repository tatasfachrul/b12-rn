import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from './Screens/Home'
import Profile from './Screens/Profile'

const MainNavigator = createStackNavigator({
  Home,
  Profile
}, {
  headerMode: 'none',
  initialRouteName: 'Home'
})

export default createAppContainer(MainNavigator)
