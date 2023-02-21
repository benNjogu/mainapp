import {View, Text, StyleSheet, Modal, Pressable} from 'react-native';
import React from 'react';

const MyModal = ({visible, setShowWarning, deleteItem}) => {
  return (
    <Modal
      visible={visible}
      transparent
      onRequestClose={() => setShowWarning(false)}
      animationType="slide"
      hardwareAccelerated>
      <View style={styles.centered_view}>
        <View style={styles.warning_modal}>
          <View style={styles.warning_title}>
            <Text style={styles.text}>WARNING!</Text>
          </View>
          <View style={styles.warning_body}>
            <Text style={styles.text}>
              The name must be longer than 3 characters.
            </Text>
          </View>
          <Pressable
            onPress={() => {
              setShowWarning(false);
              deleteItem;
            }}
            style={styles.warning_button}
            android_ripple={{color: '#00000099'}}>
            <Text style={styles.text}>OK</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
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

export default MyModal;
