import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  Dimensions,
  Image,
  SafeAreaView,
} from 'react-native';
import BottomButton from './BottomButton';

const ModalView = ({visible, onClose}) => {
  const [enteredRemainder, setEnteredRemainder] = useState('');

  const remainderInputHandler = enteredText => {
    setEnteredRemainder(enteredText);
  };

  const [remainders, setRemainder] = useState([]);

  const addRemaindersHandler = reaminderName => {
    if (reaminderName !== '') {
      setRemainder(currentRemainder => [
        ...currentRemainder,
        {key: Math.random().toString(), value: reaminderName},
      ]);
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <SafeAreaView>
        <TouchableOpacity activeOpacity={0.5} onPress={onClose}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.closeImage}
              source={require('../assets/error.png')}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.modalContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textinput}
              placeholder="What do you want to remainded about?"
              placeholderTextColor="#85929E"
              onChangeText={remainderInputHandler}
            />
          </View>
          <BottomButton onNewTask={addRemaindersHandler} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 2,
    padding: 12,
    justifyContent: 'center',
  },
  textinput: {
    fontSize: 20,
    padding: 10,
    color: '#2C3E50',
  },

  modalContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    height: Dimensions.get('window').height - 26,
  },
  closeImage: {
    width: 40,
    height: 40,
    tintColor: '#2C3E50',
  },
  imageContainer: {
    alignItems: 'flex-end',
    marginRight: 20,
  },
});

export default ModalView;
