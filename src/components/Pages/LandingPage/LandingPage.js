import React, { useState, useEffect, useRef } from "react";

const LandingPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(
      "wss://dfg-server-lgje1kl14-mark-lendackys-projects.vercel.app/"
    );

    ws.current.onopen = () => {
      console.log("Connected to the WebSocket server");
    };

    ws.current.onmessage = (event) => {
      const message = event.data;
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    ws.current.onclose = () => {
      console.log("Disconnected from the WebSocket server");
    };

    return () => {
      ws.current.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(input);
      setInput("");
    }
  };
  useEffect(() => {
    setInput("testing");
  }, []);

  return (
    <div className="landing-page">
      <h1>Landing Page</h1>
      <p>{messages}</p>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default LandingPage;
