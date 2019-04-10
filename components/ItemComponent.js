import React, { Component } from 'react';
import {View, Text, StyleSheet,Alert} from 'react-native';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';
import {db} from '../config/auth';
import firebase from 'firebase';
import { RkStyleSheet, RkTheme, RkCard, RkButton, RkText, RkTextInput } from 'react-native-ui-kitten';
import { Button, Icon } from 'react-native-elements';

export default class ItemComponent extends Component {

  static propTypes = {
      items: PropTypes.array.isRequired,
      keys: PropTypes.array.isRequired
  };

  _deleteLog(index){
    const currentUser = firebase.auth();
    let userID = currentUser.currentUser.uid;
      
    var key = this.props.keys[index]
    console.log(currentUser.currentUser.uid)
    let logRef = firebase.database().ref(`users/${userID}/items/` + key);
    logRef.remove();
  }
    render() {
      return (
        <ScrollView style={styles.main}>
          {this.props.items.map((item, index) => {
            console.log(item);
            let name = item.name;
              return (
                <RkCard style={styles.card}>
                  <View style={styles.item} key={index}>
                    <View style={styles.header}>
                      <Text style={styles.itemheader}> {item.name}</Text>
                      <Text style={styles.itemDate}> {item.date}</Text>
                    </View>
                      
                      <View style={styles.set}>
                        <Text style={styles.itemtext}>Set 1</Text>
                        <Text style={styles.itemtext}>Reps {item.reps1}</Text>
                        <Text style={styles.itemtext}>{item.lbs1}lbs</Text>
                      </View>
                      
                      <View style={styles.set}>
                      <Text style={styles.itemtext}>Set 2</Text>
                        <Text style={styles.itemtext}>Reps {item.reps2}</Text>
                        <Text style={styles.itemtext}>{item.lbs2}lbs</Text>
                      </View>

                      <View style={styles.set}>
                      <Text style={styles.itemtext}>Set 3</Text>
                        <Text style={styles.itemtext}>Reps {item.reps3}</Text>
                        <Text style={styles.itemtext}>{item.lbs3}lbs</Text>
                      </View>

                      <View style={styles.bottom}>
                      <Text style={styles.bottomText}>{item.muscle}</Text>
                      <RkButton rkType='delete' onPress={() => Alert.alert(
                          'Delete ' + name,
                          //waikits work//
                          "Are you sure?",
                          [
                            {
                              text: 'Cancel',
                              onPress: () => console.log('Cancel Pressed'),
                              style: 'cancel',
                            },
                            {text: 'OK', onPress: () => this._deleteLog(index)},
                          ],
                          {cancelable: false},
                        )}>
                          <Icon
                            name='trash'
                            type='font-awesome'
                            color='red'
                          />
                      </RkButton>
                      </View>
                  </View>
                  </RkCard>
              )
          })}
          
        </ScrollView>
      );
    }
  }

  RkTheme.setType('RkButton', 'delete', {
    marginLeft: 'auto',
    backgroundColor: '#ffffff',
    width: 50,
  })
const styles = StyleSheet.create({  
  main:{
    backgroundColor: 'rgb(244, 244, 244)',
  },
  card:{
    margin:'2%',
    marginBottom: '1%',
    padding: "2%",
    paddingBottom: "4%",
    
  },
  bottom:{
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  bottomText:{
    position:'absolute',
    bottom:10,
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    // borderRadius: 4,
    // borderWidth: 10,
    borderColor: '#ffffff',
    justifyContent: "space-around",
    
  },
  itemheader: {
    flex:2,
    flexDirection:'row',
    justifyContent:"space-between",
    fontSize: 24,
    fontWeight: '400',
    paddingBottom: '3%',
    fontWeight: "bold"
  },
  header:{
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  set:{
    flexDirection: 'row',
    justifyContent:'space-between',
    width:"70%"
  },
  itemtext: {
    fontSize: 16,
    alignContent: "stretch",
  }
});