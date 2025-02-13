import "./App.css";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Detials from "./pages/Detials";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/">
            <Route element={<Settings />} path="/Settings" index />
            <Route element={<Profile />} path="/Profile" />
            <Route element={<Detials />} path="/Details" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
