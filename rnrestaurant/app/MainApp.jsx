import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {items} from './utils/data';
import Item from './components/Item';
import {AddOrderButton} from './components/order/AddOrderButton';
import OrderForm from './components/order/OrderForm';

const MainApp = () => {
  const [orders, setOrders] = useState([]);
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      {orders?.length ? (
        <FlatList
          data={orders}
          renderItem={({item}) => (
            <Item order={item} orders={orders} setOrders={setOrders} />
          )}
          keyExtractor={item => item.name + item.tableId}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <Text style={styles.emptyText}>Order list is empty...</Text>
      )}
      <AddOrderButton setOpen={setOpen} />
      <OrderForm setOrders={setOrders} open={open} setOpen={setOpen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flexGrow: 1,
  },
  emptyText: {
    flexGrow: 1,
    fontSize: 30,
    padding: 20,
  },
});

export default MainApp;
