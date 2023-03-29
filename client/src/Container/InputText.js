import React, { useState } from 'react'
import "./InputTextStyle.css"

const styles = {

    textContainer: {
        display: "flex",
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
}

export default function InputText({ addMessage }) {

    const [message, setMessage] = useState('')

    function addAMessage() {
        addMessage({
            message
        })
        setMessage('')
    }

    return (
        <div style={styles.textContainer} >
            <textarea
                className='textarea_message'
                style={styles.textarea}
                rows={2}
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />

            <button
                className='send_btn'
                onClick={() => addAMessage()}
                style={styles.button}>
                SEND
            </button>

        </div>
    )
}