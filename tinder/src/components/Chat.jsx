import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Chat.css";

function Chat({ name, message, timestamp, profileimage }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar src={profileimage} />
        <div className="chat__details">
          <h4>{name}</h4>
          <p>{message}</p>
        </div>
        <p className="chat__timestamp">{timestamp}</p>
      </div>
    </Link>
  );
}

export default Chat;
