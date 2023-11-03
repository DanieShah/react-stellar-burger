import React from "react";
import { CurrencyIcon,
    Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./payment.module.css"

const Payment = () => {
    return(
        <div className={styles.box}>
            <div className={styles.price}>
                <p className="text text_type_digits-medium mr-2">610</p>
                <CurrencyIcon type="primary" />
            </div>
            <Button extraClass="ml-10" htmlType="button" type="primary" size="large">
               Оформить заказ
            </Button>
        </div>
    )
}

export default Payment