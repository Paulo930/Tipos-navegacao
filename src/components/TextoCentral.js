import React from 'react';
import {View, Text} from 'react-native';

export default props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.corFundo || '#000',
      }}>
      <Text
        style={{
          fontSize: 50,
          color: props.corTexto || '#fff',
        }}>
        {props.children}
      </Text>
    </View>
  );
};
