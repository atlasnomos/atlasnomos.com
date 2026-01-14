"use client";

import { AlertTriangle, Zap, ShieldAlert } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function Features() {
    const problems = [
        {
            title: "Hallucinated Dependencies",
            icon: <AlertTriangle className="text-gold" size={32} />,
            desc: "Agents often invent packages or download unverified code. ATLAS enforces a strict \"Allow-List Only\" policy for all file system operations.",
        },
        {
            title: "Silent Failures",
            icon: <Zap className="text-gold" size={32} />,
            desc: "When an agent fails, it often lies. ATLAS implements Universal Memory to track every failure, retry, and decision in a permanent audit log.",
        },
        {
            title: "Data Exfiltration",
            icon: <ShieldAlert className="text-gold" size={32} />,
            desc: "Your IP is your lifeblood. ATLAS runs 100% Offline (Local Governance Mode) by default. No telemetry. No hidden uploads.",
        },
    ];

    return (
        <section id="problem" className="py-24 bg-navy-light/10">
            <div className="container px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-silver-bright mb-4">The Crisis of Unbound AI</h2>
                    <p className="text-silver-dim text-lg">Standard agents are black boxes. In enterprise, that’s a liability.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((item, i) => (
                        <Card key={i} className="bg-navy-card/50 border-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-300">
                            <CardHeader>
                                <div className="mb-4 bg-navy p-3 rounded-lg w-fit border border-white/5">{item.icon}</div>
                                <CardTitle className="text-xl text-silver-bright">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-silver-dim leading-relaxed">{item.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
