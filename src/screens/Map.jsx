import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import MyStyles from '../utils/Styles';

const Map = ({route}) => {
  const {city} = route.params;

  return (
    <View style={styles.body}>
      <Text style={[MyStyles.CustomFont, styles.text]}>Karibu {city} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    margin: 10,
  },
});

export default Map;
