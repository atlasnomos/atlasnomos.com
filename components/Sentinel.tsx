"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Sentinel() {
    return (
        <section id="sentinel" className="py-32 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-light/30 pointer-events-none" />

            <div className="container px-6 relative z-10 max-w-4xl mx-auto text-center border border-gold/20 bg-navy-card/80 backdrop-blur-md p-12 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.05)]">
                <div className="w-24 h-1 bg-gold mx-auto mb-8 rounded-full" />
                <h2 className="text-4xl font-bold text-silver-bright mb-2">The Sentinel Authority</h2>
                <p className="text-gold text-sm font-bold tracking-widest uppercase mb-8">ENTERPRISE GRADE (TIER 1+)</p>

                <p className="text-lg text-silver-dim mb-10 max-w-2xl mx-auto leading-relaxed">
                    Sentinel operates outside the execution environment to prevent internal compromise or self-authorization.
                </p>

                <div className="grid md:grid-cols-3 gap-6 text-left mb-12">
                    <div className="p-4 rounded-lg bg-navy/50 border border-gold/10">
                        <strong className="text-white block mb-2 flex items-center gap-2"><Check size={16} className="text-gold" /> Team Consensus</strong>
                        <p className="text-sm text-silver-dim">Require N-of-M approvals for production deploys.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-navy/50 border border-gold/10">
                        <strong className="text-white block mb-2 flex items-center gap-2"><Check size={16} className="text-gold" /> Policy-as-Code</strong>
                        <p className="text-sm text-silver-dim">Enforce organization-wide coding standards automatically.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-navy/50 border border-gold/10">
                        <strong className="text-white block mb-2 flex items-center gap-2"><Check size={16} className="text-gold" /> Immutable Ledger</strong>
                        <p className="text-sm text-silver-dim">A permanent, tamper-evident record of all AI activity.</p>
                    </div>
                </div>

                <Button variant="outline" size="lg" className="border-gold text-gold hover:bg-gold hover:text-navy font-bold px-8">
                    Request design partner access
                </Button>
            </div>
        </section>
    );
}
