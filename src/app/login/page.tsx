"use client";
import React from 'react'
import Link from "next/link";

export default function page() {
    return (

        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <div className="w-1/3">
            <div className='flex flex-col items-center justify-center w-full'>
                <img src='/images/logohome.png' alt='Home Logo' className='h-48 w-48' />
                <h1 className="text-4xl font-bold leading-tight text-center text-custom-blue">Login into your account</h1>
                <p>Please fill the details and sign in</p>
            </div>

            <div className='flex flex-col items-start justify-center w-full mt-10'>
                <label className="mb-3" htmlFor="email">Email Address</label>
                <input
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                    id="email"
                    type="text"
                    value=""
                    placeholder="Email Address"
                />
                <label className="mb-3" htmlFor="password">Password</label>
                <input
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                    id="password"
                    type="password"
                    value=""
                    placeholder="Enter password"
                />
                <a href='' className="w-48 h-4 mb-8 text-right block w-full font-bold text-custom-blue">Forgot Password</a>
                <button className="w-full p-3 bg-slate-600 text-white rounded-sm hover:bg-custom-blue">Sign in</button>
                <Link href="/signup">Visit Signup page</Link>
            </div>
          </div>
        </div>
    )
}
