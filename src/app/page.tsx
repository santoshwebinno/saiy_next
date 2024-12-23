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
        <div className="flex flex-col items-center justify-between m-12 space-y-8">
            <div className="w-full max-w-md flex flex-col items-center">
                <Image src={IMAGES.LOGOHOME} width={80} height={80} alt="Home Logo" />
            </div>

            <form className="w-full max-w-md space-y-8">
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl font-bold text-center text-custom-blue leading-[42.96px]">
                        Login into your account
                    </h1>
                    <p className="text-[#7D848D] mb-2">
                        Please fill the details and sign in
                    </p>
                </div>

                <div className="flex flex-col space-y-8">
                    <div className="w-full space-y-3">
                        <Label htmlFor="name" className="font-bold text-[#50545B] ">
                            Email Address
                        </Label>
                        <Input
                            type="email"
                            placeholder="Email Address"
                            className="border-none focus:outline-none font-normal text-[#7D848D] bg-[#FDFDFD] focus:ring-custom-blue"
                        />
                    </div>
                    <div className="w-full space-y-2">
                        <Label htmlFor="name" className="font-bold text-[#50545B] ">
                            Password
                        </Label>
                        <Input
                            type="email"
                            placeholder="Enter password"
                            className="border-none focus:outline-none font-normal text-[#7D848D] bg-[#FDFDFD] focus:ring-custom-blue"
                        />
                    </div>
                </div>

                <Link
                    href="#"
                    className="text-right text-sm block w-full font-bold text-custom-blue"
                >
                    Forgot Password?
                </Link>

                <Button className="w-full bg-[#7D848D] hover:bg-custom-blue">
                    Sign in
                </Button>
            </form>

            <p className="w-full max-w-md text-center text-sm font-normal text-[#50545B]">
                Don&#39;t have an account yet?
                <Link href="#" className="text-custom-blue font-bold">
                    {" "}
                    Register for free
                </Link>
            </p>
        </div>
    )
}
