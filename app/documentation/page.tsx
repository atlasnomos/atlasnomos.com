import { Footer } from "@/components/Footer";

export default function DocumentationPage() {
    return (
        <main className="flex flex-col min-h-screen pt-24">
            <div className="container px-6 py-12 max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">Documentation</h1>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                        <h2 className="text-2xl font-bold text-white mb-4">Getting Started</h2>
                        <p className="text-silver-dim mb-4">
                            Installation guides, "Hello World" agent configuration, and first steps
                            with the ATLAS CLI.
                        </p>
                        <span className="text-gold text-sm font-mono">Read Guide &rarr;</span>
                    </div>

                    <div className="p-8 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                        <h2 className="text-2xl font-bold text-white mb-4">Kernel Reference</h2>
                        <p className="text-silver-dim mb-4">
                            Deep dive into Ring architecture, syscalls, and invariant configuration.
                        </p>
                        <span className="text-gold text-sm font-mono">View Reference &rarr;</span>
                    </div>

                    <div className="p-8 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                        <h2 className="text-2xl font-bold text-white mb-4">Sentinel Config</h2>
                        <p className="text-silver-dim mb-4">
                            Setting up the SIEM dashboard, configuring alerts, and integrating with
                            external logging providers.
                        </p>
                        <span className="text-gold text-sm font-mono">Configure Sentinel &rarr;</span>
                    </div>

                    <div className="p-8 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                        <h2 className="text-2xl font-bold text-white mb-4">API & CLI</h2>
                        <p className="text-silver-dim mb-4">
                            Complete reference for the `atlas` command line tool and internal API surface.
                        </p>
                        <span className="text-gold text-sm font-mono">View API Docs &rarr;</span>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
