import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Complaint from "./Pages/Complaint";
import Home from "./Pages/Home";
import Repair from "./Pages/Repair";
import Query from "./Pages/Query";
import TempChat from "./TempChat";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/query" element={<Query />} />*/}
        {/*<Route path="/complaint" element={<Complaint />} />*/}
        <Route path="/query" element={<TempChat />} />
        <Route path="/repair" element={<Repair />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
