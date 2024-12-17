"use client";
import React from 'react'
import HeaderBar from '@/components/ui/HeaderBar';
import Sidebar from '@/components/ui/Sidebar';

interface TableRow {
    id: number;
    name: string;
    email: string;
    role: string;
}

export default function Page() {
    const [selectedRows, setSelectedRows] = React.useState<number[]>([]);

    const data: TableRow[] = [
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
                            <button className="flex gap-2 text-white bg-custom-blue py-2 px-4 text-[20px] font-[590] rounded"
                                style={{ fontFamily: "SF Pro, sans-serif" }}
                            >
                                <img src="/images/avtar.svg" alt="Avtar Icon" className="w-5 h-5" /> <span>+ New User</span></button>
                        </div>
                        <div className='flex gap-2'>
                            <button className="flex gap-2 border py-2 px-4 text-[#868686] rounded"><img src="/images/reset.svg" alt="Reset Icon" className="w-5 h-5" /> <span>Reset Password</span></button>
                            <button className="flex gap-2 border py-2 px-4 text-[#868686] rounded"><img src="/images/reinvite.svg" alt="Reinvite Icon" className="w-5 h-5" /> <span>Reinvite</span></button>
                            <button className="flex gap-2 border py-2 px-4 text-[#868686] rounded"><img src="/images/remove.svg" alt="Remove Icon" className="w-5 h-5" /> <span>Remove</span></button>
                        </div>
                    </div>

                    <div>
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    {/* <th className="p-3 border-b text-left">
                                        <input
                                            type="checkbox"
                                            onChange={(e) => handleMasterCheckboxChange(e.target.checked)}
                                            checked={selectedRows.length === data.length}
                                        />
                                    </th> */}
                                    <th></th>
                                    <th className="p-3 border-b text-left">Name</th>
                                    <th className="p-3 border-b text-left">Email</th>
                                    <th className="p-3 border-b text-left">Role</th>
                                    <th className="p-3 border-b text-left">Device</th>
                                    <th className="p-3 border-b text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row) => (
                                    <tr
                                        key={row.id}
                                        className={`hover:bg-gray-50 ${selectedRows.includes(row.id) ? "bg-blue-50" : ""
                                            }`}
                                    >
                                        <td className="p-3 border-b">
                                            <input
                                                type="checkbox"
                                                checked={selectedRows.includes(row.id)}
                                                onChange={() => handleCheckboxChange(row.id)}
                                            />
                                        </td>

                                        <td className="p-3 border-b flex items-center text-center  gap-2">
                                            <div className='border p-2 py-1 bg-custom-blue rounded-full text-white font-medium'>AL</div>
                                            {row.name}</td>

                                        <td className="p-3 border-b">{row.email}</td>
                                        <td className="p-3 border-b">{row.role}</td>
                                        <td className="p-0 border-b">
                                            <button
                                                className="px-3 py-1  text-white rounded "
                                                onClick={() => alert(`Edit ${row.name}`)}
                                            >
                                                <img src="/images/android.svg" alt="Reset Icon" className="w-5 h-5" />
                                            </button>
                                            <button
                                                className="px-3 py-1  text-white rounded "
                                                onClick={() => alert(`Edit ${row.name}`)}
                                            >
                                                <img src="/images/ios.svg" alt="Reset Icon" className="w-5 h-5" />
                                            </button>
                                            <button
                                                className="px-3 py-1  text-white rounded "
                                                onClick={() => alert(`Edit ${row.name}`)}
                                            >
                                                <img src="/images/browser.svg" alt="Reset Icon" className="w-5 h-5" />
                                            </button>
                                        </td>

                                        <td className="p-0 border-b">
                                            <button
                                                className="px-3 py-1  text-white rounded "
                                                onClick={() => alert(`Edit ${row.name}`)}
                                            >
                                                <img src="/images/reset.svg" alt="Reset Icon" className="w-5 h-5" />
                                            </button>
                                            <button
                                                className="px-3 py-1  text-white rounded "
                                                onClick={() => alert(`Reinvite ${row.name}`)}
                                            >
                                                <img src="/images/reinvite.svg" alt="Reinvite Icon" className="w-5 h-5" />
                                            </button>
                                            <button
                                                className="ml-2 px-3 py-1  text-white rounded"
                                                onClick={() => alert(`Delete ${row.name}`)}
                                            >
                                                <img src="/images/remove.svg" alt="Remove Icon" className="w-5 h-5" />
                                            </button>
                                            <button
                                                className="ml-2 px-3 py-1  text-white rounded"
                                                onClick={() => alert(`Insights ${row.name}`)}
                                            >
                                                <img src="/images/insights.svg" alt="Insights Icon" className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </main>
        </div>
    )
}
