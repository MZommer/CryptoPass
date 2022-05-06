import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, Button } from 'react-native';
import styles from './style';


export default function App() {
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text1}>{`Cryptopass\n`}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={`Search event`}
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
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
