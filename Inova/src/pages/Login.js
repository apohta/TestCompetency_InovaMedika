import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  Alert,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {createStackNavigator, createAppContainer} from 'react-navigation-stack';
import signup from './Signup';
import Sidebar from './JadwalDokter';

export default class Login extends Component {
  // state = {
  //   username: "",
  //   password: ""
  // }

  // onChangeHandle(state, value){
  //   this.setState({
  //     [state]: value
  //   })
  // }
  static navigationOptions = {
    title: 'Login',
  };
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  LoginFunction = () => {
    const {username} = this.state;
    const {password} = this.state;

    fetch('http://172.16.96.27/backend/Login.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        PASSWORD: password,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson === 'Data Matched') {
          //this.props.navigation.navigate('Sidebar');
          Alert.alert('Berhasil login');
        } else {
          Alert.alert('Username and Password wrong');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <View style={{padding: 5, backgroundColor: '#56C3F1'}}>
        <View>
          <Text
            style={{
              color: '#FFFFFF',
              fontFamily: 'Segoe UI',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: 38,
              marginTop: 81,
              marginLeft: 21,
            }}
          >
            Welcome Back
          </Text>
        </View>
        {/* <Form style={{marginTop: 100}}>
        <Label>
          Username:
          <Input type="text" name="name" />
        </Label>
      </Form> */}
        <TextInput
          style={{
            height: 40,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#dedede',
            backgroundColor: '#dedede',
            marginLeft: 20,
            marginTop: 137,
            marginRight: 20,
          }}
          name="username"
          placeholder="Username"
          onChangeText={username => this.setState({username})}
        />
        <TextInput
          secureTextEntry={true}
          style={{
            height: 40,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#dedede',
            backgroundColor: '#dedede',
            marginLeft: 20,
            marginTop: 25,
            marginRight: 20,
          }}
          name="password"
          placeholder="Password"
          onChangeText={password => this.setState({password})}
        />
        <Text
          style={{
            marginTop: 15,
          }}
        />
        <TouchableOpacity onPress={this.LoginFunction}>
          <Text
            style={{
              backgroundColor: '#3652B6',
              alignItems: 'center',
              fontSize: 18,
              padding: 6,
              borderRadius: 10,
              marginLeft: 18,
              marginRight: 15,
              textAlign: 'center',
              color: 'white',
            }}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
        {/* <Button
        title="Login"
        color="#3652B6"
        onPress={()=> Alert.alert('Sistem belum selesai')}
      /> */}
        <Text
          style={{
            marginLeft: 82,
            marginTop: 120,
            marginRight: 36,
            fontFamily: 'Arial',
            fontStyle: 'normal',
            fontSize: 16,
            fontWeight: 'normal',
            color: '#FFFFFF',
          }}
          onPress={() => this.props.navigation.navigate('signup')}
        >
          Don't have an account? Sign Up
        </Text>
        <Text style={{marginLeft: 100, marginTop: 159}} />
      </View>
    );
  }
}
