"use client";
import React, { useState } from 'react'
import HeaderBar from '@/components/HeaderBar';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label";
import { Input } from '@/components/ui/input';
import IMAGES from '@/Middleware/images';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import ConfirmModal from '@/components/ConfirmModal';
import RemoveModal from '@/components/RemoveModal';

interface TableRowData {
    id: number;
    name: string;
    email: string;
    role: string;
}

export default function Page() {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);

    const [isUserDialogOpen, setIsUserDialogOpen] = useState(false);
    const [confirmUserDialogOpen, setConfirmUserDialogOpen] = useState(false);

    const [removeDialogOpen1, setRemoveDialogOpen1] = useState(false);
    const [removeDialogOpen2, setRemoveDialogOpen2] = useState(false);
    const [confirmRemoveDialogOpen, setConfirmRemoveDialogOpen] = useState(false);

    const [confirmInviteDialogOpen, setConfirmInviteDialogOpen] = useState(false);
    const [confirmResetDialogOpen, setConfirmResetDialogOpen] = useState(false);


    const data: TableRowData[] = [
        { id: 1, name: "Alexander lee Crane", email: " Tiwzermor@gmail.com", role: "User" },
        { id: 2, name: "Alexander lee Crane", email: " Tiwzermor@gmail.com", role: "User" },
        { id: 3, name: "Alexander lee Crane", email: " Tiwzermor@gmail.com", role: "User" },
        { id: 4, name: "Alexander lee Crane", email: " Tiwzermor@gmail.com", role: "User" },
        { id: 5, name: "Alexander lee Crane", email: " Tiwzermor@gmail.com", role: "User" },
        { id: 6, name: "Alexander lee Crane", email: " Tiwzermor@gmail.com", role: "User" },
        { id: 7, name: "Alexander lee Crane", email: " Tiwzermor@gmail.com", role: "User" },
        { id: 8, name: "Alexander lee Crane", email: " Tiwzermor@gmail.com", role: "User" },
        { id: 9, name: "Alexander lee Crane", email: " Tiwzermor@gmail.com", role: "User" },
    ];

    const handleCheckboxChange = (id: number) => {
        setSelectedRows((prev) =>
            prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
        );
    };

    // const handleMasterCheckboxChange = (isChecked: boolean) => {
    //     setSelectedRows(isChecked ? data.map((row) => row.id) : []);
    // };

    const handleConfirmUserDialogOpen = () => {
        setIsUserDialogOpen(false)
        setConfirmUserDialogOpen(true)
    }

    const handleCheckRemoveDialogOpen = () => {
        setRemoveDialogOpen1(false);
        setRemoveDialogOpen2(true);
    }

    const handleConfirmRemoveDialogOpen = () => {
        setRemoveDialogOpen2(false);
        setConfirmRemoveDialogOpen(true);
    }



    return (
        <div className="flex font-sans">
            <Sidebar />
            <main className="flex-1 p-8">
                <HeaderBar />
                <div className='w-11/12'>
                    <h1
                        className="text-[22px] text-custom-blue font-bold leading-[26.25px] text-left decoration-skip-ink-none mb-12"
                        style={{ fontFamily: "SF Pro, sans-serif" }}
                    >
                        Users
                    </h1>

                    <div className='flex justify-between mb-8'>
                        <div>
                            <Button className="text-white bg-custom-blue text-[20px] font-[590] p-6 gap-2
                            hover:text-white hover:bg-custom-blue"
                                onClick={() => setIsUserDialogOpen(true)}
                            >
                                <Image
                                    src={IMAGES.AVTAR}
                                    width={20}
                                    height={20}
                                    alt="Avtar Icon"
                                />
                                <span>+ New User</span>
                            </Button>
                        </div>
                        <div className='flex gap-2'>
                            <Button className="text-[#868686] border bg-white font-normal text-[16px] p-6 gap-2
                            hover:text-[#868686] hover:bg-white"
                                onClick={() => setConfirmResetDialogOpen(true)}
                            >
                                <Image
                                    src={IMAGES.RESET}
                                    width={20}
                                    height={20}
                                    alt="Reset Icon"
                                />
                                <span>Reset Password</span>
                            </Button>
                            <Button className="text-[#868686] border bg-white font-normal text-[16px] p-6 gap-2
                            hover:text-[#868686] hover:bg-white"
                                onClick={() => setConfirmInviteDialogOpen(true)}
                            >
                                <Image
                                    src={IMAGES.REINVITE}
                                    width={20}
                                    height={20}
                                    alt="Reinvite Icon"
                                />
                                <span>Reinvite</span>
                            </Button>
                            <Button className="text-[#868686] border bg-white p-6 gap-2
                            hover:text-[#868686] hover:bg-white font-normal text-[16px]"
                                onClick={() => setRemoveDialogOpen1(true)}
                            >
                                <Image
                                    src={IMAGES.REMOVE}
                                    width={20}
                                    height={20}
                                    alt="Remove Icon"
                                />
                                <span>Remove</span>
                            </Button>
                        </div>
                    </div>

                    <div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead></TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Role</TableHead>
                                    <TableHead>Device</TableHead>
                                    <TableHead>Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell>
                                            <Checkbox
                                                checked={selectedRows.includes(row.id)}
                                                onCheckedChange={() => handleCheckboxChange(row.id)}
                                            />
                                        </TableCell>
                                        <TableCell className="p-3 flex items-center text-center  gap-2">
                                            <div className='border p-2 py-1 bg-custom-blue rounded-full text-white font-medium'>AL</div>
                                            {row.name}
                                        </TableCell>
                                        <TableCell>{row.email}</TableCell>
                                        <TableCell>{row.role}</TableCell>
                                        <TableCell className=''>
                                            <div className='flex gap-2'>
                                                <Link href="#">
                                                    <Image
                                                        src={IMAGES.ANDROID}
                                                        width={20}
                                                        height={20}
                                                        alt="Android Icon"
                                                    />
                                                </Link>
                                                <Link href="#">
                                                    <Image
                                                        src={IMAGES.IOS}
                                                        width={20}
                                                        height={20}
                                                        alt="IOS Icon"
                                                    />
                                                </Link>
                                                <Link href="#">
                                                    <Image
                                                        src={IMAGES.BROWSER}
                                                        width={20}
                                                        height={20}
                                                        alt="Browser Icon"
                                                    />
                                                </Link>
                                            </div>
                                        </TableCell>
                                        <TableCell >
                                            <div className='flex gap-2'>
                                                <Link href="#">
                                                    <Image
                                                        src={IMAGES.RESET}
                                                        width={20}
                                                        height={20}
                                                        alt="Reset Icon"
                                                    />
                                                </Link>
                                                <Link href="#">
                                                    <Image
                                                        src={IMAGES.REINVITE}
                                                        width={20}
                                                        height={20}
                                                        alt="Reinvite Icon"
                                                    />
                                                </Link>
                                                <Link href="#">
                                                    <Image
                                                        src={IMAGES.REMOVE}
                                                        width={20}
                                                        height={20}
                                                        alt="Remove Icon"
                                                    />
                                                </Link>
                                                <Link href="#">
                                                    <Image
                                                        src={IMAGES.INSIGHT}
                                                        width={20}
                                                        height={20}
                                                        alt="Insights Icon"
                                                    />
                                                </Link>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <div className='flex justify-between border-t text-custom-blue p-1'>
                            <p>Page 1 / 9</p>
                            <p>10/80</p>
                        </div>
                    </div>

                </div>
            </main>

            <Dialog open={isUserDialogOpen} onOpenChange={setIsUserDialogOpen}>
                <DialogContent className="w-80 max-w-sm rounded-lg p-6">
                    <div className="flex items-center justify-center">
                        <div className="w-12 h-12 flex items-center justify-center bg-custom-blue text-white font-bold rounded-full mb-4">
                            +
                        </div>
                    </div>
                    <DialogHeader className="text-center mb-4">
                        <DialogTitle className="text-2xl font-semibold text-gray-600 flex justify-center">New User</DialogTitle>
                        <DialogDescription className=" text-[#868686] underline flex justify-center">
                            12/100 Users Available
                        </DialogDescription>
                    </DialogHeader>

                    <form className="space-y-4 p-2">
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <Label htmlFor="name" className='font-bold text-gray-600'>
                                    First Name
                                </Label>
                                <Input
                                    type="text"
                                    placeholder="John"
                                    className='border-custom-blue focus:outline-none focus:ring-custom-blue mb-4'
                                />
                            </div>
                            <div className="w-1/2">
                                <Label htmlFor="name" className='font-bold text-gray-600'>
                                    Last Name
                                </Label>
                                <Input
                                    type="text"
                                    placeholder="Doe"
                                    className='border-custom-blue focus:outline-none focus:ring-custom-blue mb-4'
                                />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="name" className='font-bold text-gray-600'>
                                Email Address
                            </Label>
                            <Input
                                type="email"
                                placeholder="johndoe@gmail.com"
                                className='border-custom-blue focus:outline-none focus:ring-custom-blue mb-4'
                            />
                        </div>
                    </form>

                    <div className="flex justify-between mt-6">
                        <Button
                            onClick={() => setIsUserDialogOpen(false)}
                            className="px-6 py-5 font-semibold bg-transparent border rounded-md text-custom-blue border-custom-blue hover:bg-custom-blue hover:text-white"
                        >
                            Go Back
                        </Button>
                        <Button
                            onClick={handleConfirmUserDialogOpen}
                            className="px-6 py-5 font-semibold bg-custom-blue text-white rounded-md hover:bg-custom-blue"
                        >
                            Send Invite
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>

            <ConfirmModal title='New User Added' imageSrc={IMAGES.AVTAR} btnName="OK" confirmDialogOpen={confirmUserDialogOpen} setConfirmDialogOpen={setConfirmUserDialogOpen} />

            <RemoveModal title="Remove User?" discription="Mor Twizer" email="twizermor@gmail.com" imageSrc={IMAGES.REMOVE} isDialogOpen={removeDialogOpen1} setDialogOpen={setRemoveDialogOpen1} onNext={handleCheckRemoveDialogOpen} />
            <RemoveModal title="Remove User?" discription="3 users have been selected" imageSrc={IMAGES.REMOVE} isDialogOpen={removeDialogOpen2} setDialogOpen={setRemoveDialogOpen2} onNext={handleConfirmRemoveDialogOpen} />
            <ConfirmModal title='User has been removed' imageSrc={IMAGES.THUMB} btnName="Continue" confirmDialogOpen={confirmRemoveDialogOpen} setConfirmDialogOpen={setConfirmRemoveDialogOpen} />

            <ConfirmModal title='Invite sent' imageSrc={IMAGES.REINVITE} btnName="OK!" confirmDialogOpen={confirmInviteDialogOpen} setConfirmDialogOpen={setConfirmInviteDialogOpen} />
            <ConfirmModal title='Reset Successfully Done' discription='Email has been sent to the selected user(s)' btnName="Proceed" confirmDialogOpen={confirmResetDialogOpen} setConfirmDialogOpen={setConfirmResetDialogOpen} />

        </div>
    )
}
