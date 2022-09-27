import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import SendMessage from "./SendMessage";
import { useParams } from "react-router-dom";

const Chat = () => {
	const { user } = useParams();
	const currUser = user;
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		db.collection("messages")
			.orderBy("createdAt")
			.limit(50)
			.onSnapshot((snapshot) => {
				setMessages(snapshot.docs.map((doc) => doc.data()));
			});
	}, []);
	return (
		<>
            <div className="chat">
                <h1>Chat</h1>
                </div>
			<div className="msgs">
				{messages.map(({ id, text, user }) => (
					<div>
						<div
							key={id}
							className={`msg ${user === currUser ? "sent" : "received"}`}
						>
							<h3 className="user">{user}</h3>
							<p>{text}</p>
						</div>
					</div>
				))}
			</div>
			<SendMessage />
		</>
	);
};

export default Chat;
