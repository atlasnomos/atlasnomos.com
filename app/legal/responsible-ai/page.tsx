import { Footer } from "@/components/Footer";

export default function ResponsibleAiPage() {
    return (
        <main className="flex flex-col min-h-screen pt-24">
            <div className="container px-6 py-12 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">Responsible AI Guidelines</h1>

                <div className="prose prose-invert max-w-none text-silver-dim">
                    <p className="mb-8 text-lg">
                        ATLAS NOMOS is built on the philosophy of "Surgical Containment" and "Honestly Brittle" systems.
                        We believe that responsible AI requires verifiable technical boundaries, not just vague policy statements.
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Technical Sovereignty</h2>
                        <p>
                            Operators must maintain absolute control over the decision-making loops of their AI agents.
                            ATLAS ensures that no agent can execute high-stakes actions (Tier-1 or Tier-2) without passing
                            cryptographically verifiable governance checks.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Fail-Closed Architecture</h2>
                        <p>
                            In the event of uncertainty, system error, or potential compromise, the system must default to a safe state (Halt).
                            We prioritize safety over availability. A halted system does no harm; an unconstrained rogue agent does.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Transparent Auditability</h2>
                        <p>
                            Every decision made by the system is immutable and auditable. We oppose "black box" governance.
                            Responsibility requires traceability.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
