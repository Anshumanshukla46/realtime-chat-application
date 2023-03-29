import React, { useEffect, useState, useRef } from 'react'
import socketIOClient from "socket.io-client";
import ChatBoxReciever, { ChatBoxSender } from './ChatBox';
import InputText from './InputText';
import UserLogin from './UserLogin';

import "./ChatContainerStyle.css";


export default function ChatContainer() {

    let socketio = socketIOClient("http://localhost:5001")

    const [chats, setChats] = useState([])
    const [user, setUser] = useState(localStorage.getItem("user"))
    const avatar = localStorage.getItem('avatar')


    // update when new event occur
    useEffect(() => {
        socketio.on('chat', senderChats => {
            setChats(senderChats)
        })
    })



    function sendChatToSocket(chat) {
        socketio.emit("chat", chat)
    }


    function addMessage(chat) {
        const newChat = { ...chat, user: localStorage.getItem("user"), avatar }


        setChats([...chats, newChat])
        sendChatToSocket([...chats, newChat])
    }


    function logout() {
        localStorage.removeItem("user")
        localStorage.removeItem("avatar")
        setUser("")
    }


    function ChatsList() {
        return (
            <div className='chats_style'>
                {
                    chats.map((chat, index) => {
                        if (chat.user === user)

                            return (<ChatBoxSender
                                key={index} message={chat.message}
                                avatar={chat.avatar}
                                user={chat.user} />)

                        return (<ChatBoxReciever
                            key={index}
                            message={chat.message}
                            avatar={chat.avatar} user={chat.user} />)
                    })
                }

            </div>)

    }


    return (
        <div>
            {
                user ?
                    (<div>
                        <div
                            className='user_div'
                            style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>

                            <h4 className='user_name'>Me: {user}</h4>


                            <p
                                className='logout_button'
                                onClick={() => logout()}
                            >
                                Log Out
                            </p>

                        </div>

                        <ChatsList />

                        <InputText addMessage={addMessage} />
                    </div>)

                    : (<UserLogin setUser={setUser} />)
            }



        </div>
    )
}