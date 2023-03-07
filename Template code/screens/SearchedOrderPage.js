import { Text, View, Image, TextInput, TouchableOpacity, useWindowDimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import InputValue from './InputValue';
import Button from './Button';
import { useNavigation } from "@react-navigation/native";
import TopHeader from '../components/TopHeader';
import { auth, firestore } from '../Database/firebase';
import { styles } from '../style/styles';

const SearchedOrderPage = () => {

    const {height} = useWindowDimensions();

    const navigation = useNavigation();

    const OrderFood = () => {
        navigation.navigate("OrderFood")
    }

    return(

        <View style = {styles.container}>
            <TopHeader navigation = {navigation} />
                <View style = {styles.title_container}>
                    <Text style = {[styles.title, {height: height * 0.3}]}>Crust Bakery</Text>
                </View>
                <View style = {styles.container}>
                    <Button
                        onPress = {OrderFood}
                        buttonText = "Order Bread"
                    />
                </View>
        </View>

    );

};

export default SearchedOrderPage