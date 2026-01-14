import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function KernelPage() {
    return (
        <main className="flex flex-col min-h-screen pt-24">
            <div className="container px-6 py-12 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                    <div className="flex-1">
                        <h1 className="text-5xl font-bold text-white mb-6">ATLAS Kernel</h1>
                        <p className="text-xl text-silver mb-6">
                            The Ring-0 Governance Engine. Immutable. Deterministic. Fail-Closed.
                        </p>
                        <p className="text-silver-dim leading-relaxed">
                            The ATLAS Kernel provides the foundational invariants for sovereign AI execution.
                            It operates at the lowest level of the stack, intercepting every agent syscall to ensure
                            compliance with defined constitution policies before any action is authorized.
                        </p>
                    </div>
                    <div className="flex-1 relative h-64 w-full bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                        {/* Placeholder for visual */}
                        <span className="text-white/20 font-mono">Kernel visualization</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-3">Ring Architecture</h3>
                        <p className="text-silver-dim">
                            Enforces strict isolation between cognition (Ring-2), orchestration (Ring-1), and
                            invariants (Ring-0), preventing prompt injection from reaching critical systems.
                        </p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-3">Policy Engine</h3>
                        <p className="text-silver-dim">
                            Configurable `.json` policy files that define exactly what your agents can and cannot do.
                            Hot-swappable and verifiable.
                        </p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-3">Audit Trails</h3>
                        <p className="text-silver-dim">
                            Every decision is cryptographically signed and logged. Reconstruct the entire
                            decision tree for post-incident forensics.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
