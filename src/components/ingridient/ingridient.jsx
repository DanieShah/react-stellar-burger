import React from "react";
import { 
    Counter,
    CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientPropType } from "../../utils/prop-types";
import style from "./ingridient.module.css";

function Ingridient({ name, price, image, count }) {
    return(
        <li className={style.box}>
            {count && <Counter count={1} size="default" extraClass="m-1" />}
            <img className="mt-1 ml-4 mr-4 mb-1" src={image} alt={name} />
            <div className={`${style.count} mb-1`}>
               <p className={`${style.text} text text_type_digits-default`}>{price}</p>
               <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">{name}</p>
        </li>
    )
}

export default Ingridient;