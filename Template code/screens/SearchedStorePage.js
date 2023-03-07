import { Text, View, Image, TextInput, TouchableOpacity, useWindowDimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import InputValue from './InputValue';
import Button from './Button';
import { useNavigation } from "@react-navigation/native";
import TopHeader from '../components/TopHeader';
import { auth, firestore } from '../Database/firebase';
import { styles } from '../style/styles';
import {Store} from '../components/Store.js';
import {Item} from'../components/Item.js';

const SearchedStorePage = () => {
  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const orderPage = () => {
     navigation.navigate("SearchedOrderPage")
  }

  const cancelPressed = () => {
      navigation.navigate("SearchedMap")
  }
  const items_2 = [];
  const amenities_2 = ['Bread', 'Soup', 'Sandwiches'];
  const store_2 = new Store(items_2, "Crust Bakery", amenities_2, "1234 Cloverdale Ave", 5.10);



  const item_2_1 = new Item('5.00', 17, "Baguette", store_2);
  const item_2_2 = new Item('7.00', 4, "Ham and Cheese Sandwich", store_2);
  const item_2_3 = new Item('3.50', 6, "Sourdough", store_2);
  const item_2_4 = new Item('5.00', 35, "Orange Juice", store_2);

  items_2.push(item_2_1, item_2_2, item_2_3, item_2_4);


  return (

    <View style={styles.container}>
      <TopHeader navigation={navigation} />
      <View style={styles.title_container}>
        <Text style={[styles.store_page_title, {height: height * 0.3}]}>{store_2.name}</Text>
      </View>
      <View style={styles.store_picture_container}>
        <Image
          style={[styles.store_picture, {height: height * 0.12}]}
          source = {require("../assets/Crust-Bakery.jpg")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.store_description_container}>
        <Text style={{fontSize: 20}}>Address: {store_2.address}</Text>
        <Text style={{fontSize: 20}}>Distance: {store_2.distance}km</Text>
        <Text style={{fontSize: 20}}>Amenities: Soup, Sandwiches, Bread</Text>
      </View>
      <View style = {styles.store_items_container}>
          {items_2.map((item) => {
              return(
                  <Text style = {styles.store_item}>{item.name}, Availability: {item.availability}, ${item.price}</Text>
              );
          })}
      </View>
      <Button
        onPress={cancelPressed}
        buttonText="Cancel"
        buttonType="cancelButton"
      />
    </View>
  );
};
//        <Text style={{fontSize: 20}}>Store Name: Crust Bakery</Text>
//        <Text style={{fontSize: 20}}>Amenities: Bread, Soup</Text>
//        <Text style={{fontSize: 20}}>Address: 1234 Cloverdale Ave, Victoria</Text>
//        <Text style={{fontSize: 20}}>Distance: 1.5km</Text>
export default SearchedStorePage;