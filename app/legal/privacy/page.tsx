import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
    return (
        <main className="flex flex-col min-h-screen pt-24">
            <div className="container px-6 py-12 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

                <div className="prose prose-invert max-w-none text-silver-dim">
                    <p className="mb-6">
                        Last Updated: January 14, 2026
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Data Collection</h2>
                        <p>
                            ATLAS NOMOS is designed to be privacy-preserving by default. We do NOT collect personal data from your local
                            deployment of the ATLAS Kernel. All governance logs, audit trails, and nonce data remain within your
                            controlled infrastructure (Local or Private Cloud).
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Telemetry</h2>
                        <p>
                            Optional telemetry may be enabled for system health monitoring. This data is anonymized and strictly limited
                            to performance metrics and error rates. No model inputs or outputs are ever transmitted to our servers.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Local Storage</h2>
                        <p>
                            The System utilizes local storage mechanisms (e.g., Redis, filesystem) to persist state and enforcing
                            invariants. This data is managed entirely by you, the operator.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
