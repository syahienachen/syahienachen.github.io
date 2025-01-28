import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="py-3 px-4">
            <div className="text-lg font-bold mt-8">{`Hi, I'm Syahiena Maulana Syaputra!`}</div>
            <div className="text-3xl text-red-400 font-black mb-4">Front-End Developer</div>
            <div className="text-xs font-normal dark:text-slate-950">I absolutely love building interactive and responsive web applications, with a strong focus on creating great user experiences.</div>
            <div className="text-xs font-normal dark:text-slate-950 mt-1">My expertise includes React, Angular, TypeScript, as well as HTML, CSS, and JavaScript.</div>
            <Image src="/hero-section.png" alt="hero-section-img" width={400} height={400} className="place-self-center"></Image>
            <div className="p-3 bg-pink-100 rounded">
                <div className="text-xs font-semibold dark:text-slate-950 mb-3">Thanks for visiting my portfolio!</div>
                <div className="text-xs font-normal dark:text-slate-950 mb-1">If you have any questions or want to collaborate, feel free to reach out. {`I'm excited for the opportunity to work together!`}</div>
                <div className="flex justify-end items-center gap-4">
                    <button className="bg-red-400 hover:bg-red-500 px-2 py-1 rounded-md text-white text-xs font-normal">
                        <Link href="/contact">Contact</Link>
                    </button>
                </div>
            </div>
        </section>
    )
}