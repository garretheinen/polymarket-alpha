# PolySignal Design System

Version: 1.0

Status: Active

Owner: PolySignal

Last Updated: July 2026

---

# Purpose

The PolySignal Design System defines the visual language of the application.

Its purpose is to create a consistent, professional experience across every page and feature.

Every component should feel like it belongs to the same product.

If a new UI element does not follow this document, it should be redesigned before shipping.

---

# Design Philosophy

PolySignal is an intelligence platform.

The interface exists to present information clearly, not to compete with it.

The user should remember the intelligence.

Not the interface.

Our design values:

- Clarity
- Consistency
- Readability
- Confidence
- Precision

---

# Inspiration

Primary Inspiration

- Stripe Dashboard
- Linear
- Bloomberg Terminal
- Vercel Dashboard
- Notion

Avoid

- Neon cyberpunk
- Gaming UI
- Overly animated dashboards
- Crypto casino aesthetics
- Excessive gradients
- Visual clutter

---

# Color Palette

## Primary

Blue

Purpose

Navigation

Primary buttons

Interactive states

Links

Selected items

---

## Success

Emerald

Purpose

Elite Consensus

Positive trends

Completed actions

Strong signals

---

## Warning

Amber

Purpose

Developing opportunities

Medium conviction

Watch status

---

## Danger

Red

Purpose

Weak conviction

Risk

Negative movement

---

## Neutral

Slate

Purpose

Text

Borders

Backgrounds

Muted content

Dividers

---

# Backgrounds

Application

Light Gray

Cards

White

Cards should always have enough contrast to separate content without creating visual noise.

---

# Cards

Standard Radius

28px

Border

Slate 200

Shadow

shadow-sm

Padding

40px

Cards should never rely on heavy shadows.

Depth should come from spacing and hierarchy.

---

# Typography

## Hero Title

Large

Bold

Primary focus of the page.

---

## Section Title

Medium

Bold

Used for dashboard cards.

---

## Metric Value

Large

Bold

Highly readable.

---

## Body

Regular

Comfortable line spacing.

---

## Caption

Small

Muted.

Never use captions for primary information.

---

# Spacing

Use consistent spacing throughout the application.

Preferred spacing scale

8

12

16

24

32

40

Avoid arbitrary spacing values whenever possible.

Whitespace improves readability.

---

# Icons

Use Lucide React.

Icons should support information.

Never replace labels.

Avoid decorative icons.

---

# Buttons

Three variants

Primary

Secondary

Ghost

Buttons should communicate action clearly.

Avoid oversized buttons.

Primary actions should appear once per section.

---

# Badges

Badges communicate status.

They are not decorative.

Current badge types

Success

Primary

Warning

Danger

Neutral

Badges should always have:

Rounded full radius.

Light background.

Colored border.

Readable text.

---

# Metrics

Metrics should answer questions.

Not simply display numbers.

Example

Accuracy

91%

Instead of

91%

Accuracy should always appear underneath.

---

# Layout

Dashboard width should prioritize readability.

Avoid extremely wide text blocks.

Maximum readable text width should remain around 70 characters.

---

# Grid

The dashboard follows a predictable hierarchy.

Signal Compass

↓

Opportunity Overview

↓

Signal Breakdown

Market Pulse

↓

Smart Money Leaders

Market Conviction

↓

Top Opportunities

This structure is locked.

Only refine.

Do not redesign without approval.

---

# Motion

Motion should communicate change.

Never distract.

Preferred animations

Fade

Slide

Scale

Subtle hover transitions

Future

Signal Compass animation

Market Pulse updates

PolyScore transitions

Avoid unnecessary movement.

---

# Component Principles

Every component should answer one question.

Signal Compass

Where should I look?

Opportunity Overview

What is the best opportunity?

Signal Breakdown

Why should I trust it?

Market Pulse

What changed?

Smart Money Leaders

Who is driving the market?

Top Opportunities

What else deserves attention?

---

# UI Components

Current design system

Logo

Card

Badge

Button

Avatar

Metric

Progress

SectionHeader

Future additions

Table

Tabs

Modal

Tooltip

Dropdown

Search

Command Palette

---

# Accessibility

Maintain strong contrast.

Readable font sizes.

Large click targets.

Keyboard navigation where appropriate.

Visible focus states.

Accessibility is a feature.

Not an afterthought.

---

# Engineering Rules

Prefer reusable components.

Avoid duplicated styling.

Extract patterns before copying code.

One source of truth for every UI element.

---

# Quality Standard

Before shipping any UI ask:

Does this improve readability?

Does this improve decision making?

Does this match the approved dashboard?

Would this feel at home in Stripe or Linear?

If the answer is no...

Redesign it.

---

# Final Principle

Consistency builds trust.

Every screen should immediately feel like PolySignal.
