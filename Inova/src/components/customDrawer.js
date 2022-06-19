//import { Button, Drawer, Footer, Right } from 'native-base';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
//import {StyleSheet} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {Button, Right, Icon, Container, Content, Header} from 'native-base';
import Animated from 'react-native-reanimated';

function Side({...props}) {
  return (
    <Container>
      <Header style={{backgroundColor: 'ffffff', borderBottomWidth: 0}}>
        <Right>
          <Button
            transparent
            onPress={() =>
              props.navigation.dispatch(DrawerActions.closeDrawer())
            }
          >
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
      <Content>
        <DrawerContentScrollView>
          <Animated.View>
            <DrawerItemList {...props} />
            {/* <DrawerItem label='List Product' icon={({ color, size }) => {
                            <Icon name="home" style={{fontSize: size, color: color }} />
                        }}
                            onPress={() => navigation.navigate('Home')}
                        /> */}
          </Animated.View>
        </DrawerContentScrollView>
      </Content>
      {/* <Footer /> */}
    </Container>
  );
}

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     box: {
//       backgroundColor: "tomato",
//       width: 200,
//       height: 200,
//     },
//   });
export default Side;
