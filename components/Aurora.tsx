"use client";

import { Zap, Clock, Lock, ShieldCheck } from "lucide-react";

export function Aurora() {
    return (
        <section id="aurora" className="py-32 relative overflow-hidden bg-navy-light/5">
            <div className="container px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Visual Representation */}
                <div className="order-2 lg:order-1 relative">
                    <div className="relative z-10 grid grid-cols-2 gap-4">
                        <div className="space-y-4 translate-y-8">
                            <div className="bg-navy-card border border-gold/20 p-6 rounded-xl shadow-lg">
                                <Zap className="text-gold mb-4" size={32} />
                                <h4 className="text-white font-bold mb-2">Automation Support</h4>
                                <p className="text-sm text-silver-dim">Standing authority for repetitive tasks.</p>
                            </div>
                            <div className="bg-navy-card border border-white/10 p-6 rounded-xl shadow-lg">
                                <ShieldCheck className="text-green-400 mb-4" size={32} />
                                <h4 className="text-white font-bold mb-2">Sentinel Signed</h4>
                                <p className="text-sm text-silver-dim">Cryptographically delegated authority.</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-navy-card border border-white/10 p-6 rounded-xl shadow-lg">
                                <Lock className="text-red-400 mb-4" size={32} />
                                <h4 className="text-white font-bold mb-2">PROD Only</h4>
                                <p className="text-sm text-silver-dim">Completely blocked in DEV mode.</p>
                            </div>
                            <div className="bg-navy-card border border-gold/20 p-6 rounded-xl shadow-lg">
                                <Clock className="text-blue-400 mb-4" size={32} />
                                <h4 className="text-white font-bold mb-2">Frequency Limits</h4>
                                <p className="text-sm text-silver-dim">Kernel-enforced rate limiting.</p>
                            </div>
                        </div>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
                </div>

                {/* Content */}
                <div className="order-1 lg:order-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-bold tracking-widest mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                        </span>
                        NEW: Project AURORA+
                    </div>

                    <h2 className="text-4xl font-bold text-silver-bright mb-6">Governed Automation</h2>
                    <p className="text-silver-dim text-lg mb-8 leading-relaxed">
                        Conventional automation (cron, CI/CD) bypasses governance. <strong>AURORA+</strong> treats automation as <span className="text-gold">delegated authority</span>.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="mt-1"><ShieldCheck className="text-gold" size={20} /></div>
                            <div>
                                <h4 className="text-white font-bold">Sentinel-Signed Grants</h4>
                                <p className="text-silver-dim text-sm">Every automated action is pre-authorized by a signed grant defining exact scope, cost, and expiry.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1"><Lock className="text-gold" size={20} /></div>
                            <div>
                                <h4 className="text-white font-bold">Ring-0 Frequency Enforcement</h4>
                                <p className="text-silver-dim text-sm">Hostile schedulers cannot flood the system. ATLAS enforces frequency limits at the kernel level.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1"><Zap className="text-gold" size={20} /></div>
                            <div>
                                <h4 className="text-white font-bold">Fail-Close Security</h4>
                                <p className="text-silver-dim text-sm">Any violation—cost, time, or frequency—blocks execution immediately. No warnings, only enforcement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
