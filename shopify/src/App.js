import Home from "./pages/Home/Home";
import ProductCart from "./pages/ProductCart/ProductCart";
import ProductCheckout from "./pages/ProductCheckout/ProductCheckout";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Signin from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={ <Signin />} />
      <Route exact path="/" element={ <Home />} />
      <Route path="/product-detail" element={ <ProductDetails />} />
      <Route path="/product-cart" element={<ProductCart/>} />
      <Route path="/product-checkout" element={<ProductCheckout/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
