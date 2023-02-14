import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handlePress = () => {
    if (name.length > 3) setSubmitted(!submitted);
    else
      Alert.alert(
        'Warning',
        'The name must be longer than 3 characters.',
        [
          {
            text: 'LATER',
            onPress: () => console.warn('Later again pressed'),
          },
          {text: 'CANCEL', onPress: () => console.warn('Cancel pressed')},
          {text: 'OK', onPress: () => console.warn('OK pressed')},
        ],
        {cancelable: true, onDismiss: () => console.warn('Alert dismissed')},
      );
  };

  return (
    <View style={styles.body}>
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
      {submitted && (
        <Text style={styles.text}>Your are registered as: {name}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
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
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
