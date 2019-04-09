import React, { Component } from 'react';
import ItemComponent from '../components/ItemComponent';
import {View, Text, ListView, StyleSheet} from 'react-native';
import {db} from '../config/auth/firebase_info_real';
import firebase from 'firebase';



export default class ListItem extends Component {

    static navigationOptions={
        title:'History?',
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
          
            let data = snapshot.val();
            let keys = Object.keys(data);
            let items = Object.values(data);
            
            this.setState({items})
            this.setState({keys})
            console.log(this.state.items)
            
        });
    } 

  render() {
    return (
        <View style={styles.container}>
        {this.state.items.length > 0 ? (
          <ItemComponent items={this.state.items} keys={this.state.keys}/>
        ) : (
          <Text>No items</Text>
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
  });