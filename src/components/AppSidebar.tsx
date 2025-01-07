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
import ROUTES from '@/Middleware/routes';

const items = [
    {
        title: "Overview",
        url: ROUTES.HOME,
        icon: ChartColumn,
    },
    {
        title: "Users",
        url: ROUTES.USERS,
        icon: SquareUserRound,
    },
    {
        title: "Settings",
        url: ROUTES.SETTINGS,
        icon: Settings,
    },
];

export function AppSidebar() {
    const pathname = usePathname()
    const route = `${pathname}`

    return (
        <Sidebar>
            <SidebarContent className="bg-gradiant-app-sidebar">
                <SidebarGroup>
                    <SidebarGroupLabel className="m-4 py-8">
                        <Link href={ROUTES.HOME}>
                            <Image
                                src={IMAGES.SBARLOGO}
                                width={170}
                                height={150}
                                alt="Logo"
                                priority 
                            />
                        </Link>
                    </SidebarGroupLabel>
                    <SidebarGroupContent className="m-2">
                        <SidebarMenu className='space-y-3'>
                            {items.map((item) => {
                                const isActive = route === item.url;
                                return (
                                    <SidebarMenuItem key={item.title} className={`${isActive ? "text-custom-blue" : "text-custom-brown-lite"
                                        } hover:text-custom-blue`}>
                                        <SidebarMenuButton asChild>
                                            <Link href={item.url}>
                                                <p className='font-semibold text-xl'>
                                                    <item.icon />
                                                </p>
                                                <span className='font-medium text-xl'>{item.title}</span>
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
                    className="w-2/3 bg-transparent text-custom-blue font-semibold text-base tracking-wide border border-custom-blue rounded-full py-2 px-4 
              hover:bg-custom-blue hover:text-white transition duration-300"
                >
                    <Undo2 />
                    Logout
                </Button>
            </SidebarFooter>
        </Sidebar>
    );
}
