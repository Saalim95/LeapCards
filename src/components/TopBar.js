import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/AppContext';

export const TopBar = () => {
  const {taps, matches} = useContext(Context);
  const attempts = Math.floor(taps / 2);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>attempts: {attempts}</Text>
        <Text style={{...styles.text, fontWeight: '600'}}>LeapCards</Text>
        <Text style={styles.text}>matches: {matches}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#5f9c86',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#fff',
  },
});
