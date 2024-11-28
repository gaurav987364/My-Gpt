import Header from "@/components/shared/header/Header";
import AppSideBar from "@/components/ui/AppSideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

export default function RootLayout({
    children
} : Readonly<{
    children: React.ReactNode
}>) {
    return (
        <SidebarProvider>
            <div className=" flex h-screen bg-background text-foreground w-full">
                <>
                  <AppSideBar/>
                  <div className=" flex flex-1 flex-col overflow-y-scroll">
                    <Header/>
                    {children}
                  </div>
                </>
            </div>
        </SidebarProvider>
    )
}