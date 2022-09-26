import React, { useState, useEffect } from 'react'
import { db } from '../firebase';

const Chat = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            console.log(snapshot.docs);
            setMessages(snapshot.docs.map(doc => doc.data()))
            console.log(messages);
        })
    }, []);
  return (
    <>
        <div>Chat</div>
        {messages.map(({id, text, user, uid}) => (
            <div key={id}>
                <h2>{user}</h2>
                <p>{text}</p>
            </div>
        ))}
    </>
  )
}

export default Chat;