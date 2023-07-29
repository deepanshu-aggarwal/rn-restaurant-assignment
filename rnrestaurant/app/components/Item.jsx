import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default Item = props => {
  const {order, orders, setOrders} = props;

  // getting color at every render based on the status
  const getCardColor = () => {
    if (order.status === 'completed') {
      return '#A0EE9B';
    } else {
      return '#FFD700';
    }
  };

  // here I'm assuming that (name+tableId) will always be unique
  const handleComplete = () => {
    const updatedOrders = orders.map(item =>
      item.name + item.tableId === order.name + order.tableId
        ? {...item, status: 'completed'}
        : item,
    );
    setOrders(updatedOrders);
  };

  // here I'm assuming that (name+tableId) will always be unique
  const handleDelete = () => {
    const updatedOrders = orders.filter(
      item => item.name + item.tableId !== order.name + order.tableId,
    );
    setOrders(updatedOrders);
  };

  return (
    <View style={[styles.container, {backgroundColor: getCardColor()}]}>
      <Text style={styles.title}>Name: {order.name}</Text>
      <Text style={styles.title}>Table ID: {order.tableId}</Text>
      <Text style={styles.title}>Dishes:</Text>
      <View style={styles.dishContainer}>
        {order.dishes.map(dish => (
          <Text style={styles.dish}>{dish}</Text>
        ))}
      </View>
      <View style={styles.actionContainer}>
        <Button
          disabled={order.status === 'completed'}
          title="Mark as complete"
          onPress={handleComplete}
        />
        {order.status === 'none' && (
          <Button color="red" title="Delete" onPress={handleDelete} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
  dishContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  dish: {
    fontSize: 20,
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 1,
    borderRadius: 10,
    backgroundColor: '#BC4873',
  },
  actionContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 40,
    marginTop: 10,
  },
});
