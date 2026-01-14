import { Footer } from "@/components/Footer";

export default function DisclaimerPage() {
    return (
        <main className="flex flex-col min-h-screen pt-24">
            <div className="container px-6 py-12 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">Liability Disclaimer</h1>

                <div className="prose prose-invert max-w-none text-silver-dim">
                    <section className="mb-8 p-6 border border-red-500/20 bg-red-900/10 rounded-lg">
                        <h2 className="text-xl font-bold text-red-400 mb-4">CRITICAL WARNING</h2>
                        <p className="mb-4">
                            ATLAS NOMOS IS EXPERIMENTAL SOFTWARE. USE AT YOUR OWN RISK.
                        </p>
                        <p>
                            THE AUTHORS AND CONTRIBUTORS OF THIS SOFTWARE ASSUME NO LIABILITY FOR DAMAGES, DIRECT OR INDIRECT,
                            ARISING FROM THE USE OF THIS SYSTEM. THIS INCLUDES, BUT IS NOT LIMITED TO, FINANCIAL LOSS,
                            DATA CORRUPTION, SYSTEM FAILURE, OR LEGAL COMPLIANCE VIOLATIONS.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">No Warranty</h2>
                        <p>
                            The software is provided "AS IS", without warranty of any kind, express or implied, including but not limited
                            to the warranties of merchantability, fitness for a particular purpose and noninfringement.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Not Legal Compliance</h2>
                        <p>
                            While ATLAS assists in enforcing technical governance policies, deploying this system does not automatically
                            ensure compliance with laws such as the EU AI Act, GDPR, or CCPA. It is a tool to aid in compliance,
                            not a replacement for legal counsel.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
