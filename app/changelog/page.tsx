import { Footer } from "@/components/Footer";

export default function ChangelogPage() {
    return (
        <main className="flex flex-col min-h-screen pt-24">
            <div className="container px-6 py-12 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">Changelog</h1>

                <div className="relative border-l border-white/10 pl-8 ml-4 space-y-12">

                    {/* Version 1.1.0 */}
                    <div className="relative">
                        <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-gold border-4 border-[#00040a]"></div>
                        <h2 className="text-2xl font-bold text-white mb-2">v1.1.0 - "Sovereignty"</h2>
                        <p className="text-sm text-silver-dim mb-4 font-mono">January 14, 2026</p>

                        <ul className="list-disc pl-5 text-silver space-y-2">
                            <li>Added <span className="text-white font-semibold">Tier-1 Policy Support</span> for high-stakes financial agents.</li>
                            <li>Introduced <span className="text-white font-semibold">Sentinel Dashboard</span> for visual governance monitoring.</li>
                            <li>Improved Kernel boot time by 40%.</li>
                            <li>Fixed race condition in Ring-1 nonce verification.</li>
                        </ul>
                    </div>

                    {/* Version 1.0.0 */}
                    <div className="relative">
                        <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-white/20 border-4 border-[#00040a]"></div>
                        <h2 className="text-2xl font-bold text-white/80 mb-2">v1.0.0 - "Genesis"</h2>
                        <p className="text-sm text-silver-dim mb-4 font-mono">December 20, 2025</p>
                        <ul className="list-disc pl-5 text-silver-dim space-y-2">
                            <li>Initial Public Release of ATLAS Kernel.</li>
                            <li>Basic Fail-Closed architecture implementation.</li>
                            <li>Support for OpenAI and Anthropic models through the proxy.</li>
                        </ul>
                    </div>

                </div>
            </div>
            <Footer />
        </main>
    );
}
