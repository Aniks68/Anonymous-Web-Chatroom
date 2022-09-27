import React, { useState, useEffect, useRef } from "react";
import { db } from "../firebase";
import SendMessage from "./SendMessage";
import { useParams } from "react-router-dom";

const Chat = () => {
	const { user } = useParams();
	const currUser = user;
	const [messages, setMessages] = useState([]);
    const scroll = useRef();

	useEffect(() => {
		db.collection("messages")
			.orderBy("createdAt")
			.limit(50)
			.onSnapshot((snapshot) => {
				setMessages(snapshot.docs.map((doc) => doc.data()));
			});
	}, []);

    const formatDateTime = (date) => {
        const d = date.toDate();
        // console.log(typeof d);
        const day = d.getDate();
        const month = d.getMonth() + 1;
        const year = d.getFullYear();
        let hour = d.getHours();

        hour = hour < 10 ? '0' + hour : hour;
        let minute = d.getMinutes();
        minute = minute < 10 ? '0' + minute : minute;
        // let second = d.getSeconds();
        // second = second < 10 ? '0' + second : second;
        let time = (hour > 12) ? (hour-12 + ':' + minute + ':PM') : (hour + ':' + minute +':AM');

        return `${day}/${month}/${year} ${time}`;
    }

	return (
		<>
            <div className="chat">
                <h1>Chat</h1>
                </div>
			<div className="msgs">
				{messages.map(({ id, text, user, createdAt }) => (
					<div>
						<div
							key={id}
							className={`msg ${user === currUser ? "sent" : "received"}`}
						>
							<h3 className="user">{user}</h3>
							<p>{text}</p>
                            <h3 className="time">{formatDateTime(createdAt)}</h3>
						</div>
					</div>
				))}
			</div>
			<SendMessage scroll={scroll} />
            <div ref={scroll}></div>
		</>
	);
};

export default Chat;
