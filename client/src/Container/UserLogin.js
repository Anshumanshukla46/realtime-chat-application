import React, { useState } from 'react'
import { CommentOutlined } from '@ant-design/icons'
import _ from 'lodash';

import "./UserLoginStyle.css"



export default function UserLogin({ setUser }) {

    const [user, setAUser] = useState("")

    function handleSetUser() {
        if (!user) return
        localStorage.setItem("user", user)
        setUser(user)
        localStorage.setItem("avatar", `https://picsum.photos/id/${_.random(1, 1000)}/200/300`)

    }

    return (
        <div className='main_page'>

            <h1 className="h1_style">
                <CommentOutlined />
                Chat Application
            </h1>


            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <input
                    className='name_input'
                    value={user}
                    onChange={e => setAUser(e.target.value)}
                    placeholder="Write Name"
                />

                <button
                    onClick={() => handleSetUser()}
                    className="login_btn">
                    Login
                </button>

            </div>

        </div>
    )
}