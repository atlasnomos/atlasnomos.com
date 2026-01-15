import { Footer } from "@/components/Footer";

export default function DisclaimerPage() {
    return (
        <main className="flex flex-col min-h-screen pt-24">
            <div className="container px-6 py-12 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">Liability Disclaimer</h1>

                <div className="prose prose-invert max-w-none text-silver-dim">
                    <p className="mb-6">
                        Effective Date: January 15, 2026
                    </p>

                    <section className="mb-8 p-6 border border-red-500/30 bg-red-900/10 rounded-lg">
                        <h2 className="text-xl font-bold text-red-400 mb-4">CRITICAL NOTICE</h2>
                        <p className="mb-4 font-semibold">
                            ATLAS NOMOS IS EXPERIMENTAL SOFTWARE. IT IS PROVIDED &quot;AS-IS&quot; WITHOUT WARRANTY OF ANY KIND. BY USING THE SYSTEM, THE OPERATOR ASSUMES ALL RISK.
                        </p>
                        <p>
                            THE AUTHORS AND CONTRIBUTORS DISCLAIM ALL LIABILITY FOR DAMAGES ARISING FROM USE OF THE SYSTEM, TO THE MAXIMUM EXTENT PERMITTED BY LAW.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Definitions</h2>
                        <p className="mb-4">
                            Capitalized terms in this Disclaimer have the meanings assigned in the Terms of Use. Additionally:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>&quot;Damages&quot;</strong> means any losses, liabilities, claims, costs, expenses (including attorneys&apos; fees), judgments, penalties, fines, or other harm of any nature.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">2. No Warranty</h2>
                        <p className="mb-4">
                            THE SYSTEM IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTY OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>WARRANTIES OF MERCHANTABILITY;</li>
                            <li>FITNESS FOR A PARTICULAR PURPOSE;</li>
                            <li>TITLE AND NON-INFRINGEMENT;</li>
                            <li>ACCURACY, RELIABILITY, OR CORRECTNESS OF OUTPUTS OR GOVERNANCE ACTIONS;</li>
                            <li>UNINTERRUPTED, ERROR-FREE, OR SECURE OPERATION;</li>
                            <li>COMPLIANCE WITH ANY LAW, REGULATION, OR STANDARD;</li>
                            <li>SUITABILITY FOR PRODUCTION OR SAFETY-CRITICAL APPLICATIONS.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Excluded Damages</h2>
                        <p className="mb-4">
                            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>INDIRECT DAMAGES;</li>
                            <li>INCIDENTAL DAMAGES;</li>
                            <li>CONSEQUENTIAL DAMAGES;</li>
                            <li>PUNITIVE OR EXEMPLARY DAMAGES;</li>
                            <li>SPECIAL DAMAGES;</li>
                            <li>LOSS OF PROFITS, REVENUE, OR ANTICIPATED SAVINGS;</li>
                            <li>LOSS OF DATA OR DATA CORRUPTION;</li>
                            <li>LOSS OF GOODWILL OR REPUTATION;</li>
                            <li>BUSINESS INTERRUPTION;</li>
                            <li>REGULATORY FINES, PENALTIES, OR SANCTIONS;</li>
                            <li>CLAIMS BY THIRD PARTIES;</li>
                            <li>COSTS OF SUBSTITUTE GOODS OR SERVICES.</li>
                        </ul>
                        <p>
                            THIS EXCLUSION APPLIES REGARDLESS OF THE LEGAL THEORY (CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE), EVEN IF THE AUTHORS HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Liability Cap</h2>
                        <p>
                            THE TOTAL CUMULATIVE LIABILITY OF THE AUTHORS ARISING OUT OF OR RELATING TO THE SYSTEM OR THESE TERMS, UNDER ANY LEGAL THEORY, SHALL NOT EXCEED <strong>ONE HUNDRED UNITED STATES DOLLARS (USD $100.00)</strong>. THIS CAP APPLIES IN THE AGGREGATE AND NOT PER INCIDENT.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">5. No Compliance Guarantee</h2>
                        <p className="mb-4">
                            The System is a technical governance framework. It is <strong>not</strong> a compliance solution, certification, audit, or legal safeguard.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>The System does <strong>not</strong> ensure compliance with any law or regulation, including but not limited to: the EU AI Act, GDPR, CCPA, HIPAA, SOC 2, ISO standards, or any industry-specific requirements.</li>
                            <li>Deployment of the System does <strong>not</strong> constitute evidence of regulatory compliance.</li>
                            <li>The System does <strong>not</strong> replace legal counsel, compliance officers, or regulatory guidance.</li>
                            <li>The Operator is solely responsible for determining and achieving compliance with all applicable legal and regulatory requirements.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">6. AI Output Disclaimer</h2>
                        <p className="mb-4">
                            The System governs AI Model execution but does <strong>not</strong> control, inspect, or validate the substantive content of Outputs. The Operator acknowledges that:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Outputs may be <strong>incorrect, incomplete, misleading, biased, or harmful</strong>.</li>
                            <li>The System cannot guarantee the safety, legality, accuracy, or ethical appropriateness of Outputs.</li>
                            <li>Governance Actions (permit, deny, halt) are based on policy constraints, not content evaluation.</li>
                            <li>A &quot;permit&quot; from the System does <strong>not</strong> mean an Output is correct, safe, or legal.</li>
                            <li>The Operator must independently validate all Outputs before use, distribution, or reliance.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">7. Experimental Status</h2>
                        <p>
                            ATLAS NOMOS is experimental software under active development. The System may contain defects, vulnerabilities, or undiscovered failures. The Operator assumes all risk associated with deploying experimental software in any environment, including production environments.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">8. Acknowledgment</h2>
                        <p>
                            BY USING THE SYSTEM, THE OPERATOR ACKNOWLEDGES HAVING READ AND UNDERSTOOD THIS DISCLAIMER, AND AGREES THAT THE LIMITATIONS AND EXCLUSIONS STATED HEREIN ARE REASONABLE AND NECESSARY GIVEN THE EXPERIMENTAL NATURE OF THE SYSTEM AND THAT THE OPERATOR HAS MADE AN INDEPENDENT DECISION TO USE THE SYSTEM NOTWITHSTANDING THESE RISKS.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">9. Relationship to Terms of Use</h2>
                        <p>
                            This Disclaimer is incorporated into and forms part of the Terms of Use. In the event of any conflict between this Disclaimer and other provisions of the Terms of Use, the provision that most limits the liability of the Authors shall govern.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
