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
            <DialogContent className="w-96 max-w-sm rounded-lg p-8">
                <div className="flex items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-custom-blue text-white font-bold rounded-full">
                        +
                    </div>
                </div>
                <DialogHeader className="text-center">
                    <DialogTitle className="text-3xl font-bold text-custom-gray flex justify-center">
                        {title}
                    </DialogTitle>
                    {discription && (
                        <DialogDescription className=" text-custom-brown-lite underline flex justify-center">
                            {discription}
                        </DialogDescription>
                    )}
                </DialogHeader>

                <form className="space-y-4 p-4">
                    {cName && (
                        <div className='space-y-1'>
                            <Label htmlFor="name" className='font-bold text-sm text-custom-gray'>
                                {cName}
                            </Label>
                            <Input
                                type="text"
                                placeholder="Johndoe@gmail.com"
                                className='border-custom-blue text-custom-gray focus:outline-none bg-custom-ip focus:ring-custom-blue'
                            />
                        </div>
                    )}

                    <div className="flex gap-4">
                        <div className="w-1/2 space-y-1">
                            <Label htmlFor="name" className='font-bold text-sm text-custom-gray'>
                                First Name*
                            </Label>
                            <Input
                                type="text"
                                placeholder="John"
                                className='border-custom-blue text-custom-gray focus:outline-none bg-custom-ip focus:ring-custom-blue'
                            />
                        </div>
                        <div className="w-1/2 space-y-1">
                            <Label htmlFor="name" className='font-bold text-sm text-custom-gray'>
                                Last Name*
                            </Label>
                            <Input
                                type="text"
                                placeholder="Doe"
                                className='border-custom-blue text-custom-gray focus:outline-none bg-custom-ip focus:ring-custom-blue'
                            />
                        </div>
                    </div>

                    <div className='space-y-1'>
                        <Label htmlFor="name" className='font-bold text-sm text-custom-gray'>
                            {emailLabel}
                        </Label>
                        <Input
                            type="email"
                            placeholder="johndoe@gmail.com"
                            className='border-custom-blue text-custom-gray focus:outline-none bg-custom-ip focus:ring-custom-blue'
                        />
                    </div>

                    {logo && (
                        <div className='w-4/5 space-y-1'>
                            <Label htmlFor="name" className='font-bold text-sm text-custom-gray'>
                                Upload Logo
                            </Label>
                            <Input
                                type="file"
                                className='border-custom-black text-custom-gray focus:outline-none bg-custom-ip focus:ring-custom-blue'
                            />
                        </div>
                    )}
                </form>

                <div className="flex justify-between">
                    <Button
                        onClick={() => setIsAddDialogOpen(false)}
                        className="w-36 h-14 font-semibold text-lg tracking-wide bg-transparent border rounded-md text-custom-blue border-custom-blue hover:bg-custom-blue hover:text-white"
                    >
                        Go Back
                    </Button>
                    <Button
                        onClick={onNext}
                        className="w-36 h-14 font-semibold text-lg tracking-wide bg-custom-blue text-white rounded-md hover:bg-custom-blue"
                    >
                        Send Invite
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
