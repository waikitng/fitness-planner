import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput, TouchableHighlight, Alert, TouchableOpacity, Picker, Button, StyleSheet } from 'react-native';
import { addLog } from '../actions/ItemsAction';
import ReactNativePickerModule from 'react-native-picker-module';
import { RkStyleSheet, RkTheme, RkCard, RkButton, RkText, RkTextInput } from 'react-native-ui-kitten';
import { Icon } from 'react-native-elements';

export default class AddLog extends Component {

    static navigationOptions={
        title:'Add Workout',
        headerStyle:{
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
            fontWeight: 'bold',
        },
    }

    constructor(props){
      super(props);
      this.state= {
          date: '',
          name: '',
          selectedValue:null,
          reps1: 0,
          reps2:0,
          reps3:0,
          lbs1:0,
          lbs2:0,
          lbs3:0,
          data: [
            "Legs",
            "Abs",
            "Back",
            "Shoulders",
            "Arm"
          ],
          muscle: '',
          error: false
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
      this.setState({
          name: e.nativeEvent.text,
      });
  }
  handleSubmit(){
      addLog(this.state.date, this.state.name, this.state.muscle, this.state.reps1, this.state.reps2, this.state.reps3, this.state.lbs1,this.state.lbs2,this.state.lbs3);
      Alert.alert('Log Saved Successfully');
  }

  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    
    that.setState({
      //Setting the value of the date time
      date:
        date + '/' + month + '/' + year ,
    });
  }

    render() {
        return (
            <View style={styles.mainContainer}>
            
            <View style={styles.header}>
            <RkText>Today: {this.state.date}</RkText>
              <TextInput
                style={styles.headerText}
                returnKeyType="done"
                placeholder="Routine Name"
                onChange={this.handleChange}/>
            </View>

            <View>
              <TouchableOpacity onPress={() => {this.pickerRef.show()}}>
                <RkText>Select Muscle 
                  <RkText> </RkText>
                  <Icon
                    name='sort-down'
                    type='font-awesome'
                  />
                  <RkText>        {this.state.muscle}</RkText>
              </RkText>
                
              </TouchableOpacity>
              
              <ReactNativePickerModule
                pickerRef={e => this.pickerRef = e}
                value={this.state.selectedValue}
                title={"Select a muscle"}
                items={this.state.data}
                onValueChange={(index) => {
                  this.setState({
                    muscle: this.state.data[index]
                  })
              }}/>
              
              
            </View>

            <View style={styles.mainSet}>
            <View style={styles.setHeader}>
              <RkText>Sets</RkText>
              <RkText>Reps</RkText>
              <RkText>lbs</RkText>
            </View>

            <View style={styles.set}>
              <RkText> 1</RkText>
              <TextInput
                style={styles.text_input}
                returnKeyType="done"
                keyboardType="numeric"
                placeholder="20"
                onChangeText={(text) => this.setState({reps1: text})}
              />
              <TextInput
                style={styles.text_input}
                returnKeyType="done"
                keyboardType="numeric"
                placeholder="100"
                onChangeText={(text) => this.setState({lbs1: text})}
              />
            </View>

            <View style={styles.set}>
              <RkText> 2</RkText>
              <TextInput
                style={styles.text_input}
                returnKeyType="done"
                keyboardType="numeric"
                placeholder="20"
                onChangeText={(text) => this.setState({reps2: text})}
              />
              <TextInput
                style={styles.text_input}
                returnKeyType="done"
                keyboardType="numeric"
                placeholder="100"
                onChangeText={(text) => this.setState({lbs2: text})}
              />
            </View>

            <View style={styles.set}>
              <RkText> 3</RkText>
              <TextInput
                style={styles.text_input}
                returnKeyType="done"
                keyboardType="numeric"
                placeholder="20"
                onChangeText={(text) => this.setState({reps3: text})}
              />
              <TextInput
                style={styles.text_input}
                returnKeyType="done"
                keyboardType="numeric"
                placeholder="100"
                onChangeText={(text) => this.setState({lbs3: text})}
              />
            </View>
            </View>

            <View style={styles.button_container}>
            <RkButton rkType='add'
              onPress={this.handleSubmit}
            ><RkText rkType='save'>Save Workout</RkText>
            </RkButton>
              
            </View>
          </View>
        )
    }
}

RkTheme.setType('RkTypeInput', 'name', {
  container: {
    backgroundColor: 'white',
    borderWidth:3,
    borderRadius: 10,
    borderColor: "#ed1c4d",
    alignSelf: 'center',
    height:100,
    width:"80%",
    padding:20,
    paddingVertical: 8,
 }
})

RkTheme.setType('RkButton', 'add', {
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    alignItems:'center',
    borderRadius: 20,
    borderWidth:3,
    width:'70%',
    height:'25%'
  
})

RkTheme.setType('RkText', 'save', {
  fontSize:20,
  alignSelf: 'center',
})

const styles = StyleSheet.create({
    mainContainer: {
      flex:1,
      backgroundColor: '#fff',
      alignItems: "stretch",
      padding:'7%',
      
    },
    header:{
      borderBottomColor:'#fff',
      borderBottomWidth:3,
      color:'red',
    },
    headerText: {
      fontSize:30,
      borderBottomColor:'rgba(68,68,68,0.4)',
      borderBottomWidth:2,
      marginTop:'5%',
      marginBottom:'5%',
    },
    setHeader:{
      flexDirection: 'row',
      justifyContent:'space-between'
    },
    set:{
      flexDirection: 'row',
      justifyContent:'space-between'
    },
    mainSet:{
      backgroundColor:'rgba(68,68,68,0.2)',
      padding:'4%',
      borderRadius:10,
      marginTop:'5%',
      // marginBottom:'40%'
    },
    text_input:{
      width:'10%',
      textAlign: 'center',
    },
    button_container:{
      marginTop:'40%',
      width:"100%",
      height:"60%"
    }

  });