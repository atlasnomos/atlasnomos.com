"use client";

import { motion } from "framer-motion";

export function Kernel() {
    return (
        <section id="kernel" className="py-32 relative overflow-hidden">
            <div className="container px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <div>
                    <div className="text-gold text-sm font-bold tracking-[0.2em] mb-4 border-b border-gold/30 inline-block pb-1">HOW IT WORKS</div>
                    <h2 className="text-4xl font-bold text-silver-bright mb-6">The Governance Kernel</h2>
                    <p className="text-silver-dim text-lg mb-12 leading-relaxed">
                        ATLAS isn't just another agent framework. It is a <strong>Ring-Based Operating System</strong> for AI.
                    </p>

                    <div className="space-y-8">
                        {[
                            { title: "Ring-0: The Constitution", desc: "Immutable invariants that the AI cannot override. \"Do not delete without backup.\" \"Do not commit without tests.\"" },
                            { title: "Ring-1: The Bridge", desc: "A secure MCP interface that sanitizes all inputs and outputs between the IDE and the Model." },
                            { title: "Ring-2: The Hive", desc: "Specialized sub-agents (Planner, Reviewer, Auditor) that check each other's work before code touches disk." },
                        ].map((feature, i) => (
                            <div key={i} className="flex gap-4 group">
                                <div className="h-full flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full border border-gold/50 flex items-center justify-center text-gold text-xs font-mono bg-navy-card">{i}</div>
                                    {i !== 2 && <div className="w-[1px] h-full bg-white/10 my-2 group-hover:bg-gold/30 transition-colors" />}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-2">{feature.title}</h4>
                                    <p className="text-silver-dim opacity-80">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3D Ring Animation (CSS+Framer) */}
                <div className="relative h-[400px] flex items-center justify-center">
                    <div className="relative w-[300px] h-[300px] perspective-[1000px]">
                        <motion.div
                            animate={{ rotateX: 60, rotateZ: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full border-2 border-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                        >
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-navy px-2 py-0.5 text-[10px] text-gold border border-gold/30 rounded">Ring 0</span>
                        </motion.div>

                        <motion.div
                            animate={{ rotateX: 60, rotateZ: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-silver shadow-[0_0_15px_rgba(188,198,204,0.1)]"
                        >
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-navy px-2 py-0.5 text-[10px] text-silver border border-silver/30 rounded">Ring 1</span>
                        </motion.div>

                        <motion.div
                            animate={{ rotateX: 60, rotateZ: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-navy-light border-dashed"
                        >
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-navy px-2 py-0.5 text-[10px] text-silver-dim border border-navy-light/30 rounded">Ring 2</span>
                        </motion.div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-radial from-gold to-[#5a4a15] shadow-[0_0_30px_rgba(212,175,55,0.6)]" />
                    </div>
                </div>

            </div>
        </section>
    );
}
