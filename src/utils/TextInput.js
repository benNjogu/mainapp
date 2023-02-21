import {View, TextInput, StyleSheet} from 'react-native';

const MyTextInput = ({placeholder, moreStyles, ...otherProps}) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={[styles.input, moreStyles]}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#555555',
    borderRadius: 10,
    backgroundColor: '#fff',
    textAlign: 'left',
    fontSize: 20,
    margin: 10,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  },
});

export default MyTextInput;
