import { Footer } from "@/components/Footer";

export default function TermsPage() {
    return (
        <main className="flex flex-col min-h-screen pt-24">
            <div className="container px-6 py-12 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">Terms of Use</h1>

                <div className="prose prose-invert max-w-none text-silver-dim">
                    <p className="mb-6">
                        Effective Date: January 15, 2026
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Definitions</h2>
                        <p className="mb-4">
                            For purposes of these Terms of Use, the following definitions apply:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>&quot;System&quot;</strong> means the ATLAS NOMOS software, including its Kernel, Sentinel authorization oracle, invariant engines, configuration files, and all associated components distributed or made available by the Authors.</li>
                            <li><strong>&quot;ATLAS NOMOS&quot;</strong> means the experimental governance framework designed to enforce technical constraints and judgment-before-execution requirements on AI model invocations.</li>
                            <li><strong>&quot;Operator&quot;</strong> means any individual, organization, or entity that deploys, configures, invokes, or otherwise uses the System in any environment.</li>
                            <li><strong>&quot;Output&quot;</strong> means any data, text, code, decision, action, or artifact produced by an AI Model while operating under governance by the System.</li>
                            <li><strong>&quot;Governance Action&quot;</strong> means any enforcement decision made by the System, including but not limited to: permit, deny, halt, escalate, log, or trigger a kernel panic.</li>
                            <li><strong>&quot;AI Model&quot;</strong> means any machine learning model, large language model, or automated decision-making system subject to governance by the System.</li>
                            <li><strong>&quot;Authors&quot;</strong> means the maintainers, contributors, and rights holders of ATLAS NOMOS.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Acceptance of Terms</h2>
                        <p>
                            By accessing, downloading, installing, configuring, or using the System in any manner, the Operator agrees to be bound by these Terms of Use. If the Operator does not agree to all terms stated herein, the Operator must immediately cease all use of the System.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Nature of the System</h2>
                        <p className="mb-4">
                            The System is provided on an <strong>&quot;AS-IS&quot;</strong> and <strong>&quot;AS-AVAILABLE&quot;</strong> basis. The Operator expressly acknowledges and agrees that:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>ATLAS NOMOS is <strong>experimental software</strong> and is not production-certified.</li>
                            <li>The System does <strong>not</strong> constitute legal advice, regulatory compliance certification, insurance, assurance, or guarantee of any kind.</li>
                            <li>The System does <strong>not</strong> guarantee the safety, legality, correctness, reliability, or fitness of any AI Model, Output, or Governance Action.</li>
                            <li>Deployment of the System does <strong>not</strong> automatically achieve compliance with any law, regulation, or standard, including but not limited to the EU AI Act, GDPR, CCPA, or any industry-specific requirements.</li>
                            <li>The System is a technical governance framework; it enforces constraints but does not validate the substantive correctness or ethical appropriateness of Outputs.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Operator Responsibility</h2>
                        <p className="mb-4">
                            The Operator assumes <strong>sole and complete responsibility</strong> for:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>All deployment, configuration, and operational decisions regarding the System.</li>
                            <li>All Outputs generated by AI Models operating under the System&apos;s governance.</li>
                            <li>Validation that Outputs are accurate, lawful, and appropriate for their intended use.</li>
                            <li>Compliance with all applicable laws, regulations, and contractual obligations.</li>
                            <li>Maintaining human oversight sufficient to identify and remediate harmful, erroneous, or unlawful Outputs.</li>
                            <li>All downstream harms, liabilities, or consequences arising from use of the System or reliance on its Governance Actions.</li>
                        </ul>
                        <p className="mt-4">
                            The System provides technical governance mechanisms. It does not, and cannot, absolve the Operator of any legal, ethical, or contractual liability.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">5. No Warranty</h2>
                        <p className="mb-4">
                            THE SYSTEM IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                        </p>
                        <p>
                            THE AUTHORS DO NOT WARRANT THAT THE SYSTEM WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF HARMFUL COMPONENTS. THE AUTHORS DO NOT WARRANT THAT ANY GOVERNANCE ACTION WILL PREVENT HARM, ENSURE COMPLIANCE, OR PRODUCE CORRECT RESULTS.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                        <p className="mb-4">
                            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY <strong>INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, OR PUNITIVE DAMAGES</strong>, INCLUDING BUT NOT LIMITED TO: LOSS OF PROFITS, LOSS OF DATA, LOSS OF GOODWILL, BUSINESS INTERRUPTION, REGULATORY FINES, REPUTATIONAL HARM, OR COSTS OF SUBSTITUTE GOODS OR SERVICES, ARISING OUT OF OR IN CONNECTION WITH THE USE OR INABILITY TO USE THE SYSTEM, EVEN IF THE AUTHORS HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</li>
                            <li>THE AUTHORS&apos; TOTAL CUMULATIVE LIABILITY ARISING OUT OF OR RELATING TO THESE TERMS OR THE SYSTEM, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, SHALL NOT EXCEED <strong>ONE HUNDRED UNITED STATES DOLLARS (USD $100.00)</strong>.</li>
                        </ul>
                        <p>
                            This limitation applies regardless of whether the Authors have been advised of the possibility of such damages and notwithstanding the failure of essential purpose of any limited remedy.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
                        <p className="mb-4"><strong>7.1 System Ownership.</strong> The System, including all source code, documentation, designs, trade names, trademarks (including &quot;ATLAS NOMOS&quot;), and intellectual property embodied therein, is and remains the property of the Authors. Certain components may be licensed under open-source licenses (e.g., MIT License), which govern use of those specific components.</p>
                        <p className="mb-4"><strong>7.2 Operator Inputs.</strong> The Operator retains all rights in data, configurations, and prompts provided by the Operator to the System. The Operator grants no license to the Authors in such inputs.</p>
                        <p className="mb-4"><strong>7.3 Outputs.</strong> Outputs are generated by AI Models under the Operator&apos;s deployment. The Authors make no claim of ownership over Outputs. The Operator is solely responsible for determining ownership, licensing, and liability for all Outputs.</p>
                        <p><strong>7.4 No Transfer.</strong> Nothing in these Terms grants the Operator any ownership interest in the System beyond the limited license to use the System in accordance with its applicable license terms.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">8. Indemnification</h2>
                        <p>
                            The Operator agrees to indemnify, defend, and hold harmless the Authors and their affiliates, officers, directors, employees, agents, and licensors from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or relating to: (a) the Operator&apos;s use of the System; (b) any Outputs generated under the Operator&apos;s deployment; (c) any breach of these Terms by the Operator; or (d) the Operator&apos;s violation of any applicable law or third-party rights.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">9. Governing Law and Dispute Resolution</h2>
                        <p className="mb-4"><strong>9.1 Governing Law.</strong> These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of laws principles.</p>
                        <p className="mb-4"><strong>9.2 Binding Arbitration.</strong> Any dispute, claim, or controversy arising out of or relating to these Terms or the System shall be resolved exclusively by final and binding arbitration administered by JAMS pursuant to its Comprehensive Arbitration Rules and Procedures. The arbitration shall be conducted by a single arbitrator in Wilmington, Delaware. The language of arbitration shall be English. Judgment on the award may be entered in any court of competent jurisdiction.</p>
                        <p className="mb-4"><strong>9.3 Waiver of Class Actions.</strong> The Operator agrees that any arbitration or proceeding shall be conducted on an individual basis only and not as a class, consolidated, or representative action. The Operator waives any right to participate in a class action lawsuit or class-wide arbitration.</p>
                        <p><strong>9.4 Waiver of Jury Trial.</strong> TO THE FULLEST EXTENT PERMITTED BY LAW, THE OPERATOR WAIVES ANY RIGHT TO A JURY TRIAL IN ANY LEGAL PROCEEDING ARISING OUT OF OR RELATING TO THESE TERMS OR THE SYSTEM.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">10. Modifications</h2>
                        <p>
                            The Authors reserve the right to modify these Terms at any time. Modified Terms become effective upon posting. The Operator&apos;s continued use of the System following the posting of modified Terms constitutes acceptance of such modifications.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">11. Severability</h2>
                        <p>
                            If any provision of these Terms is held to be unenforceable or invalid, such provision shall be modified to the minimum extent necessary to make it enforceable, and the remaining provisions shall continue in full force and effect.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">12. Entire Agreement</h2>
                        <p>
                            These Terms, together with any applicable open-source license governing specific components of the System, constitute the entire agreement between the Operator and the Authors with respect to the subject matter hereof and supersede all prior or contemporaneous understandings, agreements, or representations.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
