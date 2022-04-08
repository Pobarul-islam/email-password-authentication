import { getAuth } from "firebase/auth";
import "./App.css";
import app from "./firebase.init";
import "bootstrap/dist/css/bootstrap.min.css";

const auth = getAuth(app);

function App() {
  const handleEmailBlur = event => {
    console.log(event.target.value);
  }
  
  const handlePasswordBlur = event => {
    console.log(event.target.value)
  }

  const handleFormSubmit = event => {
    console.log('form submited')
    event.preventDefault();
  }
  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <input onBlur={handleEmailBlur} type="email" name="" id="" /> <br />
        <input onBlur={handlePasswordBlur} type="password" name="" id="" /> <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
