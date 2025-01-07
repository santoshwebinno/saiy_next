'use client';
import React from 'react'

import {
    Dialog,
    DialogDescription,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ConfirmModalProps {
    title: string;
    discription?: string;
    icon?: LucideIcon;
    mIicon?: LucideIcon;
    confirmDialogOpen: boolean;
    setConfirmDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
    btnName: string;
    cust_class?: string;
}

export default function ConfirmModal({ title, icon: Icon, mIicon: MIcon, discription, btnName, confirmDialogOpen, setConfirmDialogOpen, cust_class }: ConfirmModalProps) {
    const dialogHeaderClass = title === 'User has been removed'
        ? 'text-center w-full m-auto'
        : 'text-center w-60 m-auto';
    return (
        <Dialog open={confirmDialogOpen} onOpenChange={setConfirmDialogOpen}>
            <DialogContent className="w-96 max-w-sm rounded-lg p-8">
                <div className="flex items-center justify-center">
                    {Icon && (
                        <div className="w-12 h-12 flex items-center justify-center bg-custom-blue text-white font-bold rounded-full">
                            <Icon />
                        </div>
                    )}
                    {MIcon && (
                        <MIcon width={45} height={45} className='text-custom-blue' />
                    )}
                </div>
                <DialogHeader className={dialogHeaderClass}>
                    <DialogTitle className={`text-2xl font-bold text-custom-blue flex text-center justify-center ${cust_class}`}>{title}</DialogTitle>
                    {discription && (
                        <DialogDescription className=" text-custom-brown-lite font-normal flex text-center justify-center">
                            {discription}
                        </DialogDescription>
                    )}
                </DialogHeader>
                <div className="flex justify-center mt-2">
                    <Button
                        onClick={() => setConfirmDialogOpen(false)}
                        className="w-3/6 h-full p-4 font-semibold text-lg tracking-wide bg-custom-blue text-white rounded-md hover:bg-custom-blue"
                    >
                        {btnName}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
