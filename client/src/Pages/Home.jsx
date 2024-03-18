import React from "react";
import { useNavigate } from "react-router-dom";
function Home(props) {
  let navigate = useNavigate();
  return (
    <div>
      This is Home
      <button onClick={() => navigate("/query")}>Query</button>
      <button onClick={() => navigate("/repair")}>Repair</button>
    </div>
  );
}

export default Home;
