import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput, TouchableHighlight, Alert, TouchableOpacity, Picker, Button, StyleSheet } from 'react-native';
import { addLog } from '../actions/ItemsAction';
import ReactNativePickerModule from 'react-native-picker-module'

export default class AddLog extends Component {

    static navigationOptions={
        title:'Log',
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
      Alert.alert('Log saved successfully');
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
            <Text>Today: {this.state.date}</Text>
              <TextInput
                style={styles.headerText}
                returnKeyType="done"
                placeholder="Routine Name"
                onChange={this.handleChange}/>
            </View>

            <View>
              <TouchableOpacity onPress={() => {this.pickerRef.show()}}>
                <Text>Select Muscle</Text>
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
              <Text>{this.state.muscle}</Text>
            </View>

            {/* <View>
              <Text>Muscle</Text>
              <Text>{this.state.muscle}</Text>
              <Picker
                selectedValue={this.state.muscle}
                onValueChange={(itemValue, itemIndex) => this.setState({muscle: itemValue})}  
                >
                <Picker.Item label="Legs" value="legs" />
                <Picker.Item label="Abs" value="abs" />
                <Picker.Item label="Back" value="back" />
                <Picker.Item label="Shoulders" value="shoulders" />
                <Picker.Item label="Arms" value="arms" />
              </Picker>
            </View> */}

            <View style={styles.setHeader}>
              <Text>Sets</Text>
              <Text>Reps</Text>
              <Text>lbs</Text>
            </View>

            <View style={styles.set}>
              <Text>1</Text>
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
              <Text>2</Text>
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
              <Text>3</Text>
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


            <View style={styles.button_container}>
            <Button
              onPress={this.handleSubmit}
              title="Save log"
              accessibilityLabel="Learn more about this purple button"
            />
              
            </View>
          </View>
        )
    }
}
const styles = StyleSheet.create({
    mainContainer: {
      flex:1,
      backgroundColor: '#fff',
      alignItems: "stretch",
      padding:'7%'
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
    },
    setHeader:{
      flexDirection: 'row',
      justifyContent:'space-between'
    },
    set:{
      flexDirection: 'row',
      justifyContent:'space-between'
    }
  });