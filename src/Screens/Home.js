import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity} from 'react-native'

class Home extends Component{
  render(){
    return(
      <>
      <View>
        <Text style={{fontSize: 30}}>This is Home</Text>
      </View>
      <View>
        <Button title='Go to Profile' onPress={() => this.props.navigation.navigate('Profile', {
          username: {
            user1: 'Arka',
            user2: 'Demy'
          },
          email: 'admin@arkademy.com'
        })}/>
      </View>
      <View style={{backgroundColor: 'grey'}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile', {
          username: {
            user1: 'Arka',
            user2: 'Demy'
          },
          email: 'admin@arkademy.com'
        })}>
        <View style={{borderRadius: 100, backgroundColor: 'red', width: 50, height: 50, alignSelf: 'center', margin: 30}} />
        </TouchableOpacity>
      </View>
      </>
    )
  }
}

export default Home