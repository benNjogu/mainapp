import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import CustomButton from '../components/CustomButton';

const ScreenB = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('Screen_A');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <CustomButton
        onPress={handlePress}
        title={'Screen A'}
        color={'#ff00ff'}
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

export default ScreenB;
