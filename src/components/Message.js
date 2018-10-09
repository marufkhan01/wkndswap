import React from 'react';
import moment from 'moment';
import  './Message.css';


export default function Message(props){

    const {text,userName, time}= props.value;

    const formattedTime=moment(time).fromNow();
    const userText = userName.charAt(0);

    return(
        <li className="message">
            <div className="message-view">{userText}</div>
            <div className="message-content">
                <div className="message-info">
                    <span className="message-user">{userName}</span>
                    <span className="message-time">{formattedTime}</span>
                </div>
                <p className="message-text">{text}</p>
            </div>
        </li>
    )
    
}