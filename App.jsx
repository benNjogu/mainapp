import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <View style={styles.innerView1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.innerView2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.innerView3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>

      <View style={styles.view2}>
        <Text style={styles.text}>4</Text>
      </View>

      <View style={styles.view3}>
        <Text style={styles.text}>5</Text>
      </View>

      <View style={styles.view4}>
        <View style={styles.innerView6}>
          <Text style={styles.text}>6</Text>
        </View>

        <View style={styles.innerView7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0000ff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
  innerView1: {
    flex: 1,
    backgroundColor: '#0fffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerView2: {
    flex: 2,
    backgroundColor: '#000fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerView3: {
    flex: 3,
    backgroundColor: '#ff000f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerView6: {
    flex: 1,
    backgroundColor: '#789546',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerView7: {
    flex: 1,
    backgroundColor: '#897457',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    backgroundColor: '#00ffff',
    flexDirection: 'row',
  },
  view2: {
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    backgroundColor: '#ff6700',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view4: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#00ff00',
  },
});

export default App;
