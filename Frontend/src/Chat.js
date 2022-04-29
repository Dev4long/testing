import React from 'react'
import "./Chat.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperclip, faGripVertical, faUser, faMagnifyingGlass, faFaceGrin, faMicrophone} from "@fortawesome/free-solid-svg-icons";

function Chat() {
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
          <p className= "chat_message">
            <span className="chat_name">denis</span>
            Messages
            <span className ="chat_timestamp"> {new Date().toUTCString()}</span>
          </p>
          <p className= "chat_message chat_reciever">
            <span className="chat_name">denis</span>
            Messages
            <span className ="chat_timestamp"> {new Date().toUTCString()}</span>
          </p>
          <p className= "chat_message">
            <span className="chat_name">denis</span>
            Messages
            <span className ="chat_timestamp"> {new Date().toUTCString()}</span>
          </p>
        </div>

        <div className= "chat_footer">
           <FontAwesomeIcon className= "chatIcons" icon={faFaceGrin} />
           <form>
             <input  placeholder="Type a message" type="text" />
             <button type="submit">Send Message</button>
           </form>
           <FontAwesomeIcon className= "chatIcons" icon={faMicrophone} />
        </div>

    </div>
  )
}

export default Chat;