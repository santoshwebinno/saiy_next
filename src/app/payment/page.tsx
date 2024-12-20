"use client";
import React from 'react';
import IMAGES from '@/Middleware/images';
import Image, { StaticImageData } from 'next/image';

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ROUTES from '@/Middleware/routes';

interface PaymentCardData {
    id: number;
    unq: string;
    name: string;
    logo: string | StaticImageData;
}

export default function Page() {

    const CardData: PaymentCardData[] = [
        { id: 1, unq: "option-one", name: "Mastercard", logo: IMAGES.M_CARD },
        { id: 2, unq: "option-two", name: "PayPal", logo: IMAGES.P_PAL_CARD },
        { id: 3, unq: "option-three", name: "Google Pay", logo: IMAGES.G_PAY_CARD },
        { id: 4, unq: "option-four", name: "Apple Pay", logo: IMAGES.APPLE_PAY_CARD },
        { id: 5, unq: "option-five", name: "Visa Card", logo: IMAGES.VISA_CARD },
    ]

    return (
        <div className="flex flex-col items-center justify-between m-12 space-y-8">
            <div className="w-full max-w-md flex flex-col items-center">
                <Image src={IMAGES.LOGOHOME} width={80} height={80} alt="Home Logo" />
            </div>

            <form className="w-full max-w-md space-y-8">

                <div className="flex flex-col items-center justify-center text-center w-3/4 m-auto">
                    <h1 className="text-2xl font-bold text-center text-custom-blue leading-[42.96px]">
                        Payment Methods
                    </h1>
                    <p className="flex items-center justify-center text-center text-gray-400">
                        Choose the desired payment method which suits you best.
                    </p>
                </div>

                <div className="space-y-6">

                    <RadioGroup defaultValue="option-one" className="space-y-2">
                        {CardData.map((card) => (
                            <div key={card.id} className="flex items-center justify-between p-3 border rounded-lg shadow-sm">
                                <Label htmlFor={card.unq} className='w-full flex flex-row justify-between items-center text-center cursor-pointer'>
                                    <div className='flex flex-row justify-between items-center text-center space-x-6'>
                                        <Image src={card.logo} alt={card.name} width={25} height={25} />
                                        <span className='text-gray-500'>{card.name}</span>
                                    </div>
                                    <RadioGroupItem value={card.unq} id={card.unq} className='text-white' />
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>

                    <Link
                        href={ROUTES.NEW_PAYMENT}
                        className="text-left text-sm block w-full font-bold text-custom-blue"
                    >
                        + Add New Card
                    </Link>

                    <Button className="w-full bg-custom-blue hover:bg-custom-blue">
                        Proceed To Pay
                    </Button>

                </div>
            </form>
        </div>
    )
}
