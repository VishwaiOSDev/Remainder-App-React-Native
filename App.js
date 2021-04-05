import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import FloatingButton from './components/FloatingButton';
import ModalView from './components/ModalView';

const App = () => {
  const [isAddMode, setIsAddMode] = useState(false);

  const onPress = () => {
    setIsAddMode(true);
  };

  const closeModalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ModalView visible={isAddMode} onClose={closeModalHandler} />
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Whats's up, Vishwa!</Text>
            <Text style={styles.subheading}>TODAY'S TASKS</Text>
          </View>
        </ScrollView>
        <FloatingButton onPress={onPress} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 8,
  },
  headerContainer: {
    alignItems: 'flex-start',
  },
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: Dimensions.get('window').height,
  },
  subheading: {
    color: 'grey',
    padding: 8,
  },
});

export default App;
