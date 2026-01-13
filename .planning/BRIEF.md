# AI Event Signup Page

**One-liner**: A high-converting signup page for Peak Systems' free AI training event with form submission to webhook.

## Problem

Need a dedicated registration page for the live AI training event. Must capture qualified leads (name, role, income, phone) and send data to n8n webhook for automation. Current landing page doesn't have event registration capability.

## Success Criteria

How we know it worked:

- [ ] Signup page lives at `/ai-training` (or similar route)
- [ ] Form submits to webhook and shows success state
- [ ] Mobile-responsive following DESIGN-SYSTEM.md
- [ ] Matches Peak Systems brand (dark background, cyan accent per design system)
- [ ] Session info bar displays date/time/duration
- [ ] "What You'll Learn" section with 3 benefits

## Constraints

- Next.js 15 App Router (existing stack)
- Tailwind CSS v4 with DESIGN-SYSTEM.md colors (cyan accent, dark bg)
- Static export compatible (GitHub Pages deployment)
- Webhook: `https://n8n.channelcrafters.synology.me/webhook-test/b8e3e523-ab92-4f72-b199-46baadc2926e`

## Event Details

- **Title**: Why 95% of AI Systems Actually Fail in Business (And How to Be in the 5%)
- **Date**: Wednesday, January 14th
- **Time**: 1:00 PM ET
- **Duration**: 60 Minutes

## Form Fields

1. First name (text)
2. Last name (text)
3. "What sounds like you?" (dropdown)
   - Employee (want to automate my job)
   - Business owner (want to automate work)
4. Monthly income (radio buttons)
   - $0
   - $0-$1k/mth
   - $1k-$10k/mth
   - $10k-$25k/mth
   - $25k-$100k/mth
   - $100k/mth+
5. Country code + Phone number
6. CTA: "Reserve Your Spot"

## What You'll Learn (3 Benefits)

1. **Why most AI systems are actually hurting your business**
   I'll break down exactly what's going wrong — and why it's not your fault.

2. **The "quiet" opportunities everyone ignores**
   You'll see how businesses are actually using AI to save real time and money (not just chasing shiny tools).

3. **How to land in the 5% that actually see results**
   I'll show you the approach that works 2x more often than what most people do.

## Out of Scope

- Payment processing
- User accounts/authentication
- Email confirmation system (webhook handles this)
- Calendar integration (manual for now)
