import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";


const Conversations=()=>{

    const {loading,conversations}=useGetConversations();
    console.log("Conversations: ",conversations);
    return (
       <div className="py-2 flex flex-col overflow-auto">
        {conversations.map((conversations,idx)=>(
            <Conversation key={conversations.id} conversation={conversations} 
            emoji={getRandomEmoji()}
            lastIdx= {idx === conversations.length-1}/>
        ))}
        {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
       </div>
    );
};

export default Conversations;


// STARTER CODE FOR CONVERSATIONS
// import Conversation from "./Conversation";


// const Conversations=()=>{
//     return (
//        <div className="py-2 flex flex-col overflow-auto">
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//        </div>
//     );
// };

// export default Conversations;