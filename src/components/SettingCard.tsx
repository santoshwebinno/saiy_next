import React from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
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
        <Card className='w-3/4 h-4/5 m-6 '>
            <CardHeader>
                <CardTitle className='mt-4 flex justify-center'>{title}</CardTitle>
                <CardDescription className='mt-4 flex justify-center font-semibold text-custom-blue'>{discription}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex text-center justify-center">{content}</div>
            </CardContent>
        </Card>
    )
}
