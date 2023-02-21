import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import CheckBox from '../utils/CheckBox';
import GlobalStyles from '../utils/Styles';

const Card = ({item, onValueChange, onPress}) => {
  return (
    <View style={styles.item_row}>
      <View
        style={[
          {
            backgroundColor:
              item.Color === 'red'
                ? '#f28b82'
                : item.Color === 'blue'
                ? '#aecbfa'
                : item.Color === 'green'
                ? '#ccff90'
                : '#fff',
          },
          styles.color,
        ]}
      />
      <CheckBox
        colors={{true: GlobalStyles.ColorPrimary}}
        value={item.Done}
        onValueChange={onValueChange}
      />
      <View style={styles.item_body}>
        <Text
          style={[styles.title, GlobalStyles.CustomFontHW]}
          numberOfLines={1}>
          {item.Title}
        </Text>
        <Text
          style={[styles.subtitle, GlobalStyles.CustomFontHW]}
          numberOfLines={1}>
          {item.Desc}
        </Text>
      </View>
      <TouchableOpacity style={styles.delete} onPress={onPress}>
        <FontAwesome5 name="trash" size={25} color="#ff3636" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  color: {
    width: 20,
    height: 100,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  delete: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item_body: {
    flex: 1,
  },
  item_row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    color: '#999',
    fontSize: 20,
    margin: 5,
  },
  title: {
    color: '#000',
    fontSize: 30,
    margin: 5,
  },
});

export default Card;
