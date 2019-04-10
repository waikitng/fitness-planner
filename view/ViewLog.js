import React, { Component } from 'react';
import ItemComponent from '../components/ItemComponent';
import {View, Text, ListView, StyleSheet} from 'react-native';
import {db} from '../config/auth/firebase_info_real';
import firebase from 'firebase';



export default class ListItem extends Component {

    static navigationOptions={
        title:'Workouts',
        headerStyle:{
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
            fontWeight: 'bold',
        },
    }

    state = {
        items:[],
        keys:[]
    }

    componentDidMount(){ 

      const currentUser = firebase.auth();
      let userID = currentUser.currentUser.uid;

      let itemsRef = firebase.database().ref(`users/${userID}/items`);

      // console.log(itemsRef);

        itemsRef.on('value', (snapshot) => { 
          
          if (snapshot.val() == null) {
            let data = 0
            let items = Object.values(data);
            this.setState({items: 0})
            this.setState({keys: 0})
            return(
              console.log("no items")
            )
          } else {
            let data = snapshot.val();
            let keys = Object.keys(data);
            let items = Object.values(data);
            this.setState({items})
            this.setState({keys})
          }
          
            
            console.log(this.state.items)
            
        });
    } 

  render() {
    if (this.state.items.length == 0) {
      return (
        <Text style={styles.loading}>Loading Workout Log...</Text>
      );
    }
    return (
        <View style={styles.container}>
        {this.state.items.length > 0 ? (
          <ItemComponent items={this.state.items} keys={this.state.keys}/>
        ) : (
          <Text style={styles.loading}>No Workouts</Text>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    loading:{
      textAlign: 'center', 
      marginTop: '80%',
      fontSize: 15,
      color:'rgba(68,68,68,0.4)'
    }
  });