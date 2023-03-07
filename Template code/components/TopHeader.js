import * as React from "react";
import { useState } from 'react';
import Modal from "react-native-modal";

import {
  Text,
  View,
  Pressable,
  Image,
  useWindowDimensions,
} from "react-native";
import { auth } from '../Database/firebase';
import { styles } from '../style/styles';
import Button from "../screens/Button";

function TopHeader({ navigation }) {

  const { height } = useWindowDimensions();
  const { width } = useWindowDimensions();

  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <View style={styles.logo_container}>
      <Pressable onPress={() => {auth.currentUser === null ? navigation.navigate("SignIn"):navigation.navigate("Home")}}>
        <Image
          style={[styles.logo, {height: height * 0.12}]}
          source = {require("../assets/logo.png")}
          resizeMode="contain"
        />
      </Pressable>
      <Pressable onPress={toggleModal}>
            <Image
              style={[styles.help, {height: height * 0.12}]}
              source = {require("../assets/help.png")}
              resizeMode="contain"
            />
        </Pressable>
      <Modal isVisible={show}>
        <View style={styles.helpTextContainer}>
          <Text style={styles.helpText}>
            Welcome to the Help/Tutorial function! When fully implemented this modal will open to provide assistance to the user.
          </Text>
        </View>
        <Button onPress={toggleModal}
          buttonText="Hide Help"/>
        
      </Modal>
    </View>
  );
}

export default TopHeader;
