import React, { forwardRef, useEffect, useImperativeHandle, useState, } from 'react';
import { View, Text, Alert, StyleSheet, Modal, Platform, TextInput, TouchableOpacity, Dimensions, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { storeData, fetchData, addUser, setPrompt } from '../redux/actions';

const GameOver = ({ navigation }, ref) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [userName, setUserName] = useState('')

  const { score, maxScore, topScores } = useSelector(state => state.reducers);
  const dispatch = useDispatch();

  useImperativeHandle(ref, () => ({
    openModal: () => {
      console.log('open modal');
      setModalVisible(true);
    },
  }));

  const userNameHandler = (name) => {
    setModalVisible(true)
    if (userName?.length > 3) {
      setUserName(value)
    } else {
      //TODO:dynamic prompt alert
    }
  };

  const onSubmit = () => {
    if (userName?.length != 0) {
      dispatch(storeData(userName, score, () => dispatch(fetchData())));
      setModalVisible(false);
      //TODO: useNavigation or openDrawer
      navigation.openDrawer();
      // navigation.navigate('ScoreSheet');
    } else {
      //TODO:dynamic prompt alert
    }
  };

  return (
    <Modal
      visible={modalVisible}
      animationType='slide'
      transparent={true}
      onRequestClose={() => setModalVisible(false)}
      style={styles.centeredView}
    >
      <View style={StyleSheet.absoluteFill} />
      <TouchableOpacity //An overlay for closes the modal when press outside modal
        style={StyleSheet.absoluteFill}
        onPress={() => {
          setModalVisible(false);
        }}
      />
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            Welldone! level {score}
          </Text>
          <TextInput
            style={styles.modalInput}
            maxLength={15}
            defaultValue={userName}
            onChangeText={(value) => setUserName(value)}
            // onChangeText={(value) => userNameHandler(value)}
            placeholder="Enter your name"
            placeholderTextColor={'#444'}
            autoFocus
          />
          <TouchableOpacity
            activeOpacity={0.8}
            // disabled={!isDone}
            style={styles.modalBtn}
            onPress={() => onSubmit()}>
            <Text style={styles.modalBtnText}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const windowHeight = Dimensions.get('window').height
const windoWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },

  modalView: {
    width: windoWidth * .8,
    height: windowHeight * .5,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    marginTop: -20,
    backgroundColor: "#ddd",
    borderRadius: 14,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  modalText: {
    fontSize: 18,
    fontWeight: '300',
    color: '#000',
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium'
  },

  modalInput: {
    backgroundColor: '#eee',
    color: '#000',
    width: '100%',
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium'
  },

  modalBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444',
    width: '50%',
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },

  modalBtnText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium'
  }
})

export default forwardRef(GameOver);
