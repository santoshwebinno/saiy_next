import * as React from "react";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import Image from 'next/image';
import Link from 'next/link';

interface CardWithFormProps {
    title: string;
    value: string;
    imageSrc?: any;
    highlightColor?: string;
    items?: { label: string; value: string; imageSrc: string }[];
}

export function CardWithForm({ title, value, imageSrc, items, highlightColor = "text-black-500" }: CardWithFormProps) {
    return (
        <Card className="w-[250px] h-[350px] hover:bg-[#fcf3f9] ">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className={`text-4xl font-bold mt-2  ${highlightColor}`}>{value}</p>

                {items && (
                    <ul className="space-y-2 mt-2">
                        {items.map((item, index) => (
                            <div key={index} className="flex gap-2">
                                <Image
                                    src={item.imageSrc}
                                    width={20}
                                    height={20}
                                    alt="DeviceS Icon"
                                />

                                <li key={index} className="flex-1 flex justify-between items-center">
                                    <span>{item.label}</span>
                                    <Link href="#" className="text-custom-blue underline">{item.value}</Link>
                                </li>
                            </div>
                        ))}
                    </ul>
                )}
            </CardContent>
            <CardFooter className="flex justify-between mt-28">
                {imageSrc && (
                    <Image
                        src={imageSrc}
                        width={60}
                        height={60}
                        alt="DeviceS Icon"
                    />
                )}
            </CardFooter>
        </Card>
    )
}
