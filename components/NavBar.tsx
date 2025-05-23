'use client';

import Link from 'next/link';

export function Navbar() {
    return (
        <div className="md:sticky md:top-10 flex flex-col items-center mb-2 p-4 md:w-3xs w-full md:mt-13">
            <div>
                <div className="font-bold text-center mt-2 mb-2 md:text-left text-xl text-nowrap">
                <Link href="/"><h2>L. Zhen Yi</h2></Link>
                </div>
                    <div className="flex flex-wrap justify-center md:flex-col md:mt-10 space-x-2 md:space-x-0 md:justify-start text-base gap-2">
                        <Link href="/" className="text-slate-400 hover:underline">Home</Link>
                        <Link href="/about" className="text-slate-400 hover:underline">About</Link>
                        <Link href="/projects" className="text-slate-400 hover:underline">Projects</Link>
                        <Link href="/assets/Lim_ZhenYi_Resume.pdf" className="text-slate-400 hover:underline">Resume</Link>
                        <Link href="/now" className="text-slate-400 hover:underline">Now</Link>
                        <Link href="/etc" className="text-slate-400 hover:underline">etc.</Link>
                    </div>
            </div>
        </div>
    )
}