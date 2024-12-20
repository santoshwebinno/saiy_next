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
        <div className="flex flex-col items-center justify-between min-h-screen m-12">
            <div className="w-full max-w-md flex flex-col items-center">
                <Image src={IMAGES.LOGOHOME} width={80} height={80} alt="Home Logo" />
            </div>

            <form className="w-full max-w-md space-y-6">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold text-center text-custom-blue leading-[42.96px]">
                        Login into your account
                    </h1>
                    <p className="text-gray-400 mb-2">
                        Please fill the details and sign in
                    </p>
                </div>

                <div className="flex flex-col space-y-8">
                    <div className="w-full space-y-3">
                        <Label htmlFor="name" className="font-bold text-gray-600 ">
                            Email Address
                        </Label>
                        <Input
                            type="email"
                            placeholder="Email Address"
                            className="border-none focus:outline-none font-normal text-gray-600 focus:ring-custom-blue"
                        />
                    </div>
                    <div className="w-full space-y-2">
                        <Label htmlFor="name" className="font-bold text-gray-600 ">
                            Password
                        </Label>
                        <Input
                            type="email"
                            placeholder="Enter password"
                            className="border-none focus:outline-none font-normal text-gray-600 focus:ring-custom-blue"
                        />
                    </div>
                </div>

                <Link
                    href="#"
                    className="text-right text-sm block w-full font-bold text-custom-blue"
                >
                    Forgot Password
                </Link>

                <Button className="w-full bg-slate-600 hover:bg-custom-blue">
                    Sign in
                </Button>
            </form>

            <p className="w-full max-w-md mt-8 text-center text-sm text-gray-600">
                Don&#39;t have an account yet
                <Link href="#" className="text-custom-blue font-bold">
                    {" "}
                    Register for free
                </Link>
            </p>
        </div>
    )
}
