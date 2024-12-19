"use client";
import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import { Label } from "@/components/ui/label";
import { Input } from '@/components/ui/input';
import IMAGES from '@/Middleware/images';
import { Button } from '@/components/ui/button';

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="w-1/3">
                <div className='flex flex-col items-center justify-center w-full'>
                    <Image
                        src={IMAGES.LOGOHOME}
                        width={200}
                        height={200}
                        alt="Home Logo"
                    />
                    <h1 className="text-4xl font-bold leading-tight text-center text-custom-blue mb-2">Login into your account</h1>
                    <p className='text-[#868686]'>Please fill the details and sign in</p>
                </div>

                <div className='flex flex-col items-start justify-center w-full mt-10'>

                    <Label htmlFor="name" className='font-bold text-gray-600 mb-4'>
                        Email Address
                    </Label>
                    <Input
                        type="email"
                        placeholder="Email Address"
                        className='border-none focus:outline-none font-semibold text-[#868686] focus:ring-custom-blue mb-4'
                    />

                    <Label htmlFor="name" className='font-bold text-gray-600 mb-4'>
                        Password
                    </Label>
                    <Input
                        type="email"
                        placeholder="Enter password"
                        className='border-none focus:outline-none font-semibold text-[#868686] focus:ring-custom-blue mb-4'
                    />

                    <Link href='' className="h-4 mb-8 text-right block w-full font-bold text-custom-blue mt-4">Forgot Password</Link>
                    <Button className="w-full p-5 bg-slate-600 hover:bg-custom-blue">
                        Sign in
                    </Button>

                    <p className='mt-16 w-full text-center'>
                        Don&#39;t have an account yet
                        <Link href="/signup" className='text-custom-blue font-bold'> Register for free</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
