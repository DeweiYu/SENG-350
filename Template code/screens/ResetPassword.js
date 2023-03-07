import { Text, View, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import InputValue from './InputValue';
import Button from './Button';
import { auth } from '../Database/firebase';
import { useNavigation } from "@react-navigation/native";
import TopHeader from '../components/TopHeader';
import { styles } from '../style/styles';

const ResetPassword = () => {
  const {height} = useWindowDimensions();

  const [username, setUsername] = useState('');

  const navigation = useNavigation();

  const sendPressed = () => {
    auth.sendPasswordResetEmail(username)
    .then(() => {
      navigation.navigate('SignIn', {username: username});
    })
    .catch(error => alert(error.message));
  }

  const signInPressed = () => {
    navigation.navigate("SignIn");
  }
  
  return (
    <View style={styles.container}>
      <TopHeader navigation={navigation} />
      <View style={styles.title_container}>
        <Text style={[styles.title, {height: height * 0.3}]}>Reset Password</Text>
      </View>

      <View style={styles.middle_container}>
        <InputValue
         value={username}
         setValue={setUsername}
         placeholder="Email"
        />
      </View>

      <View style={styles.button_container}>
        <Button
         onPress={sendPressed}
         buttonText="Send"
        />
        <Button
         onPress={sendPressed}
         buttonText="Resend Email"
         buttonType="secondaryButton"
        />
        <Button
         onPress={signInPressed}
         buttonText="Back to sign in"
         buttonType="tertiaryButton"
        />
      </View>
    </View>
  );
};

export default ResetPassword;