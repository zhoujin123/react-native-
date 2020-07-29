import React from 'react';
import {Text, StyleSheet} from 'react-native';

export function Heading1({style, ...props}) {
  return <Text style={[styles.Heading1, style]} {...props} />;
}

export function Paragraph({style, ...props}) {
  return <Text style={[styles.Paragraph, style]} {...props} />;
}

const styles = StyleSheet.create({
  Heading1: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  Paragraph: {
    fontSize: 14,
    color: '#696969',
  },
});
