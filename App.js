/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import Brow from './Brow.js';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Brow/>
    </SafeAreaView>
    //<Text>hiiiiiiiiiiiii</Text>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default App;

