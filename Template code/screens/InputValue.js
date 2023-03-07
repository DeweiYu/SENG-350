import { View, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '../style/styles';

const InputValue = ({value, setValue, placeholder, secureTextEntry}) => {
    const [secure, setSecure] = useState(secureTextEntry);
    const [eyeIcon, setEyeIcon] = useState('eye-off');

    const handlePasswordVisibility = () => {
        if (eyeIcon === 'eye') {
            setEyeIcon('eye-off');
            setSecure(!secure);
        } else if (eyeIcon === 'eye-off') {
            setEyeIcon('eye');
            setSecure(!secure);
        }
    };
    if (secureTextEntry) {
        return (
            <View style={styles.input_value_container}>
                <TextInput
                    value={value}
                    onChangeText={setValue}
                    placeholder={placeholder}
                    style={styles.textInput}
                    secureTextEntry={secure}        // hide input passward
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                <Pressable onPress={handlePasswordVisibility}>
                    <MaterialCommunityIcons style={styles.eyeIcon} name={eyeIcon} size={22} color="#232323" />
                </Pressable> 
            </View>
        );
    } else {
        return (
            <View style={styles.input_value_container}>
                <TextInput
                    value={value}
                    onChangeText={setValue}
                    placeholder={placeholder}
                    style={styles.textInput}
                    secureTextEntry={secure}        // hide input passward
                    autoCapitalize='none'
                    autoCorrect={false}
                />
            </View>
        );
    }
};

export default InputValue;