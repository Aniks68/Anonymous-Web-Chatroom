import React, { useState } from 'react';
import { db } from '../firebase';
import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';

const SendMessage = ({ scroll }) => {
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
        scroll.current.scrollIntoView({ behavior: 'smooth' });
    };
  return (
    <>
    <form className="sendMsg">
        <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message...'/>
        <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}} type='submit' onClick={sendMessage}> Send </Button>
    </form>
    </>
    )
}

export default SendMessage;