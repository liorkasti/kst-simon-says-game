import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Background from '../components/Background';
import { APP_THEME } from '../constants/theme';

const ScoreSheetScreen = ({ navigation }) => {
  const state = useSelector((state) => state);
  const { score, maxScore, topScores } = useSelector(state => state.reducers);

  const dispatch = useDispatch();

  const title = "Scoreboard";
  const emptyList = "Loading...";

  const renderItem = item => {
    return (
      <View style={styles.itemRow}>
        <Text style={styles.itemText}>{`Name: ${item.item.userName}`}</Text>
        <Text style={styles.itemText}>{`Score: ${item.item.score}`}</Text>
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
        <FlatList
          keyExtractor={(index, item) => item}
          data={topScores}
          renderItem={renderItem}
          ListEmptyComponent={listEmptyComponent}
          ListFooterComponent={() => <View style={{ height: 100 }} />}
        />
      </View>
    </Background>
  );
};

const windowWidth = Dimensions.get('window').width;

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
    flexDirection: 'row',
    marginHorizontal: 10,
    fontSize: 16,
    flex: 1,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default ScoreSheetScreen;
