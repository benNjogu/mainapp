import {FlatList} from 'react-native';

const MyFlatList = ({data, key, renderItem}) => {
  return <FlatList data={data} renderItem={renderItem} keyExtractor={key} />;
};

export default MyFlatList;
