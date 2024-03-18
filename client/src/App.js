import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Repair from "./Pages/Repair";
import Query from "./Pages/Query";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/query" element={<Query />} />
        <Route path="/repair" element={<Repair />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
