import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  ToastAndroid,
  Modal,
  Image,
  ImageBackground,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handlePress = () => {
    if (name.length > 3) setSubmitted(!submitted);
    else setShowWarning(true);
  };

  return (
    <ImageBackground
      source={require('./android/app/src/main/assets/texture.webp')}
      style={styles.body}>
      <Text style={styles.text}>Please write your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Ben"
        onChangeText={value => setName(value)}
      />
      <Pressable
        onPress={handlePress}
        hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}
        android_ripple={{color: '#00f'}}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#dddddd' : '#00ff00',
          },
          styles.button,
        ]}>
        <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
      </Pressable>
      {submitted ? (
        <View style={styles.body}>
          <Text style={styles.text}>Your are registered as: {name}</Text>
          <Image
            style={styles.image}
            source={require('./android/app/src/main/assets/done.png')}
            //source={{uri: 'https://novemberlane.net/wp-content/uploads/2016/06/Avoid-the-Oops.png'}}
          />
        </View>
      ) : (
        <Image
          style={styles.image}
          source={require('./android/app/src/main/assets/error.png')}
        />
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16,
    margin: 10,
  },
  text: {
    color: '#000',
    fontSize: 18,
    margin: 10,
    textAlign: 'center',
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderTopColor: '#00000099',
    borderBottomColor: '#fff',
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default App;
