import React from 'react';
import {Button, View, StyleSheet} from 'react-native';

export const AddOrderButton = props => {
  const {setOpen} = props;

  return (
    <View style={styles.buttonContainer}>
      <Button
        style={styles.button}
        title="Add an order"
        onPress={() => setOpen(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 0,
  },
});
