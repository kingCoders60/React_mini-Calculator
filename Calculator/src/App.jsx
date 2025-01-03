import styles from "./App.module.css";
import { Display } from "./Components/Display";
import ButtonsContainer from "./Components/ButtonsContainer";
import styles1 from "./Components/center.module.css";
function App() {
  return (
    <div className={styles1.center}>
      <div className={styles.calculator}>
        <Display />
        <ButtonsContainer />
      </div>
    </div>
  );
}

export default App;
