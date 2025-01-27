import Image from "next/image"

export default function HeroSection() {
    return (
        <section>
            <div className="text-center text-xl text-pink-100 font-bold mt-4">{`Hi, I'm Syahiena Maulana Syaputra!`}</div>
            <div className="text-center text-4xl text-red-400 font-black mb-4">Front-End Developer</div>
            <div className="text-center text-xs text-pink-100 font-normal">I absolutely love building interactive and responsive web applications, with a strong focus on creating great user experiences. My expertise includes React, Angular, TypeScript, as well as HTML, CSS, and JavaScript.</div>
            <Image src="/hero-section.png" alt="hero-section-img" width={400} height={400} className="place-self-center"></Image>
            <div className="text-xs text-pink-100 font-semibold mb-3 mt-2">Thanks for visiting my portfolio!</div>
            <div className="text-xs text-pink-100 font-normal">{`If you have any questions or want to collaborate, feel free to reach out. I'm excited for the opportunity to work together!`}</div>
        </section>
    )
}