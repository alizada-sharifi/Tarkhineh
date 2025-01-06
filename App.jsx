import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Franchise from "./pages/Franchise";
import AboutUs from "./pages/AboutUs.JSX";
import Contact from "./pages/Contact";
import Branch from "./pages/Branch";
import FAQ from "./pages/FAQ";
import Rules from "./pages/Rules";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Branch />} path="/branch" />
          <Route element={<Menu />} path="/menu" />
          <Route element={<Franchise />} path="/franchise" />
          <Route element={<AboutUs />} path="/about-us" />
          <Route element={<Contact />} path="/contact-us" />
          <Route element={<FAQ />} path="/faq" />
          <Route element={<Rules />} path="/rules" />
          <Route element={<Privacy />} path="/privacy" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
