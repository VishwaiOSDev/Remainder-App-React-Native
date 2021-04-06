import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const BottomButton = props => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={props.onNewTask}>
        <Text style={{color: 'white', fontSize: 16}}>New Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default BottomButton;
