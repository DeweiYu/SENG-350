import { Text, View, useWindowDimensions, Alert } from 'react-native';
import React, { useState } from 'react';
import InputValue from './InputValue';
import Button from './Button';
import { useNavigation } from "@react-navigation/native";
import { auth } from '../Database/firebase';
import TopHeader from '../components/TopHeader';
import { styles } from '../style/styles';

const SignIn = () => {
  const {height} = useWindowDimensions();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const signInPressed = () => {
    // Check if username or password is empty.
    if(username === '') {
      Alert.alert('Enter your username to sign in!')
    } else if(password === '') {
      Alert.alert('Enter your password to sign in!')
    } else {
      auth
      .signInWithEmailAndPassword(username, password)
      .then(userCredentials => {
        const user = userCredentials.user;

        // Check if user's email is verified.
        if(user.emailVerified){
          console.log('Sucessfully logged in with:', user.email);
          navigation.navigate('Home');
        } else {
          Alert.alert('Please verify your email before signing in!')
          navigation.navigate('SignIn');
        }
      })
      .catch(error => alert(error.message))      
    }
  }

  const signUpPressed = () => {
    navigation.navigate('SignUp');
  }

  const forgetPasswordPressed = () => {
    navigation.navigate('ResetPassword');
  }
  
  return (
    <View style={styles.container}>
      <TopHeader navigation={navigation} />
      <View style={styles.title_container}>
        <Text style={[styles.title, {height: height * 0.3}]}>Sign In</Text>
      </View>

      <View style={styles.middle_container}>
        <InputValue
         value={username}
         setValue={setUsername}
         placeholder="Email"
        />
        <InputValue
         value={password}
         setValue={setPassword}
         placeholder="Password"
         secureTextEntry          // hide input password
        />
      </View>

      <View style={styles.button_container}>
        <Button
         onPress={signInPressed}
         buttonText="Sign In"
        />
        <Button
         onPress={signUpPressed}
         buttonText="Don't have an account? Register Now"
         buttonType="tertiaryButton"
        />
        <Button
         onPress={forgetPasswordPressed}
         buttonText="Forget your password?"
         buttonType="tertiaryButton"
        />
      </View>
    </View>
  );
};

export default SignIn;