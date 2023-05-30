import React from 'react';
import {View, StyleSheet, StatusBar, Text} from 'react-native';
import {Appbar, Button} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="red" barStyle="dark-content" />
      <SafeAreaProvider>
        <Appbar.Header style={styles.appBar}>
          <Appbar.Content title="App One" />
        </Appbar.Header>
        <Text>Hello Ahmed</Text>
        <View style={styles.contentContainer}>
          <Button style={styles.clickBtn} onPress={() => console.log('ahmed')}>
            <Text>Click me</Text>
          </Button>
        </View>
      </SafeAreaProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  appBar: {
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'red',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clickBtn: {
    backgroundColor: 'blue',
  },
});

export default App;
