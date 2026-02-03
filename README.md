ATLAS NOMOS — Website

Official web platform for Atlas Nomos
Product surface, documentation hub, and read-only governance console.

Overview

The Atlas Nomos website is not marketing pages.

It is a control surface for a runtime governance system.

The site exists to:

explain the governance model

document the kernel

expose verifiable behavior

display audit / policy states

provide installation & developer onboarding

No hidden magic.
No dashboards with fake authority.
No actions that bypass the kernel.

If something happens in the UI, it must be cryptographically backed by Atlas or Sentinel.

What is Atlas Nomos?

Atlas Nomos is a runtime governance kernel for agentic AI systems.

It sits between:

AI Agent → Tools → Infrastructure


and enforces:

deny-by-default execution

policy gating

deterministic audit logs

verifiable authority

Think:

firewall + policy engine + ledger
for AI actions.

Role of This Repository

This repository contains the public web interface for the system.

It is intentionally:

read-only for authority

stateless by design

incapable of executing privileged operations

Responsibilities

Docs

Install instructions

Policy explorer

Audit viewer

Governance status pages

Console (observer only)

Non-Responsibilities

The website must NOT:

execute tools

mutate governance state

sign artifacts

hold private keys

bypass Sentinel

act as a remote shell

If you need authority, use the CLI.

Architecture
Website (Next.js / React)
        ↓
ReadModel / API
        ↓
Atlas Kernel / Sentinel Ledger

Design Principles

UI = observer only

Kernel = authority

Sentinel = trust anchor

Separation is intentional and strict.

If the UI goes down, governance still works.
If governance fails, the UI must not pretend otherwise.

Stack

Typical setup:

Next.js / React

TypeScript

Tailwind

Static + edge rendering

Read-only API layer

No privileged backend logic

Replace with your exact stack if needed.

Local Development
git clone https://github.com/atlasnomos/website
cd website
npm install
npm run dev


Open:

http://localhost:3000

Environment

Example:

NEXT_PUBLIC_API_URL=http://localhost:8787
NEXT_PUBLIC_ENV=dev


Dev mode:

clearly tainted

visually labeled

cannot simulate production authority

Production Philosophy

Production is not a feature flag.

It requires:

Sentinel binding

verified ledger

signed artifacts

real policy engine

The site must degrade gracefully if these are missing.

Never fake trust.

Project Structure
/app            → routes
/components     → UI primitives
/features       → governance views
/lib            → clients + types
/styles         → theme
/docs           → documentation pages

Security Model
Trust Boundaries
Layer	Authority
Website	none
API	read-only
Atlas CLI	execution
Sentinel	cryptographic trust
Rules

no secrets in frontend

no signing in backend

no tool execution from UI

all actions verified by kernel

Contributing

We accept:

documentation improvements

UX clarity improvements

performance work

accessibility fixes

visualization enhancements

We do not accept:

hidden automation

server-side authority logic

shortcuts around governance

anything that weakens trust separation

If a feature requires authority, it belongs in the CLI or kernel — not here.

Install Atlas (actual system)
npm install -g @atlasnomos/atlas
atlas init


Website is the window.
CLI is the control.

Philosophy

Most AI tooling asks:

“Can the agent do this?”

Atlas asks:

“Should it be allowed?”

This site exists to make that answer visible.

License

MIT
