import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { BASE_URL } from "../constants";
import axios from "axios";

const Chat = () => {
    const { targetUserId } = useParams();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    const socketRef = useRef(null); //holds the socket instance

    const user = useSelector((store) => store.user);
    const userId = user?._id;

    const navigate = useNavigate();

    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);


    const getIndianTime = (mongooseDate) => {

        const utcDate = new Date(mongooseDate);
        // Convert UTC date to IST (Indian Standard Time)
        const indianTime = utcDate.toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
            hour12: false, // Use 24-hour format
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

        return indianTime;
    }

    const fetchChatMessages = async () => {
        try {
            const chat = await axios.get(BASE_URL + "/chat/" + targetUserId, {
                withCredentials: true,
            });

            const chatMessages = chat?.data?.messages.map((msg) => {
                const indianTime = getIndianTime(msg?.createdAt);
                return {
                    firstName: msg?.senderId?.firstName,
                    lastName: msg?.senderId?.lastName,
                    photoUrl: msg?.senderId?.photoUrl,
                    time: indianTime,
                    text: msg?.text,
                };
            });
            setMessages(chatMessages);
        } catch (err) {
            navigate("/user/connections");
        }

    }

    useEffect(() => {
        fetchChatMessages();
    }, []);


    useEffect(() => {
        if (!userId) return

        const socket = createSocketConnection();
        socketRef.current = socket; // save to ref

        socket.emit("joinChat", { userId, targetUserId });

        socket.on("receiveMessage", ({ firstName, lastName, photoUrl, text }) => {

            const now = new Date();
            const time = now.toLocaleString("en-IN", {
                timeZone: "Asia/Kolkata",
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            });
            setMessages((messages) => [...messages, { firstName, lastName, photoUrl, text, time }]);
        });

        return () => {
            socket.disconnect();
        }
    }, [userId, targetUserId]);

    const sendMessage = () => {
        if (!newMessage.trim()) return;

        socketRef.current?.emit("sendMessage", {
            text: newMessage,
            userId,
            targetUserId,
            firstName: user.firstName,
            lastName: user.lastName,
            photoUrl: user.photoUrl,
        });
        setNewMessage("");
    };


    return (
        <div className="border border-gray-700 w-full md:w-3xl h-[80vh] md:h-[70vh]  flex flex-col rounded">
            <header className="border-b border-b-gray-700 h-14 flex items-center justify-center text-xl font-bold">Charging Station</header>
            <main className="flex-1 p-2 overflow-y-scroll">
                {
                    messages.map((msg, index) => {
                        return (

                            <div key={index} className={
                                "chat mb-4 " +
                                (user?.firstName === msg.firstName ? "chat-end" : "chat-start")
                            }>
                                <div className="chat-image ">
                                    <div className="w-8 h-8 rounded-full">
                                        <img
                                            alt="Tailwind CSS chat bubble component"
                                            src={msg.photoUrl}
                                            className="w-full h-full rounded-full"
                                        />
                                    </div>
                                </div>
                                <div className="chat-header">
                                    {`${msg.firstName} ${msg.lastName}`}
                                    <time className="text-xs opacity-50">{msg.time}</time>
                                </div>
                                <div className="bg-base-300 py-2 px-4 rounded max-w-[75%] w-full">{msg.text}</div>
                            </div>


                        );
                    })
                }
                <div ref={messagesEndRef} />

            </main >
            <footer className="h-14 flex items-center gap-2 p-2">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="p-2 px-6 h-12 flex-1 outline-0 rounded-xl border border-gray-700 w-full"
                    placeholder="Fuel your DevCharge, start typing…....." />
                <button className="btn px-6 bg-gradient-to-r from-[#905ef2] via-[#3e68f2] to-[#03d9ff] rounded-xl h-12"
                    onClick={sendMessage}>Send</button>
            </footer>

        </div >
    );
}

export default Chat;