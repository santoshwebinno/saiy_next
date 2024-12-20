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
    confirmDialogOpen: boolean;
    setConfirmDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
    btnName: string;
}

export default function ConfirmModal({ title, icon: Icon, discription, btnName, confirmDialogOpen, setConfirmDialogOpen }: ConfirmModalProps) {
    return (
        <Dialog open={confirmDialogOpen} onOpenChange={setConfirmDialogOpen}>
            <DialogContent className="w-80 max-w-sm rounded-lg p-6">
                <div className="flex items-center justify-center">
                    {Icon && (
                        <div className="w-12 h-12 flex items-center justify-center bg-custom-blue text-white font-bold rounded-full">
                            <Icon />
                        </div>
                    )}
                </div>
                <DialogHeader className="text-center w-60 m-auto">
                    <DialogTitle className="text-2xl font-semibold text-custom-blue flex text-center justify-center">{title}</DialogTitle>
                    {discription && (
                        <DialogDescription className=" text-[#868686] flex text-center justify-center">
                            {discription}
                        </DialogDescription>
                    )}
                </DialogHeader>
                <div className="flex justify-center">
                    <Button
                        onClick={() => setConfirmDialogOpen(false)}
                        className="w-3/6 h-full p-4 font-semibold bg-custom-blue text-white rounded-md hover:bg-custom-blue"
                    >
                        {btnName}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
