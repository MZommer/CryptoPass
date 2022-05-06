import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput } from 'react-native';
import styles from './style';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text1}>Cryptopass</Text>
    </SafeAreaView>
  );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
