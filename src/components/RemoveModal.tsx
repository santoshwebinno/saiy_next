'use client';
import React from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface RemoveModalProps {
    title: string;
    discription: string;
    email?: string;
    icon?: LucideIcon;
    isDialogOpen: boolean;
    setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onNext?: () => void;
}

export default function RemoveModal({ title, discription, email, icon: Icon, isDialogOpen, setDialogOpen, onNext }: RemoveModalProps) {

    return (
        <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
            <DialogContent className="w-96 max-w-sm rounded-lg p-8">
                <div className="flex items-center justify-center">
                    {Icon && (
                        <div className="flex items-center justify-center text-custom-red font-bold mb-0">
                            <Icon width={50} height={40} />
                        </div>
                    )}
                </div>
                <DialogHeader className="text-center mb-3">
                    <DialogTitle className="text-2xl font-bold text-custom-red flex justify-center mb-3">{title}</DialogTitle>
                    <DialogDescription className=" text-custom-brown-lite flex flex-col justify-center items-center">
                        <span>{discription}</span>
                        <span>{email}</span>
                    </DialogDescription>
                </DialogHeader>
                <div className="flex justify-evenly">
                    <Button
                        onClick={() => setDialogOpen(false)}
                        className="w-32 h-14 tracking-wide font-semibold bg-transparent border rounded-md text-custom-blue border-custom-blue hover:bg-custom-blue hover:text-white"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={onNext}
                        className="w-32 h-14 tracking-wide font-semibold bg-custom-blue text-white rounded-md hover:bg-custom-blue"
                    >
                        Proceed
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
