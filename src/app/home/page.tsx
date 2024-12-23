"use client";
import IMAGES from '@/Middleware/images';
import DatePickerWithRange from '@/components/DatePickerWithRange';
import { CardWithForm } from '@/components/CardWithForm';

import {
    Card,
    CardDescription,
    CardContent,
    CardTitle,
    CardHeader,
} from "@/components/ui/card"
import { SquareUserRound } from 'lucide-react';
import Image from 'next/image';

const socialData = [
    {
        title: "Instagram",
        value: "150",
    },
    {
        title: "Newsletter",
        value: "73",
    },
    {
        title: "Linkedin",
        value: "66",
    },
    {
        title: "Facebook",
        value: "12",
    },
    {
        title: "X",
        value: "3",
    },
    {
        title: "Blog Article",
        value: "1",
    },

]

const allData = [
    {
        title: "Rewrite",
        value: "2325",
        logo: IMAGES.REWRITE,
        textColor: "text-cyan-400",
        bgColor: "bg-cyan-50",
    },
    {
        title: "Transalte",
        value: "2325",
        logo: IMAGES.TRANSLATE,
        textColor: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        title: "Create",
        value: "710",
        logo: IMAGES.CRATE,
        textColor: "text-green-400",
        bgColor: "bg-green-50",
    },
]

export default function Page() {
    return (
        <div className="w-11/12 grid grid-cols-2">
            <div>
                <h1
                    className="text-[22px] text-custom-blue font-bold leading-[26.25px] text-left decoration-skip-ink-none mb-5"
                >
                    Hello, David!
                </h1>
                <div className="grid grid-cols-2 gap-20">
                    <CardWithForm title="Active Users" value="6,321" icon={SquareUserRound} />
                    <CardWithForm items={[
                        { label: "Android", value: "1,232", imageSrc: IMAGES.ANDROID },
                        { label: "Browser", value: "2,153", imageSrc: IMAGES.BROWSER },
                        { label: "iOS", value: "3,678", imageSrc: IMAGES.IOS },
                    ]} />
                </div>
            </div>

            <div className=" w-2/4 m-auto">
                <p
                    className="font-bold text-[16px] leading-[19.09px] text-left mb-5"
                >
                    Statistics
                </p>
                <Card className="w-[340px] h-full bg-[#FDFDFD] rounded-sm">
                    <CardHeader className="bg-custom-blue text-white rounded-t-sm">
                        <CardTitle className="text-lg">All Activity</CardTitle>
                        <CardDescription className='text-4xl font-bold text-white'>7431</CardDescription>
                    </CardHeader>
                    <CardContent className="p-3">
                        <DatePickerWithRange />

                        <ul className="mt-4 space-y-2">
                            {allData.map((item, index) => {
                                return (
                                    <li key={index} className="border-b border-gray-300 p-3 flex justify-between" >
                                        <div>
                                            <Image
                                                src={item.logo}
                                                alt={item.title}
                                                width={15}
                                                height={0}
                                            />
                                            <span className='font-semibold text-base text-[#263238]'>{item.title}</span>
                                        </div>
                                        <span className={`p-2 rounded font-normal text-base ${item.textColor} ${item.bgColor}`}>{item.value}</span>
                                    </li>
                                )
                            })
                            }
                        </ul>

                        <ul className="mt-8 text-[#263238]">
                            {socialData.map((item, index) => {
                                return (
                                    <li key={index} className="p-2 flex justify-between">
                                        <span>{item.title}</span>
                                        <span>{item.value}</span>
                                    </li>
                                )
                            })}
                        </ul>

                    </CardContent>
                </Card>

            </div>
        </div>
    );
}
