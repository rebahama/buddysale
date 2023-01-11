import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Button } from "react-bootstrap";
import NavBar from "./components/NavBar";
import HomePage from "./webpage/HomePage";
import CreateAccount from "./webpage/auth/CreateAccount"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="createaccount" element={<CreateAccount/>}/>
      </Routes>
    </div>
  );
}

export default App;
