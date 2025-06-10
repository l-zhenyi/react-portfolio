'use client';


export function Navbar() {
    return (
    <div className="flex flex-col items-center pb-0 p-4 w-full mt-5 md:flex-row md:justify-between md:items-center max-w-3xl mx-auto">
        <div className="flex flex-row justify-center md:justify-start items-center gap-5 mb-4 md:mb-0 text-center md:text-left">
                <a href="/" className="text-xl font-bold">
                    L. Zhen Yi
                </a>
                <span className="italic font-normal text-sm">
                    / zhēn yí /
                </span>
                </div>
                     <div className="flex flex-wrap justify-center space-x-2 text-base font-bold gap-2 md:flex-nowrap md:justify-end md:space-x-4 md:gap-0">
                        <a href="/" className="link">Home</a>
                        <a href="/about" className="link">About</a>
                        <a href="/projects" className="link">Projects</a>
                        <a href="/assets/Lim_ZhenYi_Resume.pdf" className="link">Resume</a>  
                        <a href="/now" className="link">Now</a>
                        {/* Not sure what more to say. The website is already quite text-based. */}
                        {/* <a href="/misc" className="link">Misc.</a>                         */}
                    </div>
            </div>
    )
}