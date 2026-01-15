"use client";

import { Copy, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Download() {
    const copyCommand = () => {
        navigator.clipboard.writeText("npm install -g @atlas/cli");
        // Show toast here if we had toast
    };

    return (
        <section id="download" className="py-32 text-center">
            <div className="container px-6">
                <h2 className="text-4xl font-bold text-silver-bright mb-4">Take Control.</h2>
                <p className="text-xl text-silver-dim mb-12">Initialize your first governed session today.</p>

                <div className="max-w-xl mx-auto mb-16">
                    <div className="bg-black border border-white/20 rounded-lg p-6 flex flex-col md:flex-row items-center gap-4 shadow-xl">
                        <div className="flex-1 font-mono text-left w-full flex items-center gap-3 text-lg">
                            <span className="text-gold select-none">$</span>
                            <span className="text-silver-bright">npm install -g @atlas/cli</span>
                        </div>
                        <Button onClick={copyCommand} variant="ghost" size="sm" className="text-silver-dim hover:text-white hover:bg-white/10 shrink-0">
                            <Copy size={18} className="mr-2" /> Copy
                        </Button>
                    </div>
                </div>

                <p className="text-sm text-silver-dim/70 mb-6">Or download standalone installers:</p>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {[
                        { label: "Windows (.exe)", icon: "🪟", href: "https://github.com/atlas/atlas/releases/download/v1.1.1/atlas-installer-win-x64.exe" },
                        { label: "macOS (Universal)", icon: "🍎", href: "https://github.com/atlas/atlas/releases/download/v1.1.1/atlas-installer-macos-x64" },
                        { label: "Linux (Binary)", icon: "🐧", href: "https://github.com/atlas/atlas/releases/download/v1.1.1/atlas-installer-linux-x64" },
                    ].map((os) => (
                        <Button key={os.label} asChild variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-silver-bright h-12 px-6">
                            <Link href={os.href}><span className="mr-2">{os.icon}</span> {os.label}</Link>
                        </Button>
                    ))}
                </div>

                <div className="text-xs text-silver-dim/50 flex justify-center gap-4">
                    <span>License: MIT (Community)</span>
                    <span>•</span>
                    <span>Requirements: Node.js 18+</span>
                    <span>•</span>
                    <Link href="/deployment.html" className="hover:text-gold transition-colors underline decoration-gold/30">Read the Deployment Guide</Link>
                </div>
            </div>
        </section>
    );
}
