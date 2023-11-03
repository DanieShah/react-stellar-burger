import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from './app-header.module.css';
import { BurgerIcon, 
    ListIcon, 
    ProfileIcon, } from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
    return (
        <header className={`${headerStyles.header} m-4`}>
            <div className={headerStyles.button_container}>
                 <button className={`${headerStyles.button} mr-2 p-5`} disabled={true} >
                     <BurgerIcon type="primary" />
                      <p className="text text_type_main-default ml-2">
                      Конструктор
                     </p>
                 </button>
                 <button className={`${headerStyles.button} p-5`}>
                     <ListIcon type="secondary" />
                     <p className="text text_type_main-default text_color_inactive ml-2">
                      Лента заказов
                      </p>
                 </button>
             </div>
            <Logo />
            <button className={headerStyles.button}>
                 <ProfileIcon type="secondary" />
                 <p className="text text_type_main-default text_color_inactive ml-2">
                  Личный кабинет
                 </p>
             </button>
        </header>
    );
};

export default AppHeader;