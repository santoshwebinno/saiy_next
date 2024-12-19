'use client'
import React from 'react'

import { Settings, SquareUserRound, ChartColumn, Undo2 } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter,
} from "@/components/ui/sidebar";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import IMAGES from '@/Middleware/images';

const items = [
    {
        title: "Overview",
        url: "/home",
        icon: ChartColumn,
    },
    {
        title: "Users",
        url: "/home/users",
        icon: SquareUserRound,
    },
    {
        title: "Settings",
        url: "/home/settings",
        icon: Settings,
    },
];

export function AppSidebar() {
    const pathname = usePathname()
    const route = `${pathname}`

    return (
        <Sidebar>
            <SidebarContent className="bg-gray-100">
                <SidebarGroup>
                    <SidebarGroupLabel className="m-4">
                        <Link href="/main">
                            <Image
                                src={IMAGES.SBARLOGO}
                                width={170}
                                height={150}
                                alt="Logo"
                            />
                        </Link>
                    </SidebarGroupLabel>
                    <SidebarGroupContent className="m-2 ">
                        <SidebarMenu>
                            {items.map((item) => {
                                const isActive = route === item.url;
                                return (
                                    <SidebarMenuItem key={item.title} className={`font-semibold ${isActive ? "text-custom-blue" : "text-[#868686]"
                                        } hover:text-custom-blue`}>
                                        <SidebarMenuButton asChild>
                                            <Link href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="bg-gray-100 items-center p-8">
                <Button
                    className="w-2/3 bg-transparent text-custom-blue font-medium border border-custom-blue rounded-full py-2 px-4 
              hover:bg-custom-blue hover:text-white transition duration-300"
                >
                    <Undo2 />
                    Logout
                </Button>
            </SidebarFooter>
        </Sidebar>
    );
}
