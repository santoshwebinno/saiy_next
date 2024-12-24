"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Checkbox } from "@/components/ui/checkbox";
import IMAGES from '@/Middleware/images';

import { Mail, RotateCw, Trash, ThumbsUp, UserRound } from "lucide-react";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import ConfirmModal from '@/components/ConfirmModal';
import RemoveModal from '@/components/RemoveModal';
import AddNewModal from '@/components/AddNewModal';

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
        <div className='w-11/12'>
            <h1
                className="text-[22px] text-custom-blue font-bold leading-[26.25px] text-left decoration-skip-ink-none mb-5"
            >
                Users
            </h1>

            <div className='flex justify-between mb-8'>
                <div>
                    <Button className="text-white bg-custom-blue text-xl font-medium p-6 gap-2
                            hover:text-white hover:bg-custom-blue"
                        onClick={() => setIsUserDialogOpen(true)}
                    >
                        <UserRound />
                        <span>+ New User</span>
                    </Button>
                </div>
                <div className='flex gap-2'>
                    <Button className="text-custom-brown-lite border bg-white font-normal text-base p-6 gap-2
                            hover:text-custom-brown-lite hover:bg-white"
                        onClick={() => setConfirmResetDialogOpen(true)}
                    >
                        <RotateCw />
                        <span>Reset Password</span>
                    </Button>
                    <Button className="text-custom-brown-lite border bg-white font-normal text-base p-6 gap-2
                            hover:text-custom-brown-lite hover:bg-white"
                        onClick={() => setConfirmInviteDialogOpen(true)}
                    >
                        <Mail />
                        <span>Reinvite</span>
                    </Button>
                    <Button className="text-custom-brown-lite border bg-white p-6 gap-2
                            hover:text-custom-brown-lite hover:bg-white font-normal text-base"
                        onClick={() => setRemoveDialogOpen1(true)}
                    >
                        <Trash />
                        <span>Remove</span>
                    </Button>
                </div>
            </div>

            <div>
                <Table className='bg-custom-ip'>
                    <TableHeader>
                        <TableRow>
                            <TableHead></TableHead>
                            <TableHead className='font-bold text-custom-gray'>Name</TableHead>
                            <TableHead className='font-bold text-custom-gray'>Email</TableHead>
                            <TableHead className='font-bold text-custom-gray'>Role</TableHead>
                            <TableHead className='font-bold text-custom-gray'>Device</TableHead>
                            <TableHead className='font-bold text-custom-gray'>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>
                                    <Checkbox className='w-5 h-5 rounded-sm border border-custom-checkbox-b data-[state=checked]:bg-custom-checkbox data-[state=checked]:border-custom-checkbox font-bold'
                                        checked={selectedRows.includes(row.id)}
                                        onCheckedChange={() => handleCheckboxChange(row.id)}
                                    />
                                </TableCell>
                                <TableCell className="p-3 flex items-center text-center gap-2 text-custom-gray-lite font-bold text-xs">
                                    <div className='border p-2 bg-custom-blue rounded-full text-white font-semibold'>AL</div>
                                    {row.name}
                                </TableCell>
                                <TableCell className='text-custom-gray-lite font-normal text-xs'>{row.email}</TableCell>
                                <TableCell className='text-custom-gray-lite font-normal text-xs'>{row.role}</TableCell>
                                <TableCell>
                                    <div className='flex justify-around items-center text-custom-brown-lite'>
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
                                                width={18}
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
                                <TableCell>
                                    <div className='flex justify-around items-center text-custom-brown-lite'>
                                        <Link href="#"
                                            onClick={() => setConfirmResetDialogOpen(true)}
                                        >
                                            <RotateCw width={20} height={20} />
                                        </Link>
                                        <Link href="#"
                                            onClick={() => setConfirmInviteDialogOpen(true)}
                                        >
                                            <Mail width={20} height={20} />
                                        </Link>
                                        <Link href="#"
                                            onClick={() => setRemoveDialogOpen1(true)}
                                        >
                                            <Trash className='text-custom-red' width={20} height={20} />
                                        </Link>
                                        <Link href="#">
                                            <Image src={IMAGES.INSIGHTS} alt='Insight Icon' width={20} height={20} />
                                        </Link>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className='flex justify-between border-t text-custom-blue p-1 pt-3'>
                    <p>Page 1 / 9</p>
                    <p>10/80</p>
                </div>
            </div>

            <AddNewModal title="New Account" emailLabel="Admin Email Address*" cName="Company Name*" logo={true} isAddDialogOpen={isUserDialogOpen} setIsAddDialogOpen={setIsUserDialogOpen} onNext={handleConfirmUserDialogOpen} />
            <ConfirmModal title='New Account Added' btnName="OK" confirmDialogOpen={confirmUserDialogOpen} setConfirmDialogOpen={setConfirmUserDialogOpen} cust_class="mb-12" />

            <ConfirmModal title='Reset Successfully Done' discription='Email has been sent to the selected user(s)' btnName="Proceed" confirmDialogOpen={confirmResetDialogOpen} setConfirmDialogOpen={setConfirmResetDialogOpen} />
            <ConfirmModal title='Invite sent' mIicon={Mail} btnName="OK!" confirmDialogOpen={confirmInviteDialogOpen} setConfirmDialogOpen={setConfirmInviteDialogOpen} />

            <RemoveModal title="Remove User?" discription="Mor Twizer" email="twizermor@gmail.com" icon={Trash} isDialogOpen={removeDialogOpen1} setDialogOpen={setRemoveDialogOpen1} onNext={handleCheckRemoveDialogOpen} />
            <RemoveModal title="Remove User?" discription="3 users have been selected" icon={Trash} isDialogOpen={removeDialogOpen2} setDialogOpen={setRemoveDialogOpen2} onNext={handleConfirmRemoveDialogOpen} />
            <ConfirmModal title='User has been removed' icon={ThumbsUp} btnName="Continue" confirmDialogOpen={confirmRemoveDialogOpen} setConfirmDialogOpen={setConfirmRemoveDialogOpen} cust_class="text-custom-gray" />

        </div>
    )
}
