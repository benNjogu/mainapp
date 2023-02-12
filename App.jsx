import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const App = () => {
  const [name, setName] = useState('Ben');
  const [session, setSession] = useState({number: 1, title: 'state'});
  const [current, setCurrent] = useState(true);

  const handlePress = () => {
    setName('Kimangas');
    setSession({number: 7, title: 'style'});
    setCurrent(false);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>My name is {name}</Text>
      <Text style={styles.text}>
        This is session number {session.number} and about {session.title}
      </Text>
      <Text style={styles.text}>
        {current ? 'current session' : 'next session'}
      </Text>
      <Button
        style={styles.button}
        title="Update state"
        onPress={handlePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
