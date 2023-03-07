import { Text, View, Image, TextInput, TouchableOpacity, useWindowDimensions, SafeAreaView, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import InputValue from './InputValue';
import Button from './Button';
import { useNavigation } from "@react-navigation/native";
import TopHeader from '../components/TopHeader';
import { auth, firestore } from '../Database/firebase';
import { styles } from '../style/styles';
import {Store} from '../components/Store.js';
import {Item} from'../components/Item.js';

const DefaultStorePage = () => {
  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const cancelPressed = () => {
      navigation.navigate("DefaultMap")
  }
  const items_1 = [];
  const amenities_1 = [];
  const store_1 = new Store(items_1, "McDonalds", amenities_1, "1234 Shelbourne Ave", 2.81);



  const item_1_1 = new Item('5.00', 2, "Big Mac", store_1);
  const item_1_2 = new Item('2.00', 7, "Lg Fries", store_1);
  const item_1_3 = new Item('1.50', 4, "Sml Fries", store_1);
  const item_1_4 = new Item('3.50', 5, "McChicken", store_1);
  const item_1_5 = new Item('0.50', 3, "Pop", store_1);

  items_1.push(item_1_1, item_1_2, item_1_3, item_1_4, item_1_5);


  return (

    <View style={styles.container}>
      <TopHeader navigation={navigation} />
      <View style={styles.title_container}>
        <Text style={[styles.store_page_title, {height: height * 0.3}]}>{store_1.name}</Text>
      </View>
      <View style={styles.store_picture_container}>
        <Image
          style={[styles.store_picture, {height: height * 0.12}]}
          source = {require("../assets/mcdonalds.jpg")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.store_description_container}>
        <Text style={{fontSize: 20}}>Address: {store_1.address}</Text>
        <Text style={{fontSize: 20}}>Distance: {store_1.distance}km</Text>
        <Text style={{fontSize: 20}}>Amenities: Burgers, Fries, Fast Food</Text>
      </View>
      <View style = {styles.store_items_container}>
        {items_1.map((item) => {
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

export default DefaultStorePage;