import { auth } from "@/auth"
import ChatBox from "@/components/chatbox/ChatBox"
import { redirect } from "next/navigation";

const ChatPage = async () => {
    const session = await auth();
  return (
    <div>
        {session && session.user ? (
            <ChatBox session={session}/>
        ) : (
          redirect("/")
        )}  
    </div>
  )
}

export default ChatPage