import { useRef, useState } from 'react'

import dummyData from './dummyData';

import "./App.css";

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

  const [messages, setMessages] = useState(dummyData)
  const [recMsgs, setRecMsgs] = useState([])
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault()

    const newMsg = {
      content: formValue,
      user: {
        "name": "John Doe",
        "id": 1
      },
      createdAt: new Date()
    }

    setFormValue('')
    setMessages([...messages, newMsg]);
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button className="btn" type="submit" disabled={!formValue}>🕊️</button>

    </form>
  </>)
}

function ChatMessage(props) {
  const { content } = props.message;

  const messageClass = 'sent'

  return (<>
    <div className={`message ${messageClass}`}>
      {/* <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} /> */}
      <p>{content}</p>
    </div>
  </>)
}

export default TempChat;