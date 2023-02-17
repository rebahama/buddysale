import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./webpage/HomePage";
import CreateSale from "./webpage/sales/CreateSale"
import CreateAccount from "./webpage/auth/CreateAccount";
import "./api/axiosDefault";
import SignIn from "./webpage/auth/SignIn";
import SalePage from "./webpage/sales/SalePage";
import DetaliedSale from "./webpage/sales/DetaliedSale";
import Footer from "./components/Footer";
import Category from "./webpage/sales/Category";
import CategoryShow from "./webpage/sales/CategoryShow";
import MySales from "./webpage/sales/MySales";
import CityFilter from "./webpage/sales/CityFilter";
import FavoritesList from "./webpage/sales/FavoritesList";
import ByUser from "./webpage/sales/ByUser";
import EditSale from "./webpage/sales/EditSale";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="AppContainer">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/createaccount" element={<CreateAccount />} />
        <Route exact path="/createsale" element={<CreateSale />} />
        <Route exact path="/sales/:id/edit" element={<EditSale />} />
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/sales" element={<SalePage />} />
        <Route exact path="/sales/category" element={<Category />} />
        <Route exact path="/sales/:id" element={<DetaliedSale/>}/>
        <Route exact path="/sales/category/:id" element={<CategoryShow/>}/>
        <Route exact path="/mysales" element={<MySales />} />
        <Route exact path="/sales/citys" element={<CityFilter />} />
        <Route exact path="/favorites" element={<FavoritesList />} />
        <Route exact path="/sales/:id/byuser" element={<ByUser />} />
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
