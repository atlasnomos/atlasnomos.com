"use client";

import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
    const testimonials = [
        {
            quote: "Finally, an AI framework that understands liability. ATLAS's audit trails saved us during our SOC2 certification.",
            author: "Engineering Lead",
            role: "FinTech Startup (Series B)"
        },
        {
            quote: "The fail-closed architecture means I can sleep at night. Our agents can't hallucinate their way past Ring-0.",
            author: "CTO",
            role: "Healthcare AI Company"
        },
        {
            quote: "We switched from vanilla LangChain to ATLAS in 2 days. The governance layer is worth the learning curve.",
            author: "Senior Developer",
            role: "Enterprise Consulting Firm"
        }
    ];

    return (
        <section id="testimonials" className="py-24 bg-navy-light/5">
            <div className="container px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-silver-bright mb-4">Trusted by Security-First Teams</h2>
                    <p className="text-silver-dim text-lg">Early adopters building compliant AI systems.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <Card key={i} className="bg-navy-card/40 border-white/5 relative overflow-hidden backdrop-blur-sm">
                            <div className="absolute top-4 left-6 text-6xl text-gold/10 font-serif leading-none">"</div>
                            <CardContent className="pt-12 pb-8 px-8 relative z-10">
                                <p className="text-silver-bright italic mb-6 leading-relaxed">"{item.quote}"</p>
                                <div>
                                    <strong className="block text-white mb-1">{item.author}</strong>
                                    <span className="text-sm text-silver-dim">{item.role}</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <p className="mt-12 text-center text-xs text-silver-dim/50 italic">
                    *Testimonials represent individual experiences and have been anonymized. Results may vary.
                </p>
            </div>
        </section>
    );
}
