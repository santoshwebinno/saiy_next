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
        <Card className=''>
            <CardHeader>
                <CardTitle className='mt-4 flex justify-center'>{title}</CardTitle>
                <CardDescription className='flex justify-center'>
                    <span className="mt-2 font-semibold rounded text-custom-blue bg-indigo-50 px-2">{discription}</span>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex text-center justify-center">{content}</div>
            </CardContent>
        </Card>
    )
}
