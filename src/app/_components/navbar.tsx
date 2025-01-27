"use client"

import Link from "next/link"

export default function Navbar() {
    return (
        <nav id="navbar" className="fixed w-screen py-3 border-b">
            <div id="menu" className="flex gap-2 justify-center items-center text-xs">
                <Link id="redirect-home" href="/">Home</Link>
                <Link id="redirect-contact" href="/contact">About</Link>
                <Link id="redirect-contact" href="/contact">Contact</Link>
                <Link id="redirect-error" href="/test-error">Error</Link>
            </div>
        </nav>
    )
}