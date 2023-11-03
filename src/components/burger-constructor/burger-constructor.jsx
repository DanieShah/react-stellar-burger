import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerList from "../burger-list/burger-list";
import styles from "./burger-constructor.module.css";
import Payment from "../payment/payment";
import { data } from "../../utils/data";

const bun = data.find((el) => el.type === "bun")
const fillingArr = data.filter((el) => el.type !== "bun");

const BurgerConstructor = () => {
    return ( 
        <div className={styles.design}>
            <div className={`${styles.box} mt-25 mb-10`}>
               <BurgerList bun={bun} filling={fillingArr} />
            </div>
            <Payment />
        </div>
        );
};

export default BurgerConstructor;
