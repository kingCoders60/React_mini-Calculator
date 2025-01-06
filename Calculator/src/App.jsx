import styles from "./App.module.css";
import { Display } from "./Components/Display";
import ButtonsContainer from "./Components/ButtonsContainer";
import styles1 from "./Components/center.module.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState(0);
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles1.center}>
      <div className={styles.calculator}>
        <Display displayValue={calVal} />
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}

export default App;
