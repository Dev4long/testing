import React, {useState}from 'react'
import "./Chat.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperclip, faGripVertical, faUser, faMagnifyingGlass, faFaceGrin, faMicrophone} from "@fortawesome/free-solid-svg-icons";
import axios from "./axios"

function Chat({messages}) {
  
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post('/messages/new', {
    "message": input,
    "name": "d5",
    "timestamp": "just now",
    "received": false
    });

    setInput("")
  }


  return (
    <div className ="chat">
      <div className="chat_header">
        <FontAwesomeIcon className="chatAvatar" icon={faUser}></FontAwesomeIcon> 
      
        <div className= "chat_headerInfo">
          <h3 className= "chatHeader">Room Name</h3>
          <p className = "chatP">last seen at ...</p>
        </div> 

        <div className= "chat_HeaderRight">
          <button className= "spinnerBtn"> <FontAwesomeIcon icon={faPaperclip}></FontAwesomeIcon> </button>
          <button className= "chatBtn"> <FontAwesomeIcon icon={faMagnifyingGlass} /> </button>
          <button className= "verticalBtn"> <FontAwesomeIcon icon={faGripVertical} /> </button></div>    
        </div>

        <div className="chat_body">
          {messages.map((message) => (
            <p className= {`chat_message ${message.received && "chat_receiver"}`}>
            <span className="chat_name">{message.name}</span>
            {message.message}
            <span className ="chat_timestamp"> {message.timestamp}</span>
          </p>
          ))}
        </div>

        <div className= "chat_footer">
           <FontAwesomeIcon className= "chatIcons" icon={faFaceGrin} />
           <form>
             <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />
             <button onClick={sendMessage} type="submit">Send Message</button>
           </form>
           <FontAwesomeIcon className= "chatIcons" icon={faMicrophone} />
        </div>

    </div>
  )
}

export default Chat;