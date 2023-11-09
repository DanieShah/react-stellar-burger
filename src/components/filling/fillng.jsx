import React from "react";
import { ConstructorElement,
    DragIcon, 
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./fillng.module.css";
import { ingredientPropType } from "../../utils/prop-types";
import PropTypes from "prop-types"


const Filling = ({arr}) => {
return(
    <div className={styles.box}>
       <DragIcon type="primary" />
       <ConstructorElement
          text={arr.name}
          price={arr.price}
          thumbnail={arr.image}
           key={arr._id}
        /> 
    </div>
)
}

Filling.propTypes = {
    arr: ingredientPropType.isRequired
}

export default Filling;