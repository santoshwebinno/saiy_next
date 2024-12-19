"use client";
import DatePickerWithRange from '@/components/ui/DatePickerWithRange';
import IMAGES from '@/Middleware/images';
import { CardWithForm } from '@/components/ui/CardWithForm';

import {
    Card,
    CardDescription,
    CardContent,
    CardTitle,
    CardHeader,
} from "@/components/ui/card"
import Link from 'next/link';

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
    },
    {
        title: "Transalte",
        value: "2325",
    },
    {
        title: "Create",
        value: "710",
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
                    <CardWithForm title="Active Users" value="6,321" imageSrc={IMAGES.USERACC} />
                    <CardWithForm value="" imageSrc="" items={[
                        { label: "Android", value: "1,232", imageSrc: IMAGES.ANDROID },
                        { label: "Browser", value: "2,153", imageSrc: IMAGES.BROWSER },
                        { label: "iOS", value: "3,678", imageSrc: IMAGES.IOS },
                    ]} />
                </div>
            </div>

            <div className=" w-2/4 m-auto">
                <p
                    className="font-bold text-[16px] leading-[19.09px] text-left mb-5"
                    style={{ fontFamily: 'SF Pro, sans-serif' }}
                >
                    Statistics
                </p>
                <Card className="w-[340px] h-full">
                    <CardHeader className="bg-custom-blue text-white">
                        <CardTitle className="text-lg">All Activity</CardTitle>
                        <CardDescription className='text-4xl font-bold text-white'>7431</CardDescription>
                    </CardHeader>
                    <CardContent className="p-3">
                        <DatePickerWithRange />

                        <ul className="mt-4 space-y-2 text-black">
                            {allData.map((item, index) => {
                                return (
                                    <li key={index} className="border-b border-gray-300 p-3 flex justify-between" >
                                        <span>{item.title}</span>
                                        <Link href="#" className="text-cyan-400">
                                            {item.value}
                                        </Link>
                                    </li>
                                )
                            })
                            }
                        </ul>

                        <ul className="mt-8  text-black">
                            {socialData.map((item, index) => {
                                return (
                                    <li key={index} className="p-2 flex justify-between">
                                        <span>{item.title}</span>
                                        <Link href="#" className="text-Oxford Blue-50 ">
                                            {item.value}
                                        </Link>
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
