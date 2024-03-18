import React, { useState } from "react";

function InputForm() {
  const [userInput, setUserInput] = useState("");

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement logic to send the user input to Gemini API (covered later)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="prompt">Prompt:</label>
      <textarea id="prompt" value={userInput} onChange={handleChange} />
      <button type="submit">Ask Gemini</button>
    </form>
  );
}

export default InputForm;
