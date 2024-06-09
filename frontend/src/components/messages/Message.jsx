import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';
import './Message.css'
const Message = ({message}) => {
  const {authUser}=useAuthContext();
  const {selectedConversation}=useConversation();

  const fromMe= message.senderId===authUser._id;

  const formattedTime=extractTime(message.createdAt);

  const chatClassName= fromMe?'chat-end':'chat-start';
  const chatColor = fromMe ? "bg-grey" : "bg-green";

  const profilePic = fromMe ? authUser.profilePic: selectedConversation.profilePic;

  const bubbleBgColor = fromMe?'bg-info':'bg-dark';

  const shakeClass = message.shouldShake?"shake":""

  return (
    <div className={`chat ${chatClassName} ${chatColor}`}>

        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img 
                    alt='img'
                    src={profilePic}
                />
            </div>            
        </div>
        <div className={`chat-bubble text-dark bg-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message} </div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-dark'>{formattedTime}</div>
    </div>
  )
}

export default Message