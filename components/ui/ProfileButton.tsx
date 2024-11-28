import { User } from "next-auth"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { signOut } from "@/auth"
import { SidebarMenuButton } from "./sidebar"

const ProfileButton = ({user}: {user:User}) => {
  return (
    <form 
     action={async ()=>{
        "use server"
        await signOut({redirectTo : "/"})
     }}
    >
     <SidebarMenuButton  type="submit" size="lg">
        <Avatar className=" size-8">
            <AvatarImage src={user?.image || "https://github.com/shadcn.png"}/>
            <AvatarFallback>
                {user?.name 
                ?.split(" ").map((name)=> name[0]).join("")
                }
            </AvatarFallback>
        </Avatar>
        <div className=" grid flex-1 text-left text-sm leading-tight">
            <span className=" truncate font-semibold">{user?.name}</span>
            <span className=" truncate text-xs">{user?.email}</span>
        </div>
     </SidebarMenuButton>
    </form>
  )
}

export default ProfileButton