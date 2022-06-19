import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Pie from 'react-native-pie';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faBell} from '@fortawesome/free-solid-svg-icons';

export default () => {
  return (
    <ScrollView>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <FontAwesomeIcon
          icon={faBars}
          size={25}
          style={{color: 'black', marginLeft: 19, marginTop: 30}}
        />
        <Text
          style={{
            marginTop: 30,
            marginLeft: 20,
            fontSize: 22,
            fontWeight: 'bold',
          }}
        >
          {' '}
          Inova Medika Hospital
        </Text>
        <FontAwesomeIcon
          icon={faBell}
          size={25}
          style={{
            marginLeft: 180,
            marginTop: 30,
          }}
        />
      </View>
      <View style={styles.container}>
        <View
          style={{
            paddingVertical: 100,
            flexDirection: 'row',
            width: 350,
            justifyContent: 'space-between',
          }}
        >
          <Pie
            radius={105}
            sections={[
              {
                percentage: 10,
                color: '#C70039',
              },
              {
                percentage: 20,
                color: '#44CD40',
              },
              {
                percentage: 30,
                color: '#404FCD',
              },
              {
                percentage: 40,
                color: '#EBD22F',
              },
            ]}
            strokeCap={'butt'}
          />
        </View>
        <View
          style={{
            paddingVertical: 15,
            flexDirection: 'row',
            width: 350,
            justifyContent: 'space-between',
          }}
        >
          <Pie
            radius={105}
            innerRadius={65}
            sections={[
              {
                percentage: 10,
                color: '#C70039',
              },
              {
                percentage: 20,
                color: '#44CD40',
              },
              {
                percentage: 30,
                color: '#404FCD',
              },
              {
                percentage: 40,
                color: '#EBD22F',
              },
            ]}
            strokeCap={'butt'}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 1050,
    paddingHorizontal: 270,
  },
  gauge: {
    position: 'absolute',
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
});
