import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Cards from "./components/Cards";
import ItemDetails from "./components/ItemDetails";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Signup" element={<SignUp />}></Route>
            <Route path="/Card" element={<Cards />}></Route>
            <Route path="/items/:itemId" element={<ItemDetails />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
