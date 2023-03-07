import { Text, View, useWindowDimensions, Alert, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import TopHeader from '../components/TopHeader';
import { styles } from '../style/styles';
import FoodFactory from './FoodFactory';

// import { breadList } from "../Database/product-firebase-content.js";

const Food = () => {
  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const food_list = [
    {
      name: "Baguette",
      price: 7,
      availability: 80,
  type: "bread"
    },
    {
      name: "Sourdough",
      price: 5,
      availability: 99,
      type: "bread"
    },
    {
      name: "Brioche",
      price: 5,
      availability: 80,
      type: "bread"
    },
    {
      name: "Focaccia",
      price: 8,
      availability: 87,
      type: "bread"
    },
    {
      name: "Ciabatta",
      price: 74,
      availability: 50,
      type: "bread"
    },
    {
      name: "Rye Bread",
      price: 7,
      availability: 0,
      type: "bread"
    },
    {
      name: "Multigrain",
      price: 4,
      availability: 30,
      type: "bread"
    },
    {
      name: "Rye Bread",
      price: 10,
      availability: 100,
      type: "Pita"
    }];
  
  return (
    <View style={styles.container}>
        <TopHeader navigation={navigation} />
        <View style={styles.foodTitleContainer}>
            <Text style={[styles.title, {height: height * 0.3}]}>Food</Text>
        </View>

        <View style={styles.foodMiddleContainer}>
            <SafeAreaView>
                <ScrollView style={styles.scrollView}>
                    {food_list.map(food => (
                        <FoodFactory
                            name={food.name}
                            type={food.type}
                            price={food.price}
                            availability={food.availability}/>
                    ))}
                </ScrollView>
            </SafeAreaView>
        </View>
    </View>
  );
};

export default Food;