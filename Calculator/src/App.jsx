import styles from "./App.module.css";
import { Display } from "./Components/Display";
import ButtonsContainer from "./Components/ButtonsContainer";
import styles1 from "./Components/center.module.css";
import { useState } from "react";
function App() {
  let [calVal, setCalVal] = useState(0);
  const onButtonClick = (event) => {
    console.log(event);
  };
  return (
    // <div className={styles1.center}>
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
    // </div>
  );
}

export default App;
