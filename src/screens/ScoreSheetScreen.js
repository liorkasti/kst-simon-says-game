import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { fetchScores } from '../redux/actions';
import Background from '../components/Background';

const ScoreSheetScreen = ({ navigation }) => {
  const { topScores } = useSelector(state => state.reducers);

  const dispatch = useDispatch();

  const title = "Scoreboard";
  const emptyList = "Loading...";

  useEffect(() => {
    dispatch(fetchScores());
  }, []);

  const renderItem = item => {
    return (
      <View style={styles.itemRow}>
        <Text style={styles.itemNo}>{item.index + 1}</Text>
        <Text style={styles.itemText}>{item.item.userName}</Text>
        <Text style={styles.itemText}>{item.item.score}</Text>
      </View>
    )
  };

  const listEmptyComponent = () => {
    return <Text>{emptyList}</Text>;
  };

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.itemRow}>
          <Text style={styles.itemNo}>{`#`}</Text>
          <Text style={styles.itemText}>{`Name`}</Text>
          <Text style={styles.itemText}>{`Score`}</Text>
        </View>

        <FlatList
          keyExtractor={(index, item) => item}
          data={topScores}
          renderItem={renderItem}
          scrollEnabled
          ListEmptyComponent={listEmptyComponent}
          ListFooterComponent={() => <View style={{ height: 100 }} />}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 40,
    alignContent: 'center',
  },
  title: {
    marginBottom: 30,
    paddingHorizontal: 20,
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#694fad',
    borderBottomWidth: 1,
  },
  itemText: {
    marginHorizontal: 10,
    fontSize: 16,
    flex: 1,
    fontWeight: '900',
    textAlign: 'center',
  },
  itemNo: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '900',
  },
});

export default ScoreSheetScreen;
