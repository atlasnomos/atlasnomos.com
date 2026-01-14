"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "The Risk", href: "#problem" },
        { name: "Kernel", href: "#kernel" },
        { name: "Compliance", href: "#compliance" },
        { name: "Sentinel", href: "#sentinel" },
    ];

    return (
        <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-navy/85 backdrop-blur-md shadow-lg">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 transition-transform group-hover:scale-105">
                        <Image
                            src="/assets/logo.png"
                            alt="ATLAS Shield Logo"
                            fill
                            className="object-contain drop-shadow-md"
                        />
                    </div>
                    <span className="font-bold text-xl tracking-wide text-silver-bright group-hover:text-white transition-colors">
                        ATLAS NOMOS
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-silver-dim hover:text-silver-bright transition-colors hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button
                        asChild
                        variant="outline"
                        className="border-white/20 bg-white/5 text-silver-bright hover:bg-white/10 hover:border-silver-bright"
                    >
                        <Link href="#download">Get v1.1</Link>
                    </Button>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-silver-bright p-2"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-navy/95 border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-silver-dim hover:text-silver-bright"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button
                        asChild
                        className="w-full bg-silver-bright text-navy hover:bg-white"
                    >
                        <Link href="#download" onClick={() => setIsOpen(false)}>
                            Get v1.1
                        </Link>
                    </Button>
                </div>
            )}
        </header>
    );
}
