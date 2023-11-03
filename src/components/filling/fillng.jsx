import React from "react";
import { ConstructorElement,
    DragIcon, 
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./fillng.module.css"


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

export default Filling;