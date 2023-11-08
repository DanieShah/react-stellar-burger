import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { CurrencyIcon,
    Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./payment.module.css";
import Modal from "../modal/modal";
import ModalOverlay from "../modaloverlay/modaloverlay";
import OrderDetails from "../orderdetails/orderdetails";

const Payment = () => {
    const [shouldShowModal, setShouldShowModal] = useState(false);

    const openModal = () => {
        setShouldShowModal(prevValue => !prevValue);
    }

    return(
        <div className={styles.box}>
            {shouldShowModal && <Modal content={<OrderDetails />} buttonFunc={openModal} />}
            <div className={styles.price}>
                <p className="text text_type_digits-medium mr-2">610</p>
                <CurrencyIcon type="primary" />
            </div>
            <Button extraClass="ml-10" htmlType="button" type="primary" size="large" onClick={openModal}>
               Оформить заказ
            </Button>
        </div>
    )
}

export default Payment