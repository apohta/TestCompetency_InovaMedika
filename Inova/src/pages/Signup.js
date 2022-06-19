import React, {Component} from 'react';
import {Text, TextInput, View, Button, Alert, Linking} from 'react-native';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      username: '',
      email: '',
      phonenumber: '',
      password: '',
    };
  }
  UserRegisterFunction = () => {
    var fullname = this.state.fullname;
    var username = this.state.username;
    var email = this.state.email;
    var phonenumber = this.state.phonenumber;
    var password = this.state.password;

    if (
      fullname.length == 0 ||
      username.length == 0 ||
      email.length == 0 ||
      phonenumber.length == 0 ||
      password.length == 0
    ) {
      alert('Required Field is Missing');
    } else {
      var InsertAPIURL = 'http://172.16.96.27:80/backend/user_registration.php';

      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };

      var Data = {
        fullname: fullname,
        username: username,
        email: email,
        phone_number: phonenumber,
        PASSWORD: password,
      };
      fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then(response => response.text())
        .then(response => {
          alert(response);
        })
        .catch(error => {
          alert('Error' + error);
        });
    }
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
              marginTop: 20,
              marginLeft: 21,
            }}
          >
            Welcome to Inova Medika Hospital
          </Text>
        </View>
        <TextInput
          style={{
            height: 40,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#F8F8F8',
            backgroundColor: '#F8F8F8',
            marginLeft: 20,
            marginTop: 40,
            marginRight: 20,
          }}
          placeholder="Fullname"
          onChangeText={fullname => this.setState({fullname})}
        />
        <TextInput
          style={{
            height: 40,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#F8F8F8',
            backgroundColor: '#F8F8F8',
            marginLeft: 20,
            marginTop: 25,
            marginRight: 20,
          }}
          placeholder="Username"
          onChangeText={username => this.setState({username})}
        />
        <TextInput
          style={{
            height: 40,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#F8F8F8',
            backgroundColor: '#F8F8F8',
            marginLeft: 20,
            marginTop: 25,
            marginRight: 20,
          }}
          placeholder="Email"
          onChangeText={email => this.setState({email})}
        />
        <TextInput
          style={{
            height: 40,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#F8F8F8',
            backgroundColor: '#F8F8F8',
            marginLeft: 20,
            marginTop: 25,
            marginRight: 20,
          }}
          placeholder="Phone Number"
          onChangeText={phonenumber => this.setState({phonenumber})}
          keyboardType="numeric"
        />
        <TextInput
          secureTextEntry={true}
          style={{
            height: 40,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#F8F8F8',
            backgroundColor: '#F8F8F8',
            marginLeft: 20,
            marginTop: 25,
            marginRight: 20,
          }}
          placeholder="Password"
          onChangeText={password => this.setState({password})}
        />
        <Text
          style={{
            marginTop: 15,
          }}
        />
        <Button
          title="Sign Up"
          color="#3652B6"
          style={{
            marginLeft: 20,
            marginRight: 20,
          }}
          onPress={this.UserRegisterFunction}
        />
        <Text
          style={{
            marginLeft: 82,
            marginTop: 30,
            marginRight: 36,
            fontFamily: 'Arial',
            fontStyle: 'normal',
            fontSize: 16,
            fontWeight: 'normal',
            color: '#FFFFFF',
          }}
          onPress={() => {
            Linking.openURL('https://www.google.com');
          }}
        >
          Already have account? Login
        </Text>
        <Text style={{marginLeft: 100, marginTop: 159}} />
      </View>
    );
  }
}
