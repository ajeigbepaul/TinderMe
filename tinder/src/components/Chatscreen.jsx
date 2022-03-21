import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./Chatscreen.css";

function Chatscreen() {
  //when you are loading images on a params add a "/" change the route
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([
    { name: "Ada", profilepics: "/harjoke.jpg", message: "Yoo" },
    { name: "Sam", profilepics: "/richard.jpg", message: "Hello there friend" },
    { message: "how una dey" },
  ]);
  const sendMessage = (e) => {
    e.preventDefault();
    setMessage([...message, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatscreen">
      <p>YOU JUST MATCH PAUL ON 01/02/20</p>
      {message.map((messages) =>
        messages.name ? (
          <div className="chatscreen__message">
            <Avatar alt={messages.name} src={messages.profilepics} />
            <p>{messages.message}</p>
          </div>
        ) : (
          <div className="chatscreen__message">
            {/* <Avatar alt={messages.name} src={messages.profilepics} /> */}
            <p className="chatscreen__user">{messages.message}</p>
          </div>
        )
      )}
      <div className="chatscreen__form">
        <form>
          <div className="chatscreen__input">
            <input
              type="text"
              placeholder="Send a message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={sendMessage}>
              send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chatscreen;
