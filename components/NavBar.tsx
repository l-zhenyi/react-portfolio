'use client';

import Link from 'next/link';

export function Navbar() {
    return (
    <div className="flex flex-col items-center pb-0 p-4 w-full mt-5 md:flex-row md:justify-between md:items-center max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-5 mb-4 md:mb-0 text-center md:text-left">
                <Link href="/" className="text-xl font-bold">
                    L. Zhen Yi
                </Link>
                <span className="italic font-normal text-sm">
                    / zhēn yí /
                </span>
                </div>
                     <div className="flex flex-wrap justify-center space-x-2 text-base font-bold gap-2 md:flex-nowrap md:justify-end md:space-x-4 md:gap-0">
                        <Link href="/" className="text-slate-400 hover:underline">Home</Link>
                        <Link href="/about" className="text-slate-400 hover:underline">About</Link>
                        <Link href="/projects" className="text-slate-400 hover:underline">Projects</Link>
                        <Link href="/assets/Lim_ZhenYi_Resume.pdf" className="text-slate-400 hover:underline">Resume</Link>  
                        {/* TODO: Need to add these pages back if they are needed (i.e. when I can write more)                       */}
                        {/* <Link href="/now" className="text-slate-400 hover:underline">Now</Link>
                        <Link href="/misc" className="text-slate-400 hover:underline">Misc.</Link>                        */}
                    </div>
            </div>
    )
}