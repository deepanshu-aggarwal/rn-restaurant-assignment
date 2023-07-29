import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  Pressable,
  Button,
} from 'react-native';
import {MultiSelect} from 'react-native-element-dropdown';
import {items} from '../../utils/data';

const OrderForm = props => {
  const {open, setOpen, setOrders} = props;
  // a single order will contain name, phone, tableId, dishes(an array of dish), status
  // status can be none, or completed
  const [order, setOrder] = useState({
    name: '',
    phone: '',
    tableId: '',
    dishes: [],
    status: 'none',
  });

  const getItems = () => items;

  const handlePlaceOrder = () => {
    setOrders(prev => [...prev, order]);
    setOrder({
      name: '',
      phone: '',
      tableId: '',
      dishes: [],
      status: 'none',
    });
    setOpen(false);
  };

  const _renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Modal visible={open} onRequestClose={() => setOpen(false)}>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>Add Order</Text>
          <TextInput
            style={styles.input}
            value={order.name}
            onChangeText={text => setOrder(prev => ({...prev, name: text}))}
            placeholder="Enter name"
          />
          <TextInput
            style={styles.input}
            value={order.phone}
            onChangeText={text => setOrder(prev => ({...prev, phone: text}))}
            placeholder="Enter phone number"
          />
          <TextInput
            style={styles.input}
            value={order.tableId}
            onChangeText={text => setOrder(prev => ({...prev, tableId: text}))}
            placeholder="Enter table id"
          />
          <MultiSelect
            data={getItems()}
            placeholder="Search Items"
            value={order.dishes}
            labelField="label"
            valueField="value"
            onChange={items => setOrder(prev => ({...prev, dishes: items}))}
            renderItem={item => _renderItem(item)}
            style={styles.dropdown}
          />
          <Button
            disabled={
              !order?.dishes?.length ||
              !order.name ||
              !order.phone ||
              !order.tableId
            }
            title="Place Order"
            onPress={handlePlaceOrder}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
    gap: 20,
    margin: 50,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
  },
  title: {
    fontSize: 30,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    fontSize: 20,
  },
  item: {
    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  dropdown: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
  },
});

export default OrderForm;
