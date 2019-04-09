import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import MapView, { Marker, Circle, Callout } from 'react-native-maps';
import Permissions from 'expo';
import {FontAwesome} from './../assets/icons';
import {
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkTheme,
  RkStyleSheet
} from 'react-native-ui-kitten';

export default class MapComponent extends Component {

    static navigationOptions = {
        headerTitle: 'Location',
        tabBarIcon: ({ tintColor }) => (
          <RkText
            rkType='awesome'
            style={{
              color: tintColor,
              fontSize: 24,
              marginBottom: 0,
            }}>
              {FontAwesome.map}
          </RkText>
        ),
    };

    constructor() {
        super();
        this.state = {
            region: {
                latitude: 0,
                latitudeDelta: 0,
                longitude: 0,
                longitudeDelta: 0
            },
            locationPermission: "unknown",
            gym1:'',
            gym1_street: '',
            gym_region_1: {
                latitude:0,
                latitudeDelta: 0,
                longitude: 0,
                longitudeDelta: 0
            },
            gym2:'',
            gym2_street: '',
            gym_region_2: {
                latitude:0,
                latitudeDelta: 0,
                longitude: 0,
                longitudeDelta: 0        
            },
            gym3:'',
            gym3_street: '',
            gym_region_3: {
                latitude:0,
                latitudeDelta: 0,
                longitude: 0,
                longitudeDelta: 0        
            }
        };
    }

    async getLocationAsync() {
        const { Location, Permissions } = Expo;
        // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
        const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
            return Location.getCurrentPositionAsync({enableHighAccuracy: true});
        } else {
            throw new Error('Location permission not granted');
        }
    }
 
    _getGyms() {
        console.log(this.state.region);
        console.log(this.state.region.latitude);
        console.log(this.state.region.longitude);
        fetch(
            `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.region.latitude},${this.state.region.longitude}&radius=2000&types=gym&key=AIzaSyCF7tzF8XX8gDJhGYzU2rQWV32sFdOLlR0`
        )
        .then (res => res.json()) 
        .then(json => {
            this.setState({
                gym1: json.results[0].name,
                gym1_street: json.results[0].vicinity,
                gym_region_1: {
                    latitude:json.results[0].geometry.location.lat,
                    latitudeDelta: 0.025,
                    longitude: json.results[0].geometry.location.lng,
                    longitudeDelta: 0.025
                },
                gym2: json.results[1].name,
                gym2_street: json.results[1].vicinity,
                gym_region_2: {
                    latitude:json.results[1].geometry.location.lat,
                    latitudeDelta: 0.025,
                    longitude: json.results[1].geometry.location.lng,
                    longitudeDelta: 0.025
                },
                gym3: json.results[2].name,
                gym3_street: json.results[2].vicinity,
                gym_region_3: {
                    latitude:json.results[2].geometry.location.lat,
                    latitudeDelta: 0.025,
                    longitude: json.results[2].geometry.location.lng,
                    longitudeDelta: 0.025
                },
            }) 

            console.log(json.results[2]);
        })
    }

    componentDidMount() {
        console.log('Start');
        this.getLocationAsync();
        console.log('Check position');
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
              region: {
                latitude: position.coords.latitude,
                latitudeDelta: 0.025,
                longitude: position.coords.longitude,
                longitudeDelta: 0.025
              }
            });
            this._getGyms();
        },
            (error) => alert(JSON.stringify(error)));
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView 
                region={this.state.region}
                style={styles.map}>
                
                <Marker coordinate={this.state.gym_region_1}> 
                <Callout
                    onPress={() => console.log('itwork')}
                    style={styles.callout}
                >
                    <Callout>
                        <Text>{this.state.gym1}</Text>
                        <Text>{this.state.gym1_street}</Text>
                    </Callout>
           
                </Callout>      
                </Marker>                                
                
                <Marker coordinate={this.state.gym_region_2}> 
                <Callout
                    onPress={() => console.log('itwork')}
                    style={styles.callout}
                >
                    <Callout>
                        <Text>{this.state.gym2}</Text>
                        <Text>{this.state.gym2_street}</Text>
                    </Callout>
           
                </Callout>      
                </Marker>

                <Marker coordinate={this.state.gym_region_3}> 
                <Callout
                    onPress={() => console.log('itwork')}
                    style={styles.callout}
                >
                    <Callout>
                        <Text>{this.state.gym3}</Text>
                        <Text>{this.state.gym3_street}</Text>
                    </Callout>
           
                </Callout>      
                </Marker>
      
                </MapView>

            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    marker: {
        backgroundColor: "#550bbc",
        padding: 5,
        borderRadius: 5,
    },
    callout:{
        flex: 3,
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 130,
        paddingVertical: 30,
        borderRadius: 200,
    }
})