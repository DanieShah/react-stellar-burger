import React from "react";
import Tabs from "../tabs/tabs";
import style from "./burger-ingredients.module.css"
import { data } from "../../utils/data";
import Ingridient from "../ingridient/ingridient";

const bun = data.filter(el => el.type === "bun");
const main = data.filter(el => el.type === "main");
const sauce = data.filter(el => el.type === "sauce");

function BurgerIngredients() {
    return (
        <div className={style.container}>
            <p className="text text_type_main-large mt-10 mb-5">
               Соберите бургер
            </p>
            <Tabs />
            <div className={`${style.scroll} mt-10 custom-scroll`}>
               <p className="text text_type_main-medium">
                   Булки
               </p>
               <div className={`${style.boxes} pt-6 pr-4`}>
                {bun.map((elem) => {
                    return <Ingridient image={elem.image} name={elem.name} price={elem.price} key={elem._id} />
                   })
                }
               </div>
               <p className="text text_type_main-medium mt-10">
                   Соусы
               </p>
               <div className={`${style.boxes} pt-6 pr-4`}>
                {sauce.map((elem) => {
                    return <Ingridient image={elem.image} name={elem.name} price={elem.price} key={elem._id} />
                   })
                }
               </div>
               <p className="text text_type_main-medium mt-10">
                   Начинки
               </p>
               <div className={`${style.boxes} pt-6 pr-4`}>
                {main.map((elem) => {
                    return <Ingridient image={elem.image} name={elem.name} price={elem.price} key={elem._id} />
                   })
                }
               </div>
            </div>
        </div>
    );
};

export default BurgerIngredients;