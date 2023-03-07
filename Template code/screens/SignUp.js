import { Text, View, useWindowDimensions, Alert } from 'react-native';
import React, { useState } from 'react';
import InputValue from './InputValue';
import Button from './Button';
import { auth, firestore } from '../Database/firebase';
import { useNavigation } from "@react-navigation/native";
import TopHeader from '../components/TopHeader';
import { styles } from '../style/styles';

const SignUp = () => {
  const { height } = useWindowDimensions();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');

  const navigation = useNavigation();

  const signInPressed = () => {
    navigation.navigate('SignIn');
  }

  const signUpPressed = () => {
    if(username === '' || password === '' || repeatedPassword === '') {
        Alert.alert('Enter details to sign up!')
    } else if(password != repeatedPassword){
        Alert.alert('Password and repeated password are not same!')
    } else {
        auth
        .createUserWithEmailAndPassword(username, password)
        .then(userCredentials => {
          auth
          .currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: 'https://seng350-69b7e.firebaseapp.com',
          })
          .then(() => {
            Alert.alert('Verification email sent')
          })
          .catch(error => alert(error.message))
          .then(() => {
            firestore.collection('users')
            .doc(auth.currentUser.uid)
            .set({
              firstName,
              lastName,
              username,
            })
          })
          .catch(error => alert(error.message));
          const user = userCredentials.user;
          console.log('Sucessfully registered with:', user.email);
          navigation.navigate('SignIn');
        })
        .catch(error => alert(error.message)); 
    }
  }

  const forgetPasswordPressed = () => {
    navigation.navigate('ResetPassword');
  }
  
  return (
    <View style={styles.container}>
      <TopHeader navigation={navigation} />
      <View style={styles.title_container}>
        <Text style={[styles.title, {height: height * 0.3}]}>Create Your Account</Text>
      </View>

      <View style={styles.middle_container}>
        <InputValue
         value={firstName}
         setValue={setFirstName}
         placeholder="First Name"
        />
        <InputValue
         value={lastName}
         setValue={setLastName}
         placeholder="Last Name"
        />
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
        <InputValue
         value={repeatedPassword}
         setValue={setRepeatedPassword}
         placeholder="Repeat Password"
         secureTextEntry          // hide input password
        />
      </View>

      <View style={styles.sign_up_button_container}>
        <Button
         onPress={signUpPressed}
         buttonText="Sign Up"
        />
        <Button
         onPress={forgetPasswordPressed}
         buttonText="Forget your password?"
         buttonType="tertiaryButton"
        />
        <Button
         onPress={signInPressed}
         buttonText="Sign In"
         buttonType="tertiaryButton"
        />
      </View>
    </View>
  );
};

export default SignUp;