import React, { Component } from 'react';
import {
  FlatList,
  Image,
  Text,
  View,
  TouchableOpacity,
  Platform,
  StatusBar
} from 'react-native';
import {
  RkText,
  RkCard,
  RkStyleSheet,
  RkTheme
} from 'react-native-ui-kitten';
import { Header } from 'react-navigation';

import {SocialBar} from './../components/';
import articles from './../data/raw/articles';
import { Button } from 'react-native-elements';
import {FontAwesome} from './../assets/icons';


class Menu_Screen extends Component {

  static navigationOptions = {
    headerTitle: 'Items',
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <RkText
        rkType='awesome'
        style={{
          color: tintColor,
          fontSize: 24,
          marginBottom: 0,
        }}>
          {FontAwesome.home}
      </RkText>
    ),
  };

  render() {

    return (
      <View>
        <Text>
          Welcome to Fitness Planner
        </Text>
      </View>
    )
  }
}


let styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    paddingVertical: 8,
    paddingHorizontal: 14
  },
  card: {
    marginVertical: 8,
    height: 125
  },
  post: {
    marginTop: 5,
    marginBottom: 1
  }
}));

export default Menu_Screen;
