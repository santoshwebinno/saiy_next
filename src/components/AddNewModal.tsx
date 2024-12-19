'use client';
import React from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from '@/components/ui/input';

interface AddNewModalProps {
    title: string;
    discription?: string;
    emailLabel: string;
    cName?: string;
    logo?: boolean;
    isAddDialogOpen: boolean;
    setIsAddDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onNext?: () => void;
}

export default function AddNewModal({ title, discription, emailLabel, cName, logo, isAddDialogOpen, setIsAddDialogOpen, onNext }: AddNewModalProps) {
    return (
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogContent className="w-80 max-w-sm rounded-lg p-6">
                <div className="flex items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-custom-blue text-white font-bold rounded-full">
                        +
                    </div>
                </div>
                <DialogHeader className="text-center">
                    <DialogTitle className="text-2xl font-semibold text-gray-600 flex justify-center">
                        {title}
                    </DialogTitle>
                    {discription && (
                        <DialogDescription className=" text-[#868686] underline flex justify-center">
                            {discription}
                        </DialogDescription>
                    )}
                </DialogHeader>

                <form className="space-y-4 p-2">
                    {cName && (
                        <div>
                            <Label htmlFor="name" className='font-bold text-gray-600'>
                                {cName}
                            </Label>
                            <Input
                                type="text"
                                placeholder="Johndoe@gmail.com"
                                className='border-custom-blue text-black focus:outline-none focus:ring-custom-blue'
                            />
                        </div>
                    )}

                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <Label htmlFor="name" className='font-bold text-gray-600'>
                                First Name
                            </Label>
                            <Input
                                type="text"
                                placeholder="John"
                                className='border-custom-blue text-black focus:outline-none focus:ring-custom-blue'
                            />
                        </div>
                        <div className="w-1/2">
                            <Label htmlFor="name" className='font-bold text-gray-600'>
                                Last Name
                            </Label>
                            <Input
                                type="text"
                                placeholder="Doe"
                                className='border-custom-blue text-black focus:outline-none focus:ring-custom-blue'
                            />
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="name" className='font-bold text-gray-600'>
                            {emailLabel}
                        </Label>
                        <Input
                            type="email"
                            placeholder="johndoe@gmail.com"
                            className='border-custom-blue text-black focus:outline-none focus:ring-custom-blue'
                        />
                    </div>

                    {logo && (
                        <div>
                            <Label htmlFor="name" className='font-bold text-gray-600'>
                                Upload Logo
                            </Label>
                            <Input
                                type="file"
                                className='border-custom-blue text-black focus:outline-none focus:ring-custom-blue'
                            />
                        </div>
                    )}
                </form>

                <div className="flex justify-between mt-2">
                    <Button
                        onClick={() => setIsAddDialogOpen(false)}
                        className="px-6 py-5 font-semibold bg-transparent border rounded-md text-custom-blue border-custom-blue hover:bg-custom-blue hover:text-white"
                    >
                        Go Back
                    </Button>
                    <Button
                        onClick={onNext}
                        className="px-6 py-5 font-semibold bg-custom-blue text-white rounded-md hover:bg-custom-blue"
                    >
                        Send Invite
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
