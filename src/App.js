import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Button } from "react-bootstrap";
import NavBar from "./components/NavBar";
import HomePage from "./webpage/HomePage";
import CreateSale from "./webpage/sales/CreateSale"
import CreateAccount from "./webpage/auth/CreateAccount";
import "./api/axiosDefault";
import SignIn from "./webpage/auth/SignIn";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="createaccount" element={<CreateAccount />} />
        <Route exact path="createsale" element={<CreateSale />} />
        <Route exact path="login" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
