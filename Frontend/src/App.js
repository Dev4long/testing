import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat"
import React, {useEffect, useState} from "react"
import Pusher from 'pusher-js'
import axios from "./axios"

function App() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('/messages/sync')
    .then(response => {
      setMessages(response.data);

    })
  }, [])

  console.log(messages)

  useEffect(() => {
    const pusher = new Pusher('c008b700a45c59b2120f', {
      cluster: 'us2'
    });
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMSG) => {
      setMessages([...messages, newMSG])
    });

   return () => {
     channel.unbind_all();
     channel.unsubscribe()
   }

  }, [messages])


  return (
    <div className="app">
       <div className= "app_body">
        <Sidebar />
        <Chat messages={messages} />
       </div>
    </div>
  );
}

export default App;
