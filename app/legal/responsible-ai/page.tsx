import { Footer } from "@/components/Footer";

export default function ResponsibleAiPage() {
    return (
        <main className="flex flex-col min-h-screen pt-24">
            <div className="container px-6 py-12 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">Responsible AI Statement</h1>

                <div className="prose prose-invert max-w-none text-silver-dim">
                    <p className="mb-6">
                        Effective Date: January 15, 2026
                    </p>

                    <section className="mb-8 p-6 border border-silver-dim/20 bg-charcoal/50 rounded-lg">
                        <p className="text-lg">
                            ATLAS NOMOS is a <strong>Nomos-first governance framework</strong>. Its purpose is to enforce technical constraints and require judgment-before-execution in AI systems. This statement describes the philosophy underlying the System&apos;s design.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Foundational Principle: Constraint Over Capability</h2>
                        <p className="mb-4">
                            ATLAS NOMOS is designed on the principle that <strong>constraint precedes capability</strong>. The System does not aim to make AI more autonomous, creative, or powerful. It aims to make AI more bounded, auditable, and subject to human judgment.
                        </p>
                        <p>
                            We believe that responsible AI requires enforceable technical limits—not aspirational principles, ethical guidelines, or trust in model alignment. The System enforces those limits at the execution layer.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Human Responsibility and Oversight</h2>
                        <p className="mb-4">
                            <strong>The System does not absolve human responsibility.</strong> Operators who deploy ATLAS NOMOS remain fully responsible for:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Defining governance policies appropriate to their risk profile.</li>
                            <li>Configuring the System correctly under their operational environment.</li>
                            <li>Monitoring, auditing, and responding to Governance Actions.</li>
                            <li>Validating that AI Outputs are correct, lawful, and appropriate before use.</li>
                            <li>Maintaining human oversight sufficient to prevent and remediate harm.</li>
                        </ul>
                        <p>
                            The System provides mechanisms for enforcement and audit. It does not replace human judgment, legal compliance, or ethical reasoning.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">3. What ATLAS NOMOS Does</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Enforces policy constraints on AI model invocations at the execution layer.</li>
                            <li>Implements fail-closed architecture: in uncertainty, the System halts rather than permits.</li>
                            <li>Generates immutable audit trails of all governance decisions.</li>
                            <li>Requires explicit authorization for high-risk AI operations.</li>
                            <li>Provides technical infrastructure for operator-defined oversight policies.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">4. What ATLAS NOMOS Does Not Attempt</h2>
                        <p className="mb-4">
                            The System intentionally does <strong>not</strong> attempt to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Solve AI alignment</strong>—the System does not claim to make AI models safe, aligned, or beneficial.</li>
                            <li><strong>Evaluate content quality</strong>—the System enforces policy constraints, not content correctness or ethical appropriateness.</li>
                            <li><strong>Guarantee safety</strong>—the System cannot prevent all harms; it reduces attack surface and creates audit trails.</li>
                            <li><strong>Replace human judgment</strong>—the System requires human-defined policies and human-supervised operations.</li>
                            <li><strong>Provide legal compliance</strong>—the System is not a compliance certification, legal opinion, or regulatory safeguard.</li>
                            <li><strong>Predict emergent behavior</strong>—the System cannot anticipate all possible AI model behaviors or failure modes.</li>
                            <li><strong>Eliminate liability</strong>—the System creates infrastructure for governance; it does not transfer or absolve operator liability.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">5. Fail-Closed Architecture</h2>
                        <p className="mb-4">
                            ATLAS NOMOS implements a <strong>fail-closed</strong> design. When the System encounters:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Uncertainty in policy evaluation</li>
                            <li>Configuration errors or missing components</li>
                            <li>Authorization failures or invalid credentials</li>
                            <li>System errors or component failures</li>
                        </ul>
                        <p>
                            The System defaults to <strong>deny or halt</strong>, not permit. We prioritize preventing unauthorized actions over maintaining availability.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">6. Transparency Through Auditability</h2>
                        <p>
                            Every Governance Action is logged immutably. The System generates audit trails that record: what action was attempted, what policy was evaluated, what decision was made, and when. The System does not operate as a black box. Operators can inspect, query, and export governance logs.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">7. Experimental Status</h2>
                        <p>
                            ATLAS NOMOS is <strong>experimental software</strong>. It is not production-certified. It may contain undiscovered defects. The System is provided under a philosophy of &quot;Honestly Brittle&quot;—we prefer explicit failure over silent compromise. Operators should deploy with caution, monitor actively, and maintain fallback controls.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">8. No Ethical Guarantees</h2>
                        <p className="mb-4">
                            This statement deliberately avoids:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Promises about &quot;ethical AI&quot; or &quot;responsible AI&quot; in abstract terms.</li>
                            <li>Claims that deployment of the System makes AI safe, fair, or beneficial.</li>
                            <li>Aspirational language about AI for good, societal benefit, or human flourishing.</li>
                        </ul>
                        <p>
                            We make no claims about ethics. We provide technical constraint mechanisms. How those mechanisms are configured and whether they produce ethically appropriate outcomes depends entirely on the Operator&apos;s policies, judgment, and oversight.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">9. Relationship to Legal Documents</h2>
                        <p>
                            This Responsible AI Statement is provided for informational purposes and describes the design philosophy of ATLAS NOMOS. It does not create legal obligations, warranties, or commitments beyond those stated in the Terms of Use, Privacy Policy, and Liability Disclaimer. In the event of any conflict, those legal documents govern.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
