import React from "react";
import img from "../../image/done.svg";
import styles from "./ingredient-details.module.css";
import { ingredientPropType } from "../../utils/prop-types";
import PropTypes from "prop-types";

const IngredientDetails = ({arr}) => {
    const image = arr.image;
    
    return (
        <>
           <p style={{alignSelf: 'start'}} className="text text_type_main-large mt-10 ml-10">
              Детали ингредиента
           </p>
           <img src={arr.image_large} alt={arr.name} className="mb-4" />
           <p className="text text_type_main-medium mb-8">
              {arr.name}
           </p>
           <div className={`${styles.characteristics} mb-15`}>
               <p className="text text_type_main-default text_color_inactive">
                  Калории,ккал
               </p>
               <p className="text text_type_main-default text_color_inactive">
                  Белки, г
               </p>
               <p className="text text_type_main-default text_color_inactive">
                  Жиры, г
               </p>
               <p className="text text_type_main-default text_color_inactive">
                  Углеводы, г
               </p>
               <p className="text text_type_digits-default text_color_inactive">
                  {arr.calories}
               </p>
               <p className="text text_type_digits-default text_color_inactive">
                  {arr.proteins}
               </p>
               <p className="text text_type_digits-default text_color_inactive">
                  {arr.fat}
               </p>
               <p className="text text_type_digits-default text_color_inactive">
                  {arr.carbohydrates}
               </p>
           </div>
        </>
    )
}

IngredientDetails.protoTypes = {
    arr: ingredientPropType.isRequired,
}

export default IngredientDetails;