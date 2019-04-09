import React, { Component } from 'react';
import {View, Text, StyleSheet,Alert, Button} from 'react-native';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';
import {db} from '../config/auth';
import firebase from 'firebase';

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
        <ScrollView>
          {this.props.items.map((item, index) => {
            console.log(item);
            let name = item.name;
              return (
                  <View style={styles.item} key={index}>
                      <Text style={styles.itemheader}> {item.name} {item.date}</Text>
                      <Text>{item.muscle}</Text>
                      <Text style={styles.itemtext}>Set 1 Reps {item.reps1} {item.lbs1}lbs</Text>
                      <Text style={styles.itemtext}>Set 2 Reps {item.reps2} {item.lbs2}lbs</Text>
                      <Text style={styles.itemtext}>Set 3 Reps {item.reps3} {item.lbs3}lbs</Text>
                      
                      <Button
                        onPress={() => Alert.alert(
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
                        )}
                        title="Delete"
                      />
                  </View>
              )
          })}
          
        </ScrollView>
      );
    }
  }

const styles = StyleSheet.create({  
  item: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(68,68,68,0.2)',
    borderRadius: 4,
    borderWidth: 10,
    borderColor: '#ffffff',
    justifyContent: 'space-evenly',
  },
  itemheader: {
    flex:2,
    flexDirection:'row',
    justifyContent:"space-between",
    fontSize: 24,
    fontWeight: '400',
    
  },
  itemtext: {
    fontSize: 16,
    justifyContent:"space-evenly"
  }
});