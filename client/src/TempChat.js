import { useRef, useState } from "react";

import dummyData from "./dummyData";

import "./App.css";
import { GoogleGenerativeAI } from "@google/generative-ai";

//components

function TempChat() {
  return (
    <div className="App">
      <section>
        <ChatRoom />
      </section>
    </div>
  );
}

function ChatRoom() {
  const dummy = useRef();

  // const [messages, setMessages] = useState(dummyData);
  const [messages, setMessages] = useState(dummyData);
  const [recMsgs, setRecMsgs] = useState([]);
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const genAI = new GoogleGenerativeAI(
      "AIzaSyArppRMJTf5_pXxPofxB9hjqpQjbvVTqgk",
    );
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    console.log("formvalie", formValue);
    const newMsg = {
      content: formValue,
      name: "User",
      timestamp: new Date(),
    };
    // let newArray = [];
    // newArray.push(newMsg);
    setMessages([...messages, newMsg]);
    console.log(newMsg);
    // var newMessageArr = messages.push(newMsg);
    // setMessages(newMessageArr);
    console.log("messages", messages);
    dummy.current.scrollIntoView({ behavior: "smooth" });
    setFormValue("");

    console.log("Now triggering API", messages);
    const prompt = `Previous Chats-${JSON.stringify(
      messages,
    )}, Here is the list of all previous interactions between you and user. Here is the user's latest response-${formValue} Now provide further assistance as electronics store assistant. Limit response to 3 sentences and pretend as if you are interacting with the user in a chatbot. If required use indian currency`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    console.log(response);
    const newResp = {
      content: response.text(),
      name: "Assistant",
      timestamp: new Date(),
    };
    setMessages([...messages, newResp]);

    dummy.current.scrollIntoView({ behavior: "smooth" });
    console.log(messages);
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button className="btn" type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { content, name } = props.message;

  // const messageClass = "sent";
  const messageClass = name == "Assistant" ? "received" : "sent";
  return (
    <>
      <div className={`message ${messageClass}`}>
        {/* <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} /> */}
        <p>{content}</p>
      </div>
    </>
  );
}

export default TempChat;
