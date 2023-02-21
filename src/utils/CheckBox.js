import CheckBox from '@react-native-community/checkbox';

const MyCheckBox = ({colors, value, onValueChange}) => {
  return (
    <CheckBox tintColors={colors} value={value} onValueChange={onValueChange} />
  );
};

export default MyCheckBox;
