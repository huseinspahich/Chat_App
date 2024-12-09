import React,{useEffect, useState} from 'react'
import queryString from 'query-string';
import io from 'socket.io-client';

const ChatBox = () => {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  const ENDPOINT = 'http://localhost:3000';

  useEffect(() => {
    const { username, room } = queryString.parse(window.location.search);

    const socket = io(ENDPOINT);

    setUsername(username);
    setRoom(room);

    socket.emit("join", {username,room});

    console.log(username, room);

    return () => {
      socket.emit("disconnect");
      socket.off();
    }
  }, [ENDPOINT, window.location.search]);



  return (
    <div>
      <h1>ChatBox</h1>
    </div>
  )
}

export default ChatBox;