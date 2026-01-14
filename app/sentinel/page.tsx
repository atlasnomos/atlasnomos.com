import { Footer } from "@/components/Footer";

export default function SentinelPage() {
    return (
        <main className="flex flex-col min-h-screen pt-24">
            <div className="container px-6 py-12 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                    <div className="flex-1">
                        <h1 className="text-5xl font-bold text-white mb-6">ATLAS Sentinel</h1>
                        <p className="text-xl text-silver mb-6">
                            Real-time Authorization Oracle & SIEM Dashboard.
                        </p>
                        <p className="text-silver-dim leading-relaxed">
                            Sentinel observes the Kernel. It provides a real-time view into the decision-making process
                            of your autonomous swarm, offering "Stop Button" capability and detailed visual analytics
                            of governance rejection rates.
                        </p>
                    </div>
                    <div className="flex-1 relative h-64 w-full bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                        {/* Placeholder for visual */}
                        <span className="text-white/20 font-mono">Sentinel Dashboard Mockup</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-3">Live Monitoring</h3>
                        <p className="text-silver-dim">
                            Watch agent decisions stream in real-time. Filter by agent ID, tool use, or rejection reason.
                        </p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-3">Emergency Halt</h3>
                        <p className="text-silver-dim">
                            Global or granular kill switches. Immediately revoke credentials for a specific agent
                            or the entire swarm if anomalies are detected.
                        </p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-3">Integration Ready</h3>
                        <p className="text-silver-dim">
                            Exports logs to standard formats for integration with enterprise SIEMs like Splunk or Datadog.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
