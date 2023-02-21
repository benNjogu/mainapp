import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import React, {useEffect} from 'react';
import GlobalStyles from '../utils/Styles';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('My Tasks');
    }, 2000);
  }, []);

  return (
    <View style={styles.body}>
      <StatusBar backgroundColor={GlobalStyles.ColorPrimary} />
      <Image
        style={styles.logo}
        source={require('../../assets/images/mytodo.png')}
      />
      <Text style={[styles.text, GlobalStyles.CustomFontBig]}>
        Ben's To-Do App
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0080ff',
  },
  logo: {
    width: 150,
    height: 150,
    margin: 20,
  },
  text: {
    fontSize: 40,
    color: '#fff',
  },
});

export default Splash;
