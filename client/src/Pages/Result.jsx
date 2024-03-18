import React, { useEffect, useRef } from "react";
// import ColorList from "./ColorList";

function Result({ ans }) {
  const resultRef = useRef(null);

  useEffect(() => {
    if (resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [ans]);

  return (
    <div id="result" ref={resultRef}>
      {ans}
    </div>
  );
}

export default Result;
