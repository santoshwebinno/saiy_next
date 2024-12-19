import React from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import Image from 'next/image';
import { Button } from "@/components/ui/button";

interface RemoveModalProps {
    title: string;
    discription: string;
    email?: string;
    imageSrc: string;
    isDialogOpen: boolean;
    setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onNext?: () => void;
}

export default function RemoveModal({ title, discription, email, imageSrc, isDialogOpen, setDialogOpen, onNext }: RemoveModalProps) {

    return (
        <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
            <DialogContent className="w-80 max-w-sm rounded-lg p-6">
                <div className="flex items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-custom-blue text-white font-bold rounded-full mb-4">
                        <Image
                            src={imageSrc}
                            width={30}
                            height={30}
                            alt="Remove Icon"
                        />
                    </div>
                </div>
                <DialogHeader className="text-center mb-4">
                    <DialogTitle className="text-2xl font-semibold text-[#ff2d55] flex justify-center">{title}</DialogTitle>
                    <DialogDescription className=" text-[#868686] flex justify-center">
                        {discription}
                    </DialogDescription>
                    <DialogDescription className=" text-[#868686] flex justify-center">
                        {email}
                    </DialogDescription>
                </DialogHeader>
                <div className="flex justify-evenly mt-8">
                    <Button
                        onClick={() => setDialogOpen(false)}
                        className="px-6 py-5 font-semibold bg-transparent border rounded-md text-custom-blue border-custom-blue hover:bg-custom-blue hover:text-white"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={onNext}
                        className="px-6 py-5 font-semibold bg-custom-blue text-white rounded-md hover:bg-custom-blue"
                    >
                        Proceed
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
