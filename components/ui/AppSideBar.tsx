import { auth } from "@/auth";
import NewChat from "./NewChat";
import ProfileButton from "./ProfileButton";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem } from "./sidebar";
import { redirect } from "next/navigation";


const AppSideBar = async () => {
    const session = await auth();
    if(!session || !session.user){
        redirect('/')
    };

    const user = session.user;
  return (
    <Sidebar>
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                   <NewChat/>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
            <SidebarMenu>
                 {/* chatlist */}
            </SidebarMenu>
        </SidebarContent>

        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                    <ProfileButton user={user}/>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}

export default AppSideBar;