import { ModeToggle } from "@/components/mode-toggle"
import { SidebarTrigger } from "@/components/ui/sidebar"
import Link from "next/link"

const Header = () => {
  return (
    <header className=" bg-background border-b p-4 flex items-center  justify-between">
        <SidebarTrigger className=" block md:hidden mr-4"/>
        <Link href="/chat">
         <h1 className=" text-xl font-bold">My-Gpt</h1>
        </Link>
        <ModeToggle/>
    </header>
  )
}

export default Header