import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';
import styles from './style';
import { Text, Button, Input, Block, COLORS, SIZES, theme, withGalio, GalioProvider } from 'galio-framework';
import {Box, NativeBaseProvider} from "native-base"; 
import { Entypo } from "@native-base/icons";

export default function App() {
	const [text, setText] = useState('');
	return (
		<View style={styles.container}>
			<Text style={styles.text1}>{`Cryptopass\n`}</Text>	
			<Input placeholderTextColor={theme.COLORS.WHITE} placeholder=" Search event" bgColor = {theme.COLORS.BLACK }rounded color={theme.COLORS.WHITE} style={{ borderColor: theme.COLORS.WHITE }} />
			<NativeBaseProvider>
      			<Box>Hello world</Box>
				  
    		</NativeBaseProvider>
		</View>	

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
