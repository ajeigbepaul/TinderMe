import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Paul Lee"
        message="Hi, can we connect?"
        timestamp=" 35 minutes ago "
        profileimage="paul.jpg"
      />
      <Chat
        name="John Mark"
        message="I am not around oh!"
        timestamp=" 1hr ago "
        profileimage="kemi.jpg"
      />
      <Chat
        name="OluwaTobi"
        message=" Come and give me life"
        timestamp=" 2hr ago "
        profileimage="iyanu.jpg"
      />
      <Chat
        name="Seun Tobi"
        message=" How can we connect? "
        timestamp=" 2hr:30 minutes ago "
        profileimage="richard.jpg"
      />
    </div>
  );
}

export default Chats;
