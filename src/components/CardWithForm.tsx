'use client'
import * as React from "react";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import Image, { StaticImageData } from 'next/image';
import { LucideIcon } from "lucide-react";

interface CardWithFormProps {
    title?: string;
    value?: string;
    icon?: LucideIcon;
    items?: { label: string; value: string; imageSrc: StaticImageData }[];
}

export function CardWithForm({ title, value, icon: Icon, items }: CardWithFormProps) {
    return (
        <Card className="w-[250px] h-[350px] bg-custom-ip hover:bg-gradiant-home-card rounded-sm">
            {title && (
                <CardHeader>
                    <CardTitle className="text-custom-black">{title}</CardTitle>
                </CardHeader>
            )}
            <CardContent>
                {value && (
                    <p className="text-4xl font-bold text-custom-black">{value}</p>
                )}

                {items && (
                    <ul className="space-y-2 mt-6">
                        {items.map((item, index) => (
                            <div key={index} className="flex gap-2 justify-center items-center">
                                <Image
                                    src={item.imageSrc}
                                    width={20}
                                    height={20}
                                    alt="Devices Icon"
                                />
                                <li key={index} className="flex-1 flex justify-between items-center">
                                    <span className="text-custom-black-lg">{item.label}</span>
                                    <span className="text-custom-blue underline">{item.value}</span>
                                </li>
                            </div>
                        ))}
                    </ul>
                )}
            </CardContent>
            <CardFooter className="flex justify-between mt-28">
                {Icon && (
                    <Icon width={60} height={60} className="text-gray-600" />
                )}
            </CardFooter>
        </Card>
    )
}
