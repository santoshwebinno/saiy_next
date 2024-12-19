import React from 'react'

import {
    Dialog,
    DialogDescription,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import Image from 'next/image';
import { Button } from "@/components/ui/button";

interface ConfirmModalProps {
    title: string;
    discription?: string;
    imageSrc?: string;
    confirmDialogOpen: boolean;
    setConfirmDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
    btnName: string;
}

export default function ConfirmModal({ title, imageSrc, discription, btnName, confirmDialogOpen, setConfirmDialogOpen }: ConfirmModalProps) {
    return (
        <Dialog open={confirmDialogOpen} onOpenChange={setConfirmDialogOpen}>
            <DialogContent className="w-80 max-w-sm rounded-lg p-6">
                <div className="flex items-center justify-center">
                    {imageSrc && (
                        <div className="w-12 h-12 flex items-center justify-center bg-custom-blue text-white font-bold rounded-full mb-4">
                            <Image
                                src={imageSrc}
                                width={30}
                                height={30}
                                alt="Modal Icon"
                            />
                        </div>
                    )}
                </div>
                <DialogHeader className="text-center mb-4">
                    <DialogTitle className="text-2xl font-semibold text-custom-blue flex text-center justify-center">{title}</DialogTitle>
                    <DialogDescription className=" text-[#868686] flex text-center justify-center">
                        {discription}
                    </DialogDescription>
                </DialogHeader>
                <div className="flex justify-center mt-8">
                    <Button
                        onClick={() => setConfirmDialogOpen(false)}
                        className="px-16 py-8 font-semibold bg-custom-blue text-white rounded-md hover:bg-custom-blue"
                    >
                        {btnName}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
