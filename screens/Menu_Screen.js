import React, { Component } from 'react';
import {
  FlatList,
  Image,
  Text,
  View,
  ScrollView,
  Platform,
  StatusBar,
  StyleSheet
} from 'react-native';
import {
  RkText,
  RkCard,
  RkStyleSheet,
  RkTheme
} from 'react-native-ui-kitten';
import { Header } from 'react-navigation';

import {SocialBar} from './../components/';
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
      <ScrollView style={styles.root}>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <RkText rkType='h6'>Welcome to Fitness Planner</RkText>
          </View>
        </View>
      </ScrollView>
    )
  }
}


let styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    paddingVertical: 8,
    paddingHorizontal: 14
  },
  root: {
    backgroundColor: theme.colors.screen.base
  },
  header: {
    backgroundColor: theme.colors.screen.neutral,
    paddingTop: 25
  },
  section: {
    marginVertical: 25
  },
  heading: {
    paddingBottom: 12.5
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 17.5,
    borderColor: theme.colors.border.base,
    alignItems: 'center'
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
