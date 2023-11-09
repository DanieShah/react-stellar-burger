import React from "react";
import { createPortal } from "react-dom";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import ModalOverlay from "../modaloverlay/modaloverlay";

function App() {  
  const [urlApi, setUrlApi] = React.useState({
    data: null,
    success: null
  });

  const url = 'https://norma.nomoreparties.space/api/ingredients';

  const checkReponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  }; 

  React.useEffect(() => {
    const getApiUrl = async () => {
      setUrlApi({...urlApi});
      const res = fetch(url).then(checkReponse).then((el) => setUrlApi({...urlApi, data: el.data, success: true}));
    };

    getApiUrl();
  }, []);

  const {data, success} = urlApi;

  return (
    <div className={styles.app} id="box" >
      <AppHeader />
      {success && data && 
      <div className={styles.box}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </div>}
    </div>
  );
}

export default App;
