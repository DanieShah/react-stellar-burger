import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-list.module.css";
import Filling from "../filling/fillng";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types";


const BurgerList = ({bun, filling}) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text= {bun.name + " " + "(верх)"}
          price={bun.price}
          thumbnail={bun.image}
          extraClass="ml-8"
        />
        <div className={`${styles.list} custom-scroll`}>
           {filling.map((arr) => {
               return(
                  <Filling arr={arr} key={arr._id} />
                )
            })}
        </div>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={bun.name + " " + "(низ)"}
          price={bun.price}
          thumbnail={bun.image}
          extraClass="ml-8"
        />
      </div>
    )
  }

  BurgerList.propTypes = {
    bun: ingredientPropType,
    filling: PropTypes.arrayOf(ingredientPropType)
  }

  export default BurgerList;