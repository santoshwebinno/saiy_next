"use client";
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import IMAGES from '@/Middleware/images';
import Image from 'next/image';

export default function Page() {

    return (
        <main>
            <div className='flex justify-start bg-gray-100 p-8'>
                <Image src={IMAGES.SBARLOGO} alt="Home Logo" width={150} height={0} className="ml-4" />
            </div>
            <div className='grid  grid-cols-[60%,40%] m-8'>
                <div className='ml-4 space-y-8'>

                    <div className='space-y-8'>
                        <div>
                            <h1 className="font-bold text-base leading-8 text-left text-custom-blue">Communicate like a native!</h1>
                            <p className="font-bold text-xs leading-5">Free trial for 7 days!</p>
                        </div>

                        <div className="w-7/12 space-y-4">
                            <p className='font-bold text-sm leading-4 text-gray-600'>Team Admin</p>
                            <Input
                                type='email'
                                placeholder='Youremail@example.com'
                                className='border-custom-blue p-6 focus:outline-none font-normal text-gray-600 focus:ring-custom-blue'
                            />
                        </div>
                    </div>

                    <div className='space-y-8'>
                        <p className='font-bold text-sm leading-4 text-gray-600'>How many members are on your team?</p>
                        <div className='flex items-center space-x-3'>
                            <Button className='text-custom-blue bg-transparent hover:bg-transparent'>+</Button>
                            <Input
                                type='number'
                                value={13}
                                className='border-custom-blue text-custom-blue focus:outline-none font-normal focus:ring-custom-blue p-6 w-2 no-spinner'
                            />
                            <Button className='text-custom-blue bg-transparent hover:bg-transparent'>-</Button>
                        </div>
                    </div>

                    <div>
                        <p className="font-bold text-sm leading-4 text-gray-600">Billing</p>

                    </div>

                    <div></div>

                </div>

                <div>

                </div>
            </div>
        </main>
    )
}
