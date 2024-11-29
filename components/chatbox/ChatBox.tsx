"use client"
import React, { FormEvent, useState } from 'react'
import { Button } from '../ui/button'
import { SendIcon } from 'lucide-react'
import { Session } from 'next-auth'
import { usePathname } from 'next/navigation'
import { Message } from '@/types'
import { addDoc, collection, serverTimestamp } from '@firebase/firestore'
import { db } from '@/lib/firebase'
import { ChatMessages } from '../ui/ChatMessage'

const ChatBox = ({session}: {session:Session}) => {
    const user = session.user!;
    const chatId = usePathname().split("/").pop()!;
    
    const [prompt,setPropmt] = useState("");

    const sendMessage = async (e : FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!prompt) return;

        //! get input from user
        const inputValue = prompt.trim();
        setPropmt("");

        //! get the user mesg in structure way and add somethings
        const message:Message = {
            text: inputValue,
            createdAt:serverTimestamp(),
            user:{
                _id:user.email!,
                name:user.name!,
                avatar: user.image!
            }
        };

        //! add to firestore
        await addDoc(collection(db, "users", user.email!, "chats", chatId, "messages"), message);

        //! send to the server for real-time updates
        await fetch(`/api/chat`, {
            method:"POST",
            headers:{"content-type": "application/json"},
            body: JSON.stringify({
                inputValue,
                chatId,
                user
            }),
        })
    }
  return (
    <div>
      <ChatMessages chatId={chatId} session={session}/>

      <div className=' p-4 border-t'>
        <form onSubmit={sendMessage} className=' flex space-x-2'>
            <input 
                type="text" 
                name='prompt' 
                value={prompt}
                onChange={(e) => setPropmt(e.target.value)}
                placeholder='Ask for anything...' 
                className=' flex-grow' 
            />
            <Button size="icon" type='submit'>
                <SendIcon className='size-4'/>
            </Button>
        </form>
      </div>
    </div>
  )
}

export default ChatBox