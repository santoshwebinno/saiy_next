"use client";
import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface PBillingCardProps {
    title: string;
    discription: string;
    content: string;
    savePer?: string
    bg_class?: string;
}

export default function PBillingCard({ title, discription, content, savePer, bg_class }: PBillingCardProps) {
    return (
        <Card className={`border-custom-blue cursor-pointer hover:bg-[#fcf3f9] ${bg_class}`}>
            <CardHeader className='space-y-3 p-4'>
                <div className='flex text-custom-blue justify-between'>
                    <CardTitle className='font-normal'>{title}</CardTitle>
                    {savePer && (
                        <p className='text-xs bg-indigo-50 px-1 rounded'>{savePer}</p>
                    )}
                </div>
                <CardDescription className='text-custom-blue font-bold'>{discription}</CardDescription>
            </CardHeader>
            <CardContent className='text-xs px-4'>
                <p className='text-black font-bold'>{content}</p>
            </CardContent>
        </Card>

    )
}
