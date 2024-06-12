import { useEffect } from "react";
import {useSocketContext} from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sounds/notification.mp3";
const useListenMessages=()=>{
    const {socket} =useSocketContext();
    const {messages,setMessages,activeConversationId}=useConversation();

    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            if(newMessage.conversationId === activeConversationId){
                newMessage.shouldShake=true;
                const sound= new Audio(notificationSound);
                sound.play();
                setMessages([...messages,newMessage]); 
            }
        });

        return ()=>{
            socket?.off("newMessage");
        };
    },[socket,setMessages,messages,activeConversationId]);
};

export default useListenMessages;