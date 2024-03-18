import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Home from "./Pages/Home";
// import Repair from "./Pages/Repair";
// import Query from "./Pages/Query";
import TempChat from "./tempChat";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/query" element={<TempChat />} />
        <Route path="/repair" element={<Repair />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;