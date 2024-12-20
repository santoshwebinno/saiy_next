"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Checkbox } from "@/components/ui/checkbox";
import IMAGES from '@/Middleware/images';

import { ChartColumnBig, Mail, RotateCw, Trash, ThumbsUp, UserRound } from "lucide-react";

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
                    <Button className="text-white bg-custom-blue text-[20px] font-[590] p-6 gap-2
                            hover:text-white hover:bg-custom-blue"
                        onClick={() => setIsUserDialogOpen(true)}
                    >
                        <UserRound />
                        <span>+ New User</span>
                    </Button>
                </div>
                <div className='flex gap-2'>
                    <Button className="text-[#868686] border bg-white font-normal text-[16px] p-6 gap-2
                            hover:text-[#868686] hover:bg-white"
                        onClick={() => setConfirmResetDialogOpen(true)}
                    >
                        <RotateCw />
                        <span>Reset Password</span>
                    </Button>
                    <Button className="text-[#868686] border bg-white font-normal text-[16px] p-6 gap-2
                            hover:text-[#868686] hover:bg-white"
                        onClick={() => setConfirmInviteDialogOpen(true)}
                    >
                        <Mail />
                        <span>Reinvite</span>
                    </Button>
                    <Button className="text-[#868686] border bg-white p-6 gap-2
                            hover:text-[#868686] hover:bg-white font-normal text-[16px]"
                        onClick={() => setRemoveDialogOpen1(true)}
                    >
                        <Trash />
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
                                <TableCell>
                                    <div className='flex justify-around text-[#868686]'>
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
                                <TableCell>
                                    <div className='flex justify-around text-[#868686]'>
                                        <Link href="#">
                                            <RotateCw width={20} height={20} />
                                        </Link>
                                        <Link href="#">
                                            <Mail width={20} height={20} />
                                        </Link>
                                        <Link href="#">
                                            <Trash className='text-[#ff2d55]' width={20} height={20} />
                                        </Link>
                                        <Link href="#">
                                            <ChartColumnBig className='text-custom-blue' width={20} height={20} />
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

            <AddNewModal title="New Account" emailLabel="Admin Email Address" cName="Company Name" logo={true} isAddDialogOpen={isUserDialogOpen} setIsAddDialogOpen={setIsUserDialogOpen} onNext={handleConfirmUserDialogOpen} />
            <ConfirmModal title='New Account Added' btnName="OK" confirmDialogOpen={confirmUserDialogOpen} setConfirmDialogOpen={setConfirmUserDialogOpen} />

            <ConfirmModal title='Reset Successfully Done' discription='Email has been sent to the selected user(s)' btnName="Proceed" confirmDialogOpen={confirmResetDialogOpen} setConfirmDialogOpen={setConfirmResetDialogOpen} />
            <ConfirmModal title='Invite sent' icon={Mail} btnName="OK!" confirmDialogOpen={confirmInviteDialogOpen} setConfirmDialogOpen={setConfirmInviteDialogOpen} />

            <RemoveModal title="Remove User?" discription="Mor Twizer" email="twizermor@gmail.com" icon={Trash} isDialogOpen={removeDialogOpen1} setDialogOpen={setRemoveDialogOpen1} onNext={handleCheckRemoveDialogOpen} />
            <RemoveModal title="Remove User?" discription="3 users have been selected" icon={Trash} isDialogOpen={removeDialogOpen2} setDialogOpen={setRemoveDialogOpen2} onNext={handleConfirmRemoveDialogOpen} />
            <ConfirmModal title='User has been removed' icon={ThumbsUp} btnName="Continue" confirmDialogOpen={confirmRemoveDialogOpen} setConfirmDialogOpen={setConfirmRemoveDialogOpen} />

        </div>
    )
}
