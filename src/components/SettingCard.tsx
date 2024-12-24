'use client';
import React from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface SettingCardProps {
    title: string;
    discription: string;
    content: string;
}

export default function SettingCard({ title, discription, content }: SettingCardProps) {
    return (
        <Card className='rounded-sm'>
            <CardHeader>
                <CardTitle className='mt-4 flex justify-center text-custom-gray text-sm font-bold'>{title}</CardTitle>
                <CardDescription className='flex justify-center'>
                    <span className="mt-2 font-bold text-xs rounded text-custom-blue bg-indigo-50 px-2">{discription}</span>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex text-center justify-center text-sm font-normal text-custom-gray underline underline-offset-1">{content}</div>
            </CardContent>
        </Card>
    )
}
