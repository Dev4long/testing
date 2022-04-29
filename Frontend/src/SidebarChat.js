import React from 'react'
import "./SidebarChat.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from "@fortawesome/free-solid-svg-icons";

function SidebarChat() {
  return (
    <div className="sidebarChat">
        <FontAwesomeIcon  className= "roomAvatar" icon={faUser}></FontAwesomeIcon>
        
        <div className= "sidebarChat_info">
            <h2 className= "roomName">Room Name</h2>
            <p>this is the last message</p>
        </div>
        
    </div>
  )
}

export default SidebarChat