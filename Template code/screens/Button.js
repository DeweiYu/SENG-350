import { Text, Pressable } from 'react-native';
import React from 'react';
import { styles } from '../style/styles';

const Button = ({onPress, buttonText, buttonType="primaryButton"}) => {
    return (
        <Pressable
            onPress={onPress}
            style={[styles.create_button_container, styles[`create_button_container_${buttonType}`]]}
        >
            <Text style={[styles.button_text, styles[`button_text_${buttonType}`]]}>{buttonText}</Text>
        </Pressable>
    );
};

export default Button;