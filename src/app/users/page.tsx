"use client";
import React from 'react'
import HeaderBar from '@/components/ui/HeaderBar';
import Sidebar from '@/components/ui/Sidebar';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Checkbox } from "@/components/ui/checkbox"
import IMAGES from '@/Middleware/images';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface TableRowData {
    id: number;
    name: string;
    email: string;
    role: string;
}

export default function Page() {
    const [selectedRows, setSelectedRows] = React.useState<number[]>([]);
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
                            hover:text-white hover:bg-custom-blue">
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
                            hover:text-[#868686] hover:bg-white">
                                <Image
                                    src={IMAGES.RESET}
                                    width={20}
                                    height={20}
                                    alt="Reset Icon"
                                />
                                <span>Reset Password</span>
                            </Button>
                            <Button className="text-[#868686] border bg-white font-normal text-[16px] p-6 gap-2
                            hover:text-[#868686] hover:bg-white">
                                <Image
                                    src={IMAGES.REINVITE}
                                    width={20}
                                    height={20}
                                    alt="Reinvite Icon"
                                />
                                <span>Reinvite</span>
                            </Button>
                            <Button className="text-[#868686] border bg-white p-6 gap-2
                            hover:text-[#868686] hover:bg-white font-normal text-[16px]">
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
                                                <Link href="/">
                                                    <Image
                                                        src={IMAGES.ANDROID}
                                                        width={20}
                                                        height={20}
                                                        alt="Android Icon"
                                                    />
                                                </Link>
                                                <Link href="/">
                                                    <Image
                                                        src={IMAGES.IOS}
                                                        width={20}
                                                        height={20}
                                                        alt="IOS Icon"
                                                    />
                                                </Link>
                                                <Link href="/">
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
                                                <Link href="/">
                                                    <Image
                                                        src={IMAGES.RESET}
                                                        width={20}
                                                        height={20}
                                                        alt="Reset Icon"
                                                    />
                                                </Link>
                                                <Link href="/">
                                                    <Image
                                                        src={IMAGES.REINVITE}
                                                        width={20}
                                                        height={20}
                                                        alt="Reinvite Icon"
                                                    />
                                                </Link>
                                                <Link href="/">
                                                    <Image
                                                        src={IMAGES.REMOVE}
                                                        width={20}
                                                        height={20}
                                                        alt="Remove Icon"
                                                    />
                                                </Link>
                                                <Link href="/">
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
                    </div>

                </div>
            </main>
        </div>
    )
}
