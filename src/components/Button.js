import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export function Button({ title, onPress }) {
  return (
    <TouchableOpacity 
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  textButton: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});