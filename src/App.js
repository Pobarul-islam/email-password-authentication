import { getAuth } from "firebase/auth";
import "./App.css";
import app from "./firebase.init";
const auth = getAuth(app);

function App() {
  const handleEmailChange = event => {
    console.log(event.target.value);
  }
  return (
    <div className="App">
      <form>
        <input onChange={handleEmailChange} type="email" name="" id="" />
        <input type="password" name="" id="" />
      </form>
    </div>
  );
}

export default App;
