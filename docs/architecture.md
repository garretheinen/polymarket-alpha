# PolySignal Architecture

Version: 1.0

Status: Active

Owner: PolySignal

Last Updated: July 2026

---

# Purpose

This document defines the technical architecture of PolySignal.

Its purpose is to keep the application maintainable, scalable, and easy to understand as new features are added.

Architecture decisions should prioritize:

- Simplicity
- Reusability
- Performance
- Scalability
- Developer experience

---

# Technology Stack

Frontend

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

Backend

- Next.js API Routes

Data Processing

- Internal aggregation engine
- Snapshot generation
- PolyScore engine

Deployment

- Vercel

Version Control

- Git
- GitHub

---

# High-Level Architecture

```
          Wallet Sources
                 │
                 ▼
       Data Collection Layer
                 │
                 ▼
       Snapshot Generation
                 │
                 ▼
        PolyScore Engine
                 │
                 ▼
          API Endpoints
                 │
                 ▼
        Dashboard Components
```

The UI should never perform business logic.

The backend prepares intelligence.

The frontend displays intelligence.

---

# Guiding Principles

## Thin Frontend

React components should focus on presentation.

Avoid calculations inside components.

Avoid business logic inside JSX.

Components receive already-prepared data.

---

## Reusable UI

Every reusable visual element belongs inside:

components/ui/

Examples

Card

Badge

Button

Metric

Progress

SectionHeader

Avatar

---

## Feature Components

Feature-specific components belong inside:

components/dashboard/v2/

Examples

OpportunityHero

SignalCompass

MarketPulse

SignalBreakdown

SmartMoneyLeaders

TopOpportunities

---

# Current Folder Structure

```
app/
components/
    dashboard/
        v2/
    layout/
    ui/

lib/

types/

public/

docs/
```

---

# Future Folder Structure

As the application grows, larger components may become feature folders.

Example

```
components/dashboard/v2/

OpportunityHero/
    index.tsx
    Header.tsx
    Metrics.tsx
    Footer.tsx

SignalCompass/
    index.tsx

MarketPulse/
    index.tsx
```

Do not split components into folders until complexity justifies it.

Avoid premature abstraction.

---

# Data Flow

Data always moves in one direction.

```
API

↓

Dashboard Page

↓

Dashboard Components

↓

UI Components
```

Never reverse this flow.

---

# API Philosophy

API routes prepare data.

Frontend components display data.

The frontend should not calculate:

- PolyScore
- Conviction
- Rankings
- Historical analysis

Those belong on the backend.

---

# Dashboard Architecture

The dashboard consists of six primary sections.

## 1. Signal Compass

Purpose

Discover where conviction is building.

---

## 2. Opportunity Overview

Purpose

Highlight today's highest-rated opportunity.

---

## 3. Signal Breakdown

Purpose

Explain WHY the opportunity deserves attention.

---

## 4. Market Pulse

Purpose

Provide a real-time intelligence feed.

---

## 5. Smart Money Leaders

Purpose

Display influential wallets driving conviction.

---

## 6. Top Opportunities

Purpose

Surface additional opportunities worth monitoring.

Every dashboard section answers a specific question.

---

# TypeScript

Every API response should have a matching interface.

Example

DashboardResponse

DashboardStats

FeaturedOpportunity

DashboardWallet

Avoid "any".

Prefer explicit interfaces.

---

# lib/

The lib folder contains reusable logic.

Examples

navigation.ts

formatters.ts

polyScore.ts

marketAnalysis.ts

walletAnalysis.ts

No UI belongs inside lib/.

---

# types/

All shared application types belong here.

Frontend and backend should share the same interfaces whenever possible.

Avoid duplicate type definitions.

---

# Styling

Reusable styling belongs inside UI components.

Avoid copying Tailwind classes across the application.

Extract patterns before duplication.

---

# PolyScore Engine

The PolyScore engine will become the intelligence core of PolySignal.

Future scoring factors include:

- Wallet quality
- Historical accuracy
- Position sizing
- Capital concentration
- Consensus strength
- Conviction trend
- Timing
- Market volatility
- Historical pattern matching

The frontend should never compute PolyScore.

---

# Performance

Prefer server-side preparation over client-side computation.

Avoid unnecessary re-renders.

Memoize expensive calculations.

Lazy-load future dashboard sections when appropriate.

Keep bundle size small.

---

# Error Handling

Every API should return predictable responses.

Avoid crashing components.

Empty states should always be handled gracefully.

---

# Testing Philosophy

As the application grows:

Unit tests

Utility functions

Integration tests

API routes

End-to-end tests

Critical dashboard flows

Quality should increase alongside product complexity.

---

# Documentation Rules

Every major architectural decision should be recorded in:

docs/decisions.md

Avoid undocumented changes.

---

# Git Workflow

Every completed feature should be committed.

Example

Sprint 1

Finish Opportunity Overview

↓

git add .

↓

git commit

↓

git push

Small commits are preferred over large commits.

---

# Definition of Done

A feature is complete when:

- It matches the approved design.
- It uses the design system.
- It is responsive.
- It uses shared types.
- It contains no unnecessary duplication.
- It integrates cleanly with existing architecture.
- It is documented if necessary.

---

# Final Principle

Architecture should reduce future complexity.

Every decision should make the next feature easier to build.

Never sacrifice long-term maintainability for short-term speed.