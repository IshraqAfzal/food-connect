import React from "react"
import "../admin.css"

function Chatbot(){
    return(
    <div id="chat-box">
        <div id="ans-box">

        </div>
        <input id="type-box" type="text-box" placeholder="write your question here?" className="type-box"/>
    </div>
    )
}

export default Chatbot;