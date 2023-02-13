import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
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

  const DATA = [
    {
      title: 'Title 1',
      data: ['item 1-1', 'item 1-2', 'item 1-3'],
    },
    {
      title: 'Title 2',
      data: ['item 2-1', 'item 2-2', 'item 2-3'],
    },
    {
      title: 'Title 3',
      data: ['item 3-1', 'item 3-2', 'item 3-3'],
    },
    {
      title: 'Title 4',
      data: ['item 4-1', 'item 4-2', 'item 4-3'],
    },
  ];

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...items, {name: 'Item 79'}]);
    setRefreshing(false);
  };

  return (
    <SectionList
      sections={DATA}
      renderItem={({item}) => <Text style={styles.text}>{item}</Text>}
      renderSectionHeader={({section}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
    />

    // <FlatList
    //   keyExtractor={(item, index) => index.toString()}
    //   data={items}
    //   renderItem={({item}) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{item.name}</Text>
    //     </View>
    //   )}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={refreshing}
    //       onRefresh={onRefresh}
    //       colors={['#ff00ff']}
    //     />
    //   }
    // />

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
