import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CustomButton from '../components/CustomButton';
import MyStyles from '../utils/Styles';

const ScreenA = ({navigation, route}) => {
  const users = [
    {
      id: 1,
      name: 'User A',
    },
    {
      id: 2,
      name: 'User B',
    },
    {
      id: 3,
      name: 'User C',
    },
  ];

  const [name, setName] = useState('');

  const handlePress = () => {
    navigation.navigate('Screen_B', {
      itemName: 'Item from screen A',
      itemId: 12,
    });

    // for (let user of users) {
    //   setName(user.name);
    // }
  };

  return (
    <View style={styles.body}>
      <Text style={[MyStyles.CustomFont, styles.text]}>Screen A</Text>
      <CustomButton
        onPress={handlePress}
        title={'Last User'}
        color={'#00ff00'}
      />
      <Text style={[MyStyles.CustomFont, styles.text]}>
        {route.params?.message}
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

export default ScreenA;
