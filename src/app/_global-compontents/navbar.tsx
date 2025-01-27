"use client"

import Link from "next/link"
import { Fragment } from "react"
import Image from "next/image"

export default function Navbar() {
    return (
        <Fragment>
            {/* MOBILE */}
            <nav id="navbar" className="flex sm:hidden justify-between items-center px-3 py-[2px] w-fullborder-b">
                <div>icon</div>
                <Image src="/navbar.png" alt="navbar-img" width={40} height={40} />
            </nav>

            {/* TAB */}
            <nav id="navbar" className="hidden sm:block lg:hidden w-full py-3 border-b bg-orange-400">
                <div>TAB</div>
            </nav>

            {/* DESKTOP */}
            <nav id="navbar" className="hidden lg:block w-full py-3 border-b bg-orange-400">
                <div id="menu" className="flex gap-2 justify-center items-center text-xs">
                    <Link id="redirect-home" href="/">Home</Link>
                    <Link id="redirect-contact" href="/contact">About</Link>
                    <Link id="redirect-contact" href="/contact">Contact</Link>
                    <Link id="redirect-error" href="/test-error">Error</Link>
                </div>
            </nav>
        </Fragment>
    )
}