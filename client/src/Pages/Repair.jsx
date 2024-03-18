import React, { useState } from "react";
import Result from "./Result";
const { GoogleGenerativeAI } = require("@google/generative-ai");
// import * as fs from "fs";
function Repair(props) {
  const [ans, setAns] = useState(null);
  const [device, setDevice] = useState(null);
  const [image, setImage] = useState(null);
  const [history, setHistory] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const genAI = new GoogleGenerativeAI(
      "AIzaSyArppRMJTf5_pXxPofxB9hjqpQjbvVTqgk",
    );
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `You are a bot at a repair shop. The user is trying to make a repair for his device. The issue the user has said thier device is ${device}. Your purpose is to say that you are sorry for the customer and analyze the attached image url ${image} and tell them what is the damage`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    console.log(response.text());
    setAns(response.text());

    setShowResult(true);
  };

  // const handleSubmit = async () => {
  //   try {
  //     const options = {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ history: history, device: device }),
  //     };
  //     const response = await fetch("http://localhost:8000/repair", options);
  //     const data = await response.text();
  //     console.log(data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    <>
      <div className="navbar">
        <h1>topClass</h1>
      </div>
      <div className="container">
        <div className="left-half"></div>
        <div className={"right-half"}>
          <div className="content">
            <h1>Let's get started</h1>
            <form onSubmit={handleSubmit}>
              <input
                id="userIssue"
                placeholder="userIssue"
                name="userIssue"
                className="input"
                onChange={(e) => setDevice(e.target.value)}
              />
              <input // New input field for the image
                id="userImage"
                name="userImage"
                className="input"
                onChange={(e) => setImage(e.target.value)}
              />
              <button type="submit">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      {showResult && <Result ans={ans} />}
    </>
  );
}

export default Repair;
