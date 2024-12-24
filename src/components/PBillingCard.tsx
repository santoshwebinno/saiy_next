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
                    <CardTitle className='font-normal text-sm'>{title}</CardTitle>
                    {savePer && (
                        <p className='text-xs font-medium bg-indigo-50 px-1 rounded'>{savePer}</p>
                    )}
                </div>
                <CardDescription className='text-custom-blue font-bold text-sm'>{discription}</CardDescription>
            </CardHeader>
            <CardContent className='px-4'>
                <p className='text-custom-black text-xs font-bold'>{content}</p>
            </CardContent>
        </Card>

    )
}
