"use client";
import React, { useState } from 'react';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import IMAGES from '@/Middleware/images';
import Image from 'next/image';
import PBillingCard from '@/components/PBillingCard';

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Page() {
    const [members, setMembers] = useState<number>(13);

    const handleMembersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 0) {
            setMembers(value);
        }
    };

    const handleIncrement = () => setMembers((prev) => prev + 1);
    const handleDecrement = () => setMembers((prev) => (prev > 0 ? prev - 1 : 0));

    const [selected, setSelected] = useState("monthly");

    const handleChange = (value: string) => {
        setSelected(value);
    };

    return (
        <div>
            <div className='flex justify-start bg-gray-100 p-7'>
                <Image src={IMAGES.SBARLOGO} alt="Home Logo" width={150} height={0} className="ml-10" />
            </div>

            <div className='grid  grid-cols-[60%,40%] m-5 ml-12 p-4'>
                <div className='ml-4 space-y-8'>
                    <div className='w-8/12 space-y-8'>
                        <div className='space-y-6'>
                            <div>
                                <h1 className="font-bold text-xl leading-10 text-left text-custom-blue">Communicate like a native!</h1>
                                <p className="font-bold text-sm text-black leading-5">Free trial for 7 days!</p>
                            </div>

                            <div className="space-y-4">
                                <p className='font-bold text-sm leading-4 text-gray-600'>Team Admin</p>
                                <Input
                                    type='email'
                                    placeholder='Youremail@example.com'
                                    className='border-custom-blue p-6 focus:outline-none font-normal text-gray-600 focus:ring-custom-blue'
                                />
                            </div>
                            <div className="h-[1px] bg-custom-blue w-full my-4"></div>
                        </div>

                        <div className='space-y-6'>
                            <p className='font-bold text-sm leading-4 text-gray-600'>How many members are on your team?</p>
                            <div className='flex items-center space-x-3'>
                                <Button
                                    onClick={handleIncrement}
                                    className='text-custom-blue bg-transparent hover:bg-transparent'>+</Button>
                                <Input
                                    type='number'
                                    value={members}
                                    onChange={handleMembersChange}
                                    className='border-custom-blue text-custom-blue focus:outline-none font-normal focus:ring-custom-blue w-12 no-spinner'
                                />
                                <Button
                                    onClick={handleDecrement}
                                    className='text-custom-blue bg-transparent hover:bg-transparent'>-</Button>
                            </div>
                        </div>

                        <div className='space-y-6'>
                            <p className="font-bold text-sm leading-4 text-gray-600">Billing</p>
                            <RadioGroup defaultValue="option-one" value={selected} onValueChange={handleChange}>
                                <div className='grid grid-cols-2  gap-5'>
                                    <Label htmlFor="monthly">
                                        <PBillingCard title="Monthly" discription="$9.99" content="Per month, per member" bg_class={selected === "monthly" ? "bg-[#fcf3f9]" : ""} />
                                        <RadioGroupItem value='monthly' id="monthly" className='hidden' />
                                    </Label>
                                    <Label htmlFor="annually">
                                        <PBillingCard title="Annually" discription="$79.99" content="$6.80 per month, per member" savePer="Save 50%" bg_class={selected === "annually" ? "bg-[#fcf3f9]" : ""} />
                                        <RadioGroupItem value="annually" id="annually" className='hidden' />
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle className="font-bold text-sm leading-4 text-gray-600">Payment Method</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className='space-y-4'>
                                <div className='space-y-2'>
                                    <Label className="font-normal text-sm leading-4 text-gray-500">Card Holder Name</Label>
                                    <Input
                                        type='text'
                                        placeholder=''
                                        className='border-custom-blue font-normal text-gray-600 focus:outline-none focus:ring-custom-blue p-6'
                                    />
                                </div>

                                <div className='space-y-2'>
                                    <Label className="font-normal text-sm leading-4 text-gray-500">Card Number</Label>
                                    <Input
                                        type='number'
                                        value={""}
                                        className='border-custom-blue font-normal text-gray-600 focus:outline-none focus:ring-custom-blue p-6 no-spinner'
                                    />
                                </div>

                                <div className='flex space-x-4'>
                                    <div className='space-y-2'>
                                        <Label className="font-normal text-sm leading-4 text-gray-500">Expiration Date</Label>
                                        <Input
                                            type='text'
                                            placeholder='MM/YY'
                                            className='border-custom-blue font-normal text-custom-b6ue focus:outline-none focus:ring-custom-blue p-6 w-28'
                                        />
                                    </div>
                                    <div className='space-y-2'>
                                        <Label className="font-normal text-sm leading-4 text-gray-500">Security Code</Label>
                                        <Input
                                            type='text'
                                            placeholder='CVC'
                                            className='border-custom-blue font-normal text-custom-b6ue focus:outline-none focus:ring-custom-blue p-6 w-28'
                                        />
                                    </div>
                                </div>

                                <div className='flex space-x-4'>
                                    <div className='w-[60%] space-y-2'>
                                        <Label className="font-normal text-sm leading-4 text-gray-500">Country</Label>
                                        <Input
                                            type='text'
                                            placeholder='United States'
                                            className='border-custom-blue font-normal text-custom-b6ue focus:outline-none focus:ring-custom-blue p-6'
                                        />
                                    </div>

                                    <div className='w-[40%] space-y-2'>
                                        <Label className="font-normal text-sm leading-4 text-gray-500">ZIP Code</Label>
                                        <Input
                                            type='number'
                                            value={12345}
                                            className='border-custom-blue font-normal text-custom-b6ue focus:outline-none focus:ring-custom-blue p-6 no-spinner'
                                        />
                                    </div>
                                </div>

                            </form>
                        </CardContent>
                    </Card >

                    <div>
                        <p className='w-[80%] p-4 font-normal text-xs leading-4 text-gray-500'>By Providing your card information , you allow ADI HOLDINGS, Inc. to change your card future payments in accordance with their terms.</p>
                    </div>
                </div>

                <div className='p-6 m-2 ml-12 space-y-6'>
                    <Card className='bg-gray-100 space-y-3 p-2'>
                        <CardHeader>
                            <div className='flex justify-start py-3'>
                                <Image src={IMAGES.LOGO2} alt="Sub Home Logo" width={70} height={0} />
                            </div>
                            <CardTitle className='text-custom-blue font-bold'>Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className='space-y-8'>
                                <ul className='space-y-2'>
                                    <li className='flex border-b py-2'>
                                        <span className='w-[70%] text-custom-blue text-sm font-medium'>Plan Type </span>
                                        <span className='text-black text-sm font-medium'>Terms</span>
                                    </li>
                                    <li className='flex border-b py-2'>
                                        <span className='w-[70%] text-custom-blue text-sm font-medium'>Seats</span>
                                        <span className='text-black text-sm font-medium'>13</span>
                                    </li>
                                    <li className='flex border-b py-2'>
                                        <span className='w-[70%] text-custom-blue text-sm font-medium'>Billing</span>
                                        <span className='text-black text-sm font-medium'>Annually</span>
                                    </li>
                                </ul>

                                <div>
                                    <div className='flex items-center text-custom-blue font-semibold'>
                                        <span className='w-[70%]'>Total</span>
                                        <span>$2232.23</span>
                                    </div>
                                    <p className='text-base text-custom-blue font-normal mt-1'>Due on Dec 12, 2024</p>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <p className='w-[90%] font-normal text-sm leading-4 text-gray-700'>Your team&#39;s trial begins today! We&#39;ll send you a reminder before it ends, and you can cancel at any time. Your first billing date is December 12, 2024.</p>
                        </CardFooter>
                    </Card>
                    <Button className='w-full max-w-md bg-custom-blue hover:bg-custom-blue p-6'>Start your 7-day Free Trial</Button>
                </div>
            </div>
        </div>
    )
}
