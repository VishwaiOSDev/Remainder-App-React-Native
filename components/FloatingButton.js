import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';

const FloatingButton = ({onPress}) => {
  return (
    <View style={styles.fabContainer}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        style={styles.FloatingActionButtonStyle}>
        <Image
          source={require('../assets/plus.png')}
          style={styles.FloatingActionButtonImageStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  fabContainer: {
    flex: 1,
    alignItems: 'flex-end',
    right: 36,
    position: 'absolute', //Here is the trick
    bottom: 96, //Here is the trick
  },
  FloatingActionButtonStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '15%',
    borderRadius: 200 / 2,
  },

  FloatingActionButtonImageStyle: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});

export default FloatingButton;
