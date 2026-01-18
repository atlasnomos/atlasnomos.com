"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-[#00040a] border-t border-white/5 pt-24 pb-12 text-sm text-silver-dim">
            <div className="container px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-20">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative w-8 h-8">
                                <Image src="/assets/footer-logo.png" alt="ATLAS Shield" fill className="object-contain" />
                            </div>
                            <span className="font-bold text-lg text-white">ATLAS NOMOS</span>
                        </div>
                        <p className="opacity-70 leading-relaxed mb-6">
                            The standard for sovereign AI governance. Built for the high-liability era.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Product</h4>
                        <ul className="space-y-4">
                            <li><Link href="/kernel" className="hover:text-white transition-colors">Kernel</Link></li>
                            <li><Link href="/sentinel" className="hover:text-white transition-colors">Sentinel</Link></li>
                            <li><Link href="/documentation" className="hover:text-white transition-colors">Documentation</Link></li>
                            <li><Link href="/changelog" className="hover:text-white transition-colors">Changelog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link href="/legal/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
                            <li><Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/legal/disclaimer" className="hover:text-white transition-colors">Liability Disclaimer</Link></li>
                            <li><Link href="/legal/responsible-ai" className="hover:text-white transition-colors">Responsible AI</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Connect</h4>
                        <ul className="space-y-4">
                            <li><Link href="https://github.com/nexus/atlas" className="hover:text-white transition-colors">GitHub</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Discord</Link></li>
                            <li><Link href="https://x.com/atlasnomos" className="hover:text-white transition-colors">Twitter/X</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-xs opacity-60 leading-relaxed">
                    <p className="mb-2">&copy; 2026 Nexus/Atlas Team.</p>
                    <p>
                        <strong>Important:</strong> ATLAS is experimental software provided "AS-IS" without warranty.
                        It does not provide legal compliance, audit certification, or liability transfer. The operator assumes full responsibility for all code generated and executed by the system.
                    </p>
                </div>
            </div>
        </footer>
    );
}
