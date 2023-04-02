import React from 'react';
import { Body, Container, Content, Header } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ChangeToLanguage from "./src/Translations/ChangeLanguage";

export default function App() {
  return (
    <View style={styles.container}>
      <ChangeToLanguage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // container: {
  //   flex: 1,
  // },
});
