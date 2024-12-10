import React,{useEffect, useState} from 'react'
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBox from './InfoBox.jsx';
import InputBox from './InputBox.jsx';

let socket;

const ChatBox = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState([]);
  const [messages, setMessages] = useState([]);

  const ENDPOINT = 'http://localhost:3000';
   
  

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);
    const socket = io(ENDPOINT);
    setName(name);
    setRoom(room);

    socket.emit("join", {name,room}); 
    console.log(name, room);

    return () => {
      socket.disconnect()
      socket.off();
    }
  }, [ENDPOINT, window.location.search]);

  useEffect(()=> {
    const socket = io(ENDPOINT);
    socket.on("message",(message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    })
  },[messages])

  const sendMessage = (e) => {
    e.preventDefault();
    if(message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  }


  return (
    <div>
       <InfoBox room={room} />
       <InputBox message={message} setMessage={setMessage} sendMessage={sendMessage}/>
    </div>
         

  )
}

export default ChatBox;