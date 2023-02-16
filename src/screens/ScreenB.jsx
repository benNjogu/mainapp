import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import CustomButton from '../components/CustomButton';
import MyStyles from '../utils/Styles';

const ScreenB = ({navigation, route}) => {
  const handlePress = () => {
    navigation.navigate('Screen_A', {message: 'Message from B'});
  };

  return (
    <View style={styles.body}>
      <Text style={[MyStyles.CustomFont, styles.text]}>Screen B</Text>
      <CustomButton
        onPress={handlePress}
        title={'Screen A'}
        color={'#ff00ff'}
      />
      <Text style={[MyStyles.CustomFont, styles.text]}>
        {route.params?.itemName}
      </Text>
      <Text style={[MyStyles.CustomFont, styles.text]}>
        ID:-{route.params?.itemId}
      </Text>
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
    margin: 10,
  },
});

export default ScreenB;
