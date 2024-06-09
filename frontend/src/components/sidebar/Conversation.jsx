import React from 'react';
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";
 

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();

  const isOnline = onlineUsers.includes(conversation._id); 
  
  
  console.log(conversation._id+ " conversationId")
  console.log(onlineUsers+ " online_id")

  return (
    <> 
      <div
        className={`d-flex gap-2 align-items-center bg-green-300 p-2 py-1 rounded cursor-pointer ${ isSelected ? "bg-info" : ""}`} onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online": ""  }`}>
          <div className="w-12 rounded-circle overflow-hidden position-relative">
            {isOnline && <div className= 'bg-info' />}
            <img src={conversation.profilePic} alt="user avatar" className="w-100 h-100" />
          </div>
        </div>

        <div className="d-flex flex-column flex-grow-1">
          <div className="d-flex gap-3 justify-content-between">
            <p className="font-weight-bold text-black">{conversation.fullName}</p>
             
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
 
