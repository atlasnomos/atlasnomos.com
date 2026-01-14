"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
    const faqs = [
        {
            q: "What is Local Governance Mode (LGM)?",
            a: "LGM allows ATLAS to run 100% offline without connecting to Sentinel. All governance rules are enforced locally, but artifacts are marked as \"unattested\" since there's no external verification. Perfect for development and air-gapped environments."
        },
        {
            q: "Does ATLAS require a specific LLM provider?",
            a: "No. ATLAS is model-agnostic. It works with OpenRouter, Anthropic, OpenAI, or any provider that exposes a chat completion API. The Model Configuration Plane (MCP) abstracts provider differences."
        },
        {
            q: "Is ATLAS free?",
            a: "Yes, the core Kernel is MIT licensed and free forever. Sentinel (the enterprise authorization oracle) is a paid add-on for teams needing multi-party approvals and immutable audit ledgers."
        },
        {
            q: "What happens if an agent tries to violate an invariant?",
            a: "ATLAS triggers a Kernel Panic. Execution halts immediately, the violation is logged, and no code touches disk. This is the fail-closed design principle—when in doubt, stop."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-navy">
            <div className="container px-6 max-w-3xl border-t border-white/5 pt-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-silver-bright">Frequently Asked Questions</h2>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((item, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/10 px-4 rounded-lg bg-navy-light/10 data-[state=open]:bg-navy-light/30 transition-colors">
                            <AccordionTrigger className="text-silver-bright hover:text-gold hover:no-underline text-left text-lg font-medium py-6">
                                {item.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-silver-dim text-base leading-relaxed pb-6">
                                {item.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
