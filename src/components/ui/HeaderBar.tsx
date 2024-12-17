'use client'
import React from 'react'
import { usePathname } from "next/navigation";

export default function HeaderBar() {
    const pathname = usePathname()
    const isUsersPage = `${pathname}`

    return (
        <div className="flex justify-end items-center">
            <div className="flex items-center space-x-4">
                {isUsersPage == "/users" && (<a
                    href="#"
                    className="font-normal text-[16px] text-custom-blue leading-[19.09px] text-left underline decoration-solid decoration-skip-ink-none "
                    style={{ fontFamily: "SF Pro, sans-serif" }}
                >
                    Ebligo Inc.
                </a>)}
                <a
                    href="#"
                    className="font-normal text-[16px] leading-[19.09px] text-left underline decoration-solid decoration-skip-ink-none "
                    style={{ fontFamily: "SF Pro, sans-serif" }}
                >
                    David Adi
                </a>
                <div className='border p-3 bg-custom-blue rounded-full text-white font-bold text-2xl'>DA</div>
            </div>
        </div>
    )
}
