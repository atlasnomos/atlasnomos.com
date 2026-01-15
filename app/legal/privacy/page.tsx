import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
    return (
        <main className="flex flex-col min-h-screen pt-24">
            <div className="container px-6 py-12 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

                <div className="prose prose-invert max-w-none text-silver-dim">
                    <p className="mb-6">
                        Effective Date: January 15, 2026
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Definitions</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>&quot;Personal Data&quot;</strong> means any information relating to an identified or identifiable natural person, including but not limited to: name, identification number, location data, online identifier, or factors specific to the physical, physiological, genetic, mental, economic, cultural, or social identity of that person.</li>
                            <li><strong>&quot;Operator&quot;</strong> means any individual, organization, or entity that deploys, configures, or uses the System.</li>
                            <li><strong>&quot;System&quot;</strong> means the ATLAS NOMOS software and all associated components.</li>
                            <li><strong>&quot;Telemetry&quot;</strong> means anonymized, aggregate technical data relating to system performance.</li>
                            <li><strong>&quot;Website&quot;</strong> means the website located at atlasnomos.com and any subdomains.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Scope</h2>
                        <p>
                            This Privacy Policy applies to: (a) the Website operated by the Authors of ATLAS NOMOS; and (b) information practices relating to the System software. This Policy does not govern how Operators process data within their own deployments of the System; such processing is solely the Operator&apos;s responsibility.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Data Collection</h2>
                        <p className="mb-4"><strong>3.1 Website.</strong> When you visit the Website, we may collect:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Server log data (IP address, browser type, access times, pages viewed).</li>
                            <li>Information you voluntarily provide (e.g., email address if you contact us).</li>
                        </ul>
                        <p className="mb-4"><strong>3.2 System Software.</strong> The System is designed to operate locally within the Operator&apos;s infrastructure. The Authors do <strong>not</strong> collect, receive, or have access to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Operator inputs, prompts, or configurations.</li>
                            <li>AI Model outputs or governance decisions.</li>
                            <li>Audit logs, nonce data, or any data processed by the System in the Operator&apos;s environment.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Telemetry</h2>
                        <p className="mb-4">
                            The System may include an <strong>optional, opt-in</strong> telemetry feature. If enabled by the Operator, Telemetry may transmit:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Anonymized performance metrics (latency, error rates, system health indicators).</li>
                            <li>Version and configuration metadata (non-identifying).</li>
                        </ul>
                        <p className="mb-4">
                            Telemetry does <strong>not</strong> include:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Model inputs, outputs, or prompts.</li>
                            <li>Personal Data of any individual.</li>
                            <li>Governance decision content or audit log content.</li>
                        </ul>
                        <p>
                            Telemetry is disabled by default. Operators must affirmatively enable it.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">5. Cookies and Analytics</h2>
                        <p className="mb-4">
                            The Website may use cookies and similar technologies for:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li><strong>Essential cookies:</strong> Required for website functionality.</li>
                            <li><strong>Analytics cookies:</strong> To understand website usage patterns. If analytics are enabled, we may use third-party services (e.g., privacy-focused analytics tools).</li>
                        </ul>
                        <p>
                            You may disable cookies through your browser settings. Disabling cookies may affect website functionality.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">6. Third-Party Processors</h2>
                        <p className="mb-4">
                            The Website may use the following categories of third-party service providers:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Hosting providers (infrastructure).</li>
                            <li>Analytics providers (website usage).</li>
                        </ul>
                        <p className="mt-4">
                            The System software, when deployed locally by the Operator, does not transmit data to the Authors or any third party, except if the Operator voluntarily enables Telemetry.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
                        <p className="mb-4"><strong>7.1 Website Data.</strong> Server logs are retained for a maximum of ninety (90) days. Contact form submissions are retained only as long as necessary to respond to inquiries.</p>
                        <p className="mb-4"><strong>7.2 Telemetry Data.</strong> If Telemetry is enabled, anonymized metrics may be retained for up to twelve (12) months for trend analysis, after which they are deleted.</p>
                        <p><strong>7.3 Operator-Side Data.</strong> All data processed by the System within the Operator&apos;s environment is retained and managed solely by the Operator. The Authors have no access to, and no control over, such data.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">8. User Rights</h2>
                        <p className="mb-4">
                            Depending on your jurisdiction, you may have the following rights regarding Personal Data we hold about you:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li><strong>Access:</strong> Request confirmation of whether we process your Personal Data and obtain a copy.</li>
                            <li><strong>Rectification:</strong> Request correction of inaccurate Personal Data.</li>
                            <li><strong>Erasure:</strong> Request deletion of your Personal Data, subject to legal retention requirements.</li>
                            <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances.</li>
                            <li><strong>Data Portability:</strong> Receive your Personal Data in a structured, machine-readable format.</li>
                            <li><strong>Objection:</strong> Object to processing based on legitimate interests.</li>
                            <li><strong>Withdraw Consent:</strong> Where processing is based on consent, withdraw consent at any time.</li>
                        </ul>
                        <p className="mb-4">
                            <strong>California Residents:</strong> Under the CCPA, you have the right to know what Personal Data we collect, request deletion, and opt-out of sale (we do not sell Personal Data).
                        </p>
                        <p>
                            To exercise any rights, you may contact us using the contact information below. We will respond within the timeframe required by applicable law.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">9. Data Security</h2>
                        <p>
                            We implement reasonable technical and organizational measures to protect data. However, no method of electronic transmission or storage is completely secure. We cannot guarantee absolute security.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">10. International Transfers</h2>
                        <p>
                            If you access the Website from outside the United States, your data may be transferred to and processed in the United States. By using the Website, you consent to such transfer.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">11. Children&apos;s Privacy</h2>
                        <p>
                            The Website and System are not directed to individuals under the age of 18. We do not knowingly collect Personal Data from children. If you believe we have inadvertently collected such data, contact us for deletion.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">12. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy at any time. Changes become effective upon posting to the Website. Your continued use of the Website or System after posting constitutes acceptance of the updated Policy.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">13. Contact</h2>
                        <p>
                            For privacy-related inquiries, you may contact us at the email address published on the Website.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
