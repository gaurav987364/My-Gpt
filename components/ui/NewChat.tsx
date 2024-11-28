import { PlusIcon } from "lucide-react"
import { Button } from "./button"
import { SidebarMenuButton } from "./sidebar"

const NewChat = () => {
  return (
    <SidebarMenuButton asChild>
        <Button className=" w-full py-3.5 h-full mt-1" variant="outline">
            <PlusIcon className=" mr-2 size-4"/> New Chat
        </Button>
    </SidebarMenuButton>
  )
}
export default NewChat