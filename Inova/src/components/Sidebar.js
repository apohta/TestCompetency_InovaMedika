import React, {Component} from 'react';
//import { Text, View } from 'react-native';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  Container,
  Content,
  Text,
  Header,
  Left,
  Body,
  Title,
  Right,
  Icon,
  Button,
} from 'native-base';
import Side from '../components/customDrawer';
import List from '../pages/JadwalDokter';
//import addproduct from '../addproduct';

const Drawer = createDrawerNavigator();
function Home({navigation}) {
  return (
    <Container>
      <Header>
        <Left style={{flex: 0.1}} />
        <Button
          transparent
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Icon name="menu" />
        </Button>
        <Body style={{flex: 1, alignItems: 'center'}}>
          <Title>Dashboard</Title>
        </Body>
        <Right style={{flex: 0.1}} />
      </Header>
      <Content
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>Home Screen</Text>
      </Content>
    </Container>
  );
}

const AppDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={props => <Side {...props} />}>
      <Drawer.Screen
        name="Dashboard"
        component={Home}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="home" style={{fontSize: size, color: color}} />
          ),
        }}
      />
      <Drawer.Screen
        name="List Product"
        component={List}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="home" style={{fontSize: size, color: color}} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Add Product"
        component={addproduct}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="home" style={{fontSize: size, color: color}} />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
}

export default App;
