import React from "react";
import styles from "./orderdetails.module.css";
import checkImage from "../../image/done.svg"

const OrderDetails = () => {
    return (
        <>
           <p style={{
            textShadow: "0px 4px 32px rgba(51, 51, 255, 0.50), 0px 0px 8px rgba(51, 51, 255, 0.25), 0px 0px 16px rgba(51, 51, 255, 0.25)"
           }} className="text text_type_digits-large mt-30">034536</p>
           <p className="text text_type_main-medium mt-8">
              идентификатор заказа
           </p>
           <img className="mt-15" src={checkImage} alt="Галочка" />
           <p className="text text_type_main-default mt-15">
              Ваш заказ начали готовить
           </p>
           <p className="text text_type_main-default text_color_inactive mt-2 mb-30">
              Дождитесь готовности на орбитальной станции
           </p>
        </>
    )
}

export default OrderDetails;