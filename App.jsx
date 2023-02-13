import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  FlatList,
} from 'react-native';

const App = () => {
  const [items, setItems] = useState([
    {name: 'Item 1'},
    {name: 'Item 2'},
    {name: 'Item 3'},
    {name: 'Item 4'},
    {name: 'Item 5'},
    {name: 'Item 6'},
    {name: 'Item 7'},
    {name: 'Item 8'},
  ]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...items, {name: 'Item 79'}]);
    setRefreshing(false);
  };

  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={items}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#ff00ff']}
        />
      }
    />

    // <ScrollView
    //   style={styles.body}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={refreshing}
    //       onRefresh={onRefresh}
    //       colors={['#ff00ff']}
    //     />
    //   }>
    //   {items.map(item => {
    //     return (
    //       <View style={styles.item} key={item.key}>
    //         <Text style={styles.text}>{item.item}</Text>
    //       </View>
    //     );
    //   })}
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    color: '#000',
    fontSize: 35,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
