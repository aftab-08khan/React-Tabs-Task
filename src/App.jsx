import "./App.css";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Detials from "./pages/Detials";
import Home from "./pages/Home";
import Card from "./pages/Card";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/">
            <Route element={<Settings />} path="/Settings" />
            <Route element={<Profile />} path="/Profile" index />
            <Route element={<Detials />} path="/Details" />
            <Route element={<Card />} path="/Card" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
