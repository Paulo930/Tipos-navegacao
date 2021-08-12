import React from 'react';
import {View, Button} from 'react-native';

export default props => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        {props.voltar ? (
          <Button
            title="Voltar"
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        ) : null}
        {props.avancar ? (
          <Button
            title="Avançar"
            onPress={() => {
              // ou navigate
              props.navigation.push(props.avancar, {
                numero: parseInt(Math.random() * 100),
              });
            }}
          />
        ) : null}
      </View>
      <View
        style={{
          flex: 1,
        }}>
        {props.children}
      </View>
    </View>
  );
};
