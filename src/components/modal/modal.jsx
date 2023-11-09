import {React, useState, useEffect} from "react";
import { createPortal } from "react-dom";
import styles from './modal.module.css';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modaloverlay/modaloverlay";
import PropType from "prop-types";

const Modal = ({content, buttonFunc}) => {
    const root = document.getElementById('box');

    const closeModalEsc = (evt) => {
        if (evt.key === "Escape") {
            buttonFunc();
        }
    }

    const closeModalMouse = (evt) => {
        const overlay = document.getElementById('overlay');
        if (evt.target === overlay) {
            buttonFunc();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', closeModalEsc);
        document.addEventListener('click', closeModalMouse);

        return () => {
            document.removeEventListener('keydown', closeModalEsc);
            document.removeEventListener('click', closeModalMouse);
        }
    }, []);

    return (
        createPortal(
            <>
            <div className={styles.box}>
                <button className={styles.close} onClick={buttonFunc}>
                   <CloseIcon type="primary" />
                </button>
                {content}
            </div>
            <ModalOverlay />
            </> 
        , root)
    )
}

Modal.propTypes = {
    content: PropType.node.isRequired,
    buttonFunc: PropType.func.isRequired
}

export default Modal;