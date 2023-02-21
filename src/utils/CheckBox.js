import CheckBox from '@react-native-community/checkbox';
import GlobalStyles from './Styles';

const MyCheckBox = ({value, onValueChange}) => {
  return (
    <CheckBox
      tintColors={{true: GlobalStyles.ColorPrimary}}
      value={value}
      onValueChange={onValueChange}
    />
  );
};

export default MyCheckBox;
