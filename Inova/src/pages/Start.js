/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Image, TouchableOpacity, Text, Alert} from 'react-native';
import Signup from './SignUp';

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#56C3F1',
          height: 1000,
          paddingHorizontal: 50,
          paddingVertical: 120,
        }}
      >
        <Image
          style={{
            width: 300,
            height: 300,
            resizeMode: 'contain',
          }}
          source={require('../images/inova.png')}
        />
        <View
          style={[
            {
              paddingTop: 40,
              width: 200,
              marginLeft: 60,
            },
          ]}
        >
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#3652B6',
              borderRadius: 20,
              borderColor: '#DADADA',
              height: 35,
            }}
            onPress={() => Alert.alert('Left button pressed')}
          >
            <Text
              style={{
                fontSize: 20,
                color: '#ffff',
                marginTop: 2,
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            {
              marginTop: 5,
              paddingTop: 15,
              width: 200,
              marginLeft: 60,
            },
          ]}
        >
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#3652B6',
              borderRadius: 20,
              borderColor: '#DADADA',
              height: 35,
            }}
            onPress={Signup}
          >
            <Text
              style={{
                fontSize: 20,
                color: '#ffff',
                marginTop: 2,
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
