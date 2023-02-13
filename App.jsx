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
  let itemNum = 1;

  const [data, setData] = useState([
    {
      title: 'Title ' + itemNum,
      data: [
        `item ${itemNum} - ${itemNum} `,
        `item ${itemNum} - ${itemNum + 1} `,
      ],
    },
  ]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setData(addItem(data));
    setRefreshing(false);
  };

  const addItem = data => {
    itemNum = data.length + 1;

    return [
      ...data,
      {
        title: 'Title ' + itemNum,
        data: [`item ${itemNum} - 1 `, `item ${itemNum} - 2 `],
      },
    ];
  };

  return (
    <SectionList
      sections={data}
      renderItem={({item}) => (
        <View style={styles.textView}>
          <Text style={styles.text}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
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
  },
  text: {
    color: '#000',
    fontSize: 35,
    fontStyle: 'italic',
  },
  textView: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: '#fff',
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default App;
