import logo from "./logo.svg";
import "./App.css";
import NavBar from "./COMPONENTS/NavBar";
import Menu from "./COMPONENTS/Menu";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";
import Variety from "./COMPONENTS/Variety";
import SignUp from "./COMPONENTS/SignUp";
import VarietyList from "./COMPONENTS/VarietyList";
import Cart from "./COMPONENTS/Cart";
// import FrontPage from './COMPONENTS/FrontPage';
import SamplePage from "./COMPONENTS/SamplePage";
import GridExamples from "./ExtraComponents/GridExamples";
import AddressPage from "./COMPONENTS/AddressPage";
import AboutUs from "./COMPONENTS/AboutUs";
import Order from "./COMPONENTS/Order";
import PreviousOrders from "./COMPONENTS/PreviousOrders";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/varietyList" element={<VarietyList />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/address" element={<AddressPage />} />
          {/* <Route path='/frontPage' element={<FrontPage/>}/> */}
          <Route path="/samplePage" element={<SamplePage />} />
          {/* <Route path='/grid' element={<GridExamples/>}/> */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/order" element={<Order />} />
          <Route path="/previousOrders" element={<PreviousOrders />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
