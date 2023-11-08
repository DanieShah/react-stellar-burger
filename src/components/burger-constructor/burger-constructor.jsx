import {React, useState, useEffect} from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerList from "../burger-list/burger-list";
import styles from "./burger-constructor.module.css";
import Payment from "../payment/payment";
import { ingredientPropType } from "../../utils/prop-types";
import PropTypes from "prop-types";

const BurgerConstructor = ({data}) => {
    const bun = data.find((el) => el.type === "bun");
    const fillingArr = data.filter((el) => el.type !== "bun");

    return ( 
        <div className={styles.design}>
            <div className={`${styles.box} mt-25 mb-10`}>
               <BurgerList bun={bun} filling={fillingArr} />
            </div>
            <Payment />
        </div>
        );
};

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(ingredientPropType).isRequired
}

export default BurgerConstructor;
