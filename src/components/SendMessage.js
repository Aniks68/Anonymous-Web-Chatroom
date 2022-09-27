import React, { useState } from 'react';
import { db } from '../firebase';
import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';

const SendMessage = () => {
    const [message, setMessage] = useState('');
    const { user } = useParams();
    const sendMessage = async (e) => {
        e.preventDefault();
        await db.collection('messages').add({
            text: message,
            createdAt: new Date(),
            user: user,
        });
        setMessage('');
    };
  return (
    <>
    <form>
        <Input value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message...'/>
        <Button type='submit' onClick={sendMessage}> Send </Button>
    </form>
    </>
    )
}

export default SendMessage;