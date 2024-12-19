"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import { Input } from '@/components/ui/input';
import SettingCard from '@/components/SettingCard';


export default function Page() {
    return (
        <div className='w-11/12'>
            <h1
                className="text-[22px] text-custom-blue font-bold leading-[26.25px] text-left decoration-skip-ink-none mb-4 pl-2"
                style={{ fontFamily: "SF Pro, sans-serif" }}
            >
                Account Settings
            </h1>

            <div className='grid grid-cols-2 p-2'>
                <div>
                    <form className="space-y-4">
                        <div>
                            <Label htmlFor="name" className='font-bold text-gray-600'>
                                Name
                            </Label>
                            <Input
                                type="text"
                                placeholder="John Doe"
                                className='border-custom-blue focus:outline-none focus:ring-custom-blue mb-4'
                            />
                        </div>
                        <div>
                            <Label htmlFor="name" className='font-bold text-gray-600'>
                                Email Address
                            </Label>
                            <Input
                                type="email"
                                placeholder="johndoe@gmail.com"
                                className='border-custom-blue focus:outline-none focus:ring-custom-blue mb-4'
                            />
                        </div>
                        <div>
                            <Label htmlFor="name" className='font-bold text-gray-600'>
                                Company
                            </Label>
                            <Input
                                type="text"
                                placeholder="Ebligo Inc."
                                className='border-custom-blue focus:outline-none focus:ring-custom-blue mb-4'
                            />
                        </div>
                    </form>

                    <div className="flex justify-start gap-4 mt-12">
                        <Button
                            className="w-32 h-12 font-semibold bg-transparent border rounded-md text-custom-blue border-custom-blue hover:bg-custom-blue hover:text-white"
                        >
                            Edit
                        </Button>
                        <Button
                            className="w-32 h-12 font-semibold bg-custom-blue text-white rounded-md hover:bg-custom-blue"
                        >
                            Save Changes
                        </Button>
                    </div>
                </div>

                <div className='grid grid-cols-2 ml-4'>
                    <SettingCard title="Your Plan" discription="Elit" content="Upgrade Plan" />
                    <SettingCard title="Accounts" discription="6" content="Remove/add users" />
                    <SettingCard title="Users" discription="684" content="Remove/add users" />
                </div>
            </div>
        </div>
    )
}
