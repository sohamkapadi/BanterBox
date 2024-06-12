import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";
import useConversation from "../../zustand/useConversation";

const Messages=(selectedConversation)=>{
    const {selectedConversation}=useConversation();
    const  {messages,loading}=useGetMessages();
    useListenMessages();
    const lastMessageRef=useRef();

    useEffect(()=>{
        setTimeout(()=>{
            lastMessageRef.current?.scrollIntoView({behaviour:"smooth"});
        },100);
    },[messages]);

    const filteredMessages = messages.filter(message => message.conversationId === selectedConversation?.id);
    return (
        <div className="px-4 flex-1 overflow-auto">
             {!loading && filteredMessages.length > 0 && filteredMessages.map((message, index) => (
                <div key={message._id} ref={index === filteredMessages.length - 1 ? lastMessageRef : null}>
                    <Message message={message} />
                </div>
            ))}
            {loading  && [...Array(3)].map((_,idx)=> <MessageSkeleton key={idx} />)}

            {!loading && messages.length === 0 && (
                <p className="text-center text-gray-300">Send a message to start the conversation</p>
            )}
        </div>
    );
};

export default Messages;



// STARTER CODE FOR MESSAGES COMPONENT
// import Message from "./Message";

// const Messages=()=>{
//     return (
//         <div className="px-4 flex-1 overflow-auto">
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//         </div>
//     );
// };

// export default Messages;