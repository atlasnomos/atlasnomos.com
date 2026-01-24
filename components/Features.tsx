"use client";

import { AlertTriangle, Zap, ShieldAlert, Lock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function Features() {
    const problems = [
        {
            category: "Why Policy Fails",
            items: [
                {
                    title: "Hallucinated Dependencies",
                    icon: <AlertTriangle className="text-gold" size={24} />,
                    desc: "Agents often invent packages or download unverified code.",
                },
                {
                    title: "Silent Failures",
                    icon: <Zap className="text-gold" size={24} />,
                    desc: "When an agent fails, it executes retries without audit trails.",
                }
            ]
        },
        {
            category: "What ATLAS Enforces",
            items: [
                {
                    title: "Strict Execution Boundaries",
                    icon: <ShieldAlert className="text-gold" size={24} />,
                    desc: "Allow-List Only fs/net policies. 100% Offline (Local Governance Mode) by default. No telemetry.",
                },
                {
                    title: "PROD Mode Enforcement",
                    icon: <Lock className="text-gold" size={24} />,
                    desc: "In PROD, ATLAS is fail-close. Any invariant violation (config drift, bad signature) halts execution instantly.",
                }
            ]
        }
    ];

    return (
        <section id="problem" className="py-24 bg-navy-light/10">
            <div className="container px-6">
                <div className="grid md:grid-cols-2 gap-12 text-left">
                    {problems.map((group, i) => (
                        <div key={i} className="space-y-6">
                            <h3 className="text-gold text-xs font-bold tracking-widest uppercase border-b border-white/10 pb-2">{group.category}</h3>
                            <div className="space-y-4">
                                {group.items.map((item, j) => (
                                    <Card key={j} className="bg-navy-card/50 border-white/10 hover:border-white/20 transition-colors">
                                        <CardContent className="p-6 flex gap-4 items-start">
                                            <div className="mt-1 bg-navy p-2 rounded-lg border border-white/5 shrink-0">{item.icon}</div>
                                            <div>
                                                <h4 className="text-lg font-bold text-silver-bright mb-2">{item.title}</h4>
                                                <p className="text-silver-dim text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
