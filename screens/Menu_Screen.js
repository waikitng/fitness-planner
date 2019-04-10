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
  RkButton,
  RkStyleSheet,
  RkTheme
} from 'react-native-ui-kitten';
import { Header } from 'react-navigation';

import {SocialBar} from './../components/';
import { Button, Icon } from 'react-native-elements';
import {FontAwesome} from './../assets/icons';


class Menu_Screen extends Component {

  static navigationOptions = {
    headerTitle: 'Home',
    tabBarLabel: 'Home',
    title:'Welcome to Fitness Planner',
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

          <RkButton rkType='log' onPress={() => this.props.navigation.navigate("add_log_screen", {
              })
              }>
              <View style={styles.button}>
              <Icon
                name='plus'
                type='font-awesome'
                size={30}
              />
              <RkText rkType='title'>Add Workout</RkText>
              </View>
          </RkButton>

          <RkButton rkType='log' onPress={() => this.props.navigation.navigate("view_log_screen", {
              })
              }>
              <View style={styles.button}>
              <Icon
                name='list'
                type='font-awesome'
                size={30}
              />
              <RkText rkType='title'>View Workout</RkText>
              </View>
          </RkButton>


        </View>
      </ScrollView>
    )
  }
}

RkTheme.setType('RkButton', 'log', {
  container: {
    flexDirection:'row',
    backgroundColor: 'white',
    borderWidth:3,
    borderRadius: 10,
    borderColor: "#ed1c4d",
    alignSelf: 'center',
    height:130,
    width:"100%",
    padding:20,
    marginBottom: '10%',
 }
})

RkTheme.setType('RkText', 'title', {
  fontSize:20,
  alignItems: 'space-between',
  marginTop:'10%'
})

RkTheme.setType('RkText', 'h6', {
  fontSize:20,
  textAlign: 'center',
})

let styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    paddingVertical: 8,
    paddingHorizontal: 14
  },
  
  button:{
    flexDirection: 'column',
    justifyContent:'space-between',
  },
  root: {
    backgroundColor: theme.colors.screen.base
  },
  header: {
    backgroundColor: theme.colors.screen.neutral,
    paddingTop: 25
  },
  section: {
    marginVertical: 25,
    margin: '10%'
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