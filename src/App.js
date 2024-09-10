import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Pages from "./pages/Pages";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage/>}></Route>
        <Route path="/pages" element={<Pages/>}></Route>
        <Route path="/contact" element={<Contacts/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
      </Routes>
    </div>
  );
}

export default App;