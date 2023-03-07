import * as React from "react";
import Bread from "./Bread";

function FoodFactory(props) {
    return <Bread name={props.name}
                type={props.type}
                price={props.price}
                availability={props.availability}/>
    // if (type === 'Bread') {
    //     console.log(name);
    //     return <Bread name={props.name} />;
    // }
        // case "Fruit":
        //     return <Fruit {...props.component} />;
}

export default FoodFactory;