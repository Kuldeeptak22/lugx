import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AppBar from "./Components/AppBar/AppBar";
import OurShop from "./Components/AppBar/Our Shop/OurShop";
import Home from "./Components/AppBar/Home/Home";
import ProductDetails from "./Components/AppBar/Product Details/ProductDetails";
import Contact from "./Components/AppBar/Contacts/Contact";
import SignIn from "./Components/AppBar/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar />
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourShop" element={<OurShop />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
