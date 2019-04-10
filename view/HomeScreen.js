import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text>Home Screen</Text>
        <Button 
              title="Add Log"
              onPress={() => this.props.navigation.navigate("TrackerLog", {
             })
            }
        />
        <Button 
              title="View Log"
              onPress={() => this.props.navigation.navigate("ViewLog", {
             })
            }
        />
      </View>
    )
  }
}

