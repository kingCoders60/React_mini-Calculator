import styles from "./App.module.css";
import { Display } from "./Components/Display";
import ButtonsContainer from "./Components/ButtonsContainer";
import styles1 from "./Components/center.module.css";
import { useState } from "react";
function App() {
  let [calVal, setCalVal] = useState(0);
  return (
    <div className={styles1.center}>
      <div className={styles.calculator}>
        <Display displayValue={calVal} />
        <ButtonsContainer
          onButtonClick={() => {
            console.log("button clicked.");
          }}
        />
      </div>
    </div>
  );
}

export default App;
