import * as React from "react";
import Button from "./Button";

function Bread(props) {
    const breadPressed = () => {
    }
    return(
        <Button
            onPress={breadPressed}
            buttonText={props.name}
            buttonType="foodNameButton"
        />
    )
}

export default Bread;