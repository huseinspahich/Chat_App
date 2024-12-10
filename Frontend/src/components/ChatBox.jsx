import React,{useEffect, useState} from 'react'
import queryString from 'query-string';
import io from 'socket.io-client';

const ChatBox = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState('');

  const ENDPOINT = 'http://localhost:3000';

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);
    const socket = io(ENDPOINT);
    setName(name);
    setRoom(room);

    socket.emit("join", {name,room}); 
    console.log(name, room);

    return () => {
      socket.emit("disconnect");
      socket.off();
    }
  }, [ENDPOINT, window.location.search]);

  useEffect(()=> {
    socket.on("message",(message) => {
      setMessages([...messages, message]);
    })
  })


  return (
    <div>
      <h1>ChatBox</h1>
    </div>
  )
}

export default ChatBox;