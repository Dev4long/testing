import React from 'react';
import "./Sidebar.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner, faGripVertical, faUser, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faRocketchat} from "@fortawesome/free-brands-svg-icons";
import SidebarChat from "./SidebarChat"

function Sidebar() {




  return (
    <div className = "sidebar">
         <div className ="sidebar_header">
          <FontAwesomeIcon className="avatar" icon={faUser}></FontAwesomeIcon> 
            <div className ="sidebar_headerRight">
             <button className= "spinnerBtn">  <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon> </button>
             <button className= "chatBtn"> <FontAwesomeIcon icon={faRocketchat} /> </button>
             <button className= "verticalBtn"> <FontAwesomeIcon icon={faGripVertical} /> </button>
            </div>
          </div>

          <div className= "sidebar_search">
            <div className= "searchContanier">
            <FontAwesomeIcon className= "searchBar" icon={faMagnifyingGlass} />
            <input style={{outlineWidth: "0", border: "none"}} className="searchBar"placeholder= "Search or start new chat" type= "text"/>
            </div>
          </div>

              <div className= "chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
              </div>  
     </div>
  )
}
 export default Sidebar 