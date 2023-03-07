import { Text, View, Image, TextInput, TouchableOpacity, useWindowDimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import InputValue from './InputValue';
import Button from './Button';
import { useNavigation } from "@react-navigation/native";
import TopHeader from '../components/TopHeader';
import { auth, firestore } from '../Database/firebase';
import { styles } from '../style/styles';

const StorePage = () => {
  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const cancelPressed = () => {
      navigation.navigate("Home")
  }

  return (
    <View style={styles.container}>

      <TopHeader navigation={navigation} />
      <View style={styles.title_container}>
        <Text style={[styles.title, {height: height * 0.3}]}>Store Page</Text>
      </View>
        <Text style={{fontSize: 20}}>Store Name: Crust Bakery</Text>
        <Text style={{fontSize: 20}}>Amenities: Bread, Soup</Text>
        <Text style={{fontSize: 20}}>Address: 1234 Cloverdale Ave, Victoria</Text>
        <Text style={{fontSize: 20}}>Distance: 1.5km</Text>
      <Button
        onPress={cancelPressed}
        buttonText="Cancel"
        buttonType="cancelButton"
      />
    </View>
  );
};

export default StorePage;