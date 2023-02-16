import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import CustomButton from '../components/CustomButton';

const ScreenA = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('Screen_B');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <CustomButton
        onPress={handlePress}
        title={'Screen B'}
        color={'#00ff00'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default ScreenA;
