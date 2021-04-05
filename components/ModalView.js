import React from 'react';
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

const ModalView = ({visible, onClose}) => {
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
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} activeOpacity={0.5}>
              <Text style={{color: 'white'}}>New Task</Text>
            </TouchableOpacity>
          </View>
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
  button: {
    width: '40%',
    position: 'absolute',
    height: 50,
    bottom: 96,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#0375FF',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
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
