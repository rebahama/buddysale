import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Button } from "react-bootstrap";
import NavBar from "./components/NavBar";
import HomePage from "./webpage/HomePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
