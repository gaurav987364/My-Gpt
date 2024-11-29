"use client"
import { PlusIcon } from "lucide-react"
import { Button } from "./button"
import { SidebarMenuButton } from "./sidebar"
import { User } from "next-auth"
import { useRouter } from "next/navigation"
import { addDoc, collection, serverTimestamp } from "@firebase/firestore"
import { db } from "@/lib/firebase"

const NewChat = ({user}:{user:User}) => {
  const router = useRouter();

  const createNewChat = async ()=>{
    const doc = await addDoc(collection(db, "users", user.email!, "chats"), {
      userId : user.email,
      createdAt : serverTimestamp(),
    });

    router.push(`/chat/${doc.id}`)
  }
  return (
    <SidebarMenuButton asChild>
        <Button onClick={createNewChat} className=" w-full py-3.5 h-full mt-1" variant="outline">
            <PlusIcon className=" mr-2 size-4"/> New Chat
        </Button>
    </SidebarMenuButton>
  )
}
export default NewChat