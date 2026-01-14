"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
    const [text, setText] = useState("");
    const fullText = "atlas_session — v1.1.1 (LGM)";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-navy-light/20 blur-[100px] rounded-full" />
                <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] bg-gold/5 blur-[80px] rounded-full" />
            </div>

            <div className="container px-6 z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-navy/60 backdrop-blur-sm text-gold text-xs font-bold tracking-wider mb-6 shadow-lg shadow-black/20">
                        v1.1.1 BETA (Experimental)
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-silver-bright">
                        Stop hoping your agents behave.{" "}
                        <span className="bg-gradient-to-r from-silver-bright to-silver-dim bg-clip-text text-transparent">
                            Audit them.
                        </span>
                    </h1>
                    <p className="text-xl text-silver-dim mb-8 leading-relaxed max-w-lg">
                        An experimental <strong>Governance Framework</strong> for supervised AI agents.
                        Technical controls for execution boundaries and decision logging.
                        <br />
                        <span className="text-sm opacity-70 mt-2 block">*Not a substitute for legal compliance review.</span>
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button asChild size="lg" className="bg-gradient-to-br from-silver-bright to-silver hover:brightness-110 text-navy font-bold shadow-lg shadow-silver/10 h-12 px-8">
                            <Link href="#download">Initialize Sovereignty</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-white/10 text-silver-bright hover:bg-white/5 h-12 px-8">
                            <Link href="#problem">Why Governance?</Link>
                        </Button>
                    </div>
                </motion.div>

                {/* Terminal/Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="rounded-xl border border-white/10 bg-[#010a1e]/90 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden transform hover:-translate-y-1 transition-transform duration-500">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                            <div className="ml-4 font-mono text-xs text-white/30 truncate">atlas-kernel — bash — 80x24</div>
                        </div>
                        <div className="p-6 font-mono text-sm text-silver-bright min-h-[300px]">
                            <div className="mb-2">
                                <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="opacity-80">atlas doctor --verbose</span>
                            </div>
                            <div className="opacity-90 space-y-1">
                                <div className="text-white/50">Running system diagnostics...</div>
                                <div><span className="text-green-500">✔</span> Kernel integrity verified (Ring-0)</div>
                                <div><span className="text-green-500">✔</span> Sentinel connection established</div>
                                <div><span className="text-green-500">✔</span> Invariant enforcement active</div>
                                <div className="text-white/50 my-2">-- Audit Log Stream --</div>
                                <div className="pl-4 border-l-2 border-white/10 space-y-1 text-xs">
                                    <div className="flex gap-2"><span className="text-white/30">[22:14:01]</span> <span className="text-blue-300">ALLOW</span> fs.read (config.json)</div>
                                    <div className="flex gap-2"><span className="text-white/30">[22:14:05]</span> <span className="text-red-400">DENY</span> net.connect (unauthorized-api.com)</div>
                                    <div className="flex gap-2"><span className="text-white/30">[22:14:06]</span> <span className="text-yellow-400">WARN</span> policy.violation (INV-NET-01)</div>
                                </div>
                            </div>
                            <motion.div
                                className="mt-4 flex items-center gap-2"
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <div className="w-2 h-4 bg-silver-bright/50" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Decorative Rings behind terminal */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gold/10 rounded-full animate-[spin_20s_linear_infinite]" />
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-silver/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                </motion.div>
            </div>
        </section>
    );
}
