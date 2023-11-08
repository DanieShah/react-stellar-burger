import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { 
    Counter,
    CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientPropType } from "../../utils/prop-types";
import style from "./ingridient.module.css";
import Modal from "../modal/modal";
import ModalOverlay from "../modaloverlay/modaloverlay";
import IngredientDetails from "../ingredient-details/ingredient-details";

function Ingridient({ arr, count }) {
    const [shouldShowModal, setShouldShowModal] = useState(false);

    const openModal = () => {
        setShouldShowModal(prevValue => !prevValue);
    }
    

    return(
        <>
           {shouldShowModal && <Modal buttonFunc={openModal} content={<IngredientDetails arr={arr} />} />}
           <li className={style.box} onClick={openModal}>
               {count && <Counter count={1} size="default" extraClass="m-1" />}
               <img className="mt-1 ml-4 mr-4 mb-1" src={arr.image} alt={arr.name} />
               <div className={`${style.count} mb-1`}>
                  <p className={`${style.text} text text_type_digits-default`}>{arr.price}</p>
                  <CurrencyIcon type="primary" />
               </div>
               <p className="text text_type_main-default">{arr.name}</p>
        </li>
        </>
    )
}

Ingridient.propTypes = {
    arr: ingredientPropType.isRequired,
    count: PropTypes.number
};

export default Ingridient;