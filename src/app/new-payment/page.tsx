"use client";
import React, { useState } from 'react';
import Image from 'next/image';

import { Label } from "@/components/ui/label"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScanLine, ThumbsUp } from 'lucide-react';
import ConfirmModal from '@/components/ConfirmModal';
import IMAGES from '@/Middleware/images';


export default function Page() {
    const [confirmPaymentDialogOpen, setConfirmPaymentDialogOpen] = useState(false);

    return (
        <div className="flex flex-col items-center justify-between m-12 space-y-8">
            <div className="w-full max-w-md flex flex-col items-center">
                <Image src={IMAGES.LOGOHOME} width={80} height={80} alt="Home Logo" />
            </div>

            <form className="w-full max-w-md space-y-8">

                <div className="flex flex-col items-center justify-center text-center w-3/4 m-auto">
                    <h1 className="text-2xl font-bold text-center text-custom-blue leading-[42.96px]">
                        Add New Card
                    </h1>
                    <p className="flex items-center justify-center text-center text-gray-400">
                        Add your card details
                    </p>
                </div>

                <div className="space-y-8">
                    <div className='space-y-6'>
                        <div className="w-full space-y-3">
                            <Label htmlFor="name" className="font-bold text-gray-600 "></Label>
                            <Input
                                type="text"
                                placeholder="Card Holder Name"
                                className="border-0 border-b-2 focus:outline-none font-normal text-gray-600 focus:ring-custom-blue"
                            />
                        </div>
                        <div className="w-full space-y-3">
                            <Label htmlFor="name" className="font-bold text-gray-600 "></Label>
                            <Input
                                type="number"
                                placeholder="Card Number"
                                className="border-0 border-b-2 focus:outline-none font-normal text-gray-600 focus:ring-custom-blue no-spinner"
                            />
                        </div>
                    </div>

                    <Button className="text-[12px] bg-custom-blue font-semibold hover:bg-custom-blue">
                        <ScanLine />
                        SCAN CARD
                    </Button>

                    <div className='flex space-x-6'>
                        <div className="w-full space-y-3">
                            <Label htmlFor="name" className="font-bold text-gray-600 "></Label>
                            <Input
                                type="text"
                                placeholder="Exp. Date (MM/YY)"
                                className="border-0 border-b-2 focus:outline-none font-normal text-gray-600 focus:ring-custom-blue"
                                pattern="\d{2}/\d{2}"
                            />
                        </div>
                        <div className="w-full space-y-3">
                            <Label htmlFor="name" className="font-bold text-gray-600 "></Label>
                            <Input
                                type="number"
                                placeholder="Card Number"
                                className="border-0 border-b-2 focus:outline-none font-normal text-gray-600 focus:ring-custom-blue no-spinner"
                            />
                        </div>
                    </div>

                </div>
            </form>
            <Button
                onClick={() => setConfirmPaymentDialogOpen(true)}
                className="w-full max-w-md bg-custom-blue hover:bg-custom-blue"
            >
                Proceed To Pay
            </Button>

            <ConfirmModal title="Payment Confirmed" discription="Unleash the Future of typing with our AI Keybord Extenction. Best of Luck!" icon={ThumbsUp} confirmDialogOpen={confirmPaymentDialogOpen} setConfirmDialogOpen={setConfirmPaymentDialogOpen} btnName="OK, GOT IT!" />
        </div>
    )
}
