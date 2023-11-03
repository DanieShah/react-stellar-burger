import styles from "./app.module.css";
import { data } from "../../utils/data";
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function App() {  
  return (
    <div className={styles.app}>
      <AppHeader />
      <div className={styles.box}>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </div>
  );
}

export default App;
