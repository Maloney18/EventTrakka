import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About/About";
import View from "./pages/View";
import Event from "./pages/Event";
import SignUpPage from "./pages/Register";
import Communities from "./pages/Communities";
import Gdsceksu from "./pages/Communities/Gdsceksu";

export default function App() {
  return (
    <div className="font-pop">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/view" element={<View />} />
        <Route path="/events" element={<Event />} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/communities/gdsceksu" element={<Gdsceksu />} />
      </Routes>
    </div>
  );
}
