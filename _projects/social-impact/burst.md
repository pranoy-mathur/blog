---
title: BURST (Bangalore Urban Resistance & Stewardship Tracker)
order: 2
# Fact check: you built BURST with AI assistance. Do not describe it as
# built by an AI.
statement: "A public-health dashboard mapping how easily antibiotics can be bought without a prescription across East Bengaluru pharmacies."
role: "Built and run by me, with AI assistance on the code"
dates: "2026"
status: "In development. 47 pharmacies visited as of October 2026, aiming for 100+."
links:
  - { label: "burst-amr.in", url: "https://burst-amr.in" }
# Card on the homepage: photo, short label on it, and which part to keep.
thumb: /assets/images/projects/burst/1.png
thumb_alt: "The BURST map of East Bengaluru pharmacy audits"
thumb_caption: "Live public dashboard"
thumb_position: "50% 15%"
---

## Summary

India restricts the sale of many antibiotics without a prescription under Schedule H1, but over-the-counter sales still happen, and they drive resistance. BURST records what actually happens at the pharmacy counter and maps it, to show the gap between the law and real-world access.

{% include figure.html root="projects" dir="burst" n=1 alt="BURST map of East Bengaluru zones, shaded by how many pharmacists agreed to sell antibiotics without a prescription" caption="Live map of pharmacy audits." %}

## How it works

1. Volunteers visit pharmacies across East Bengaluru zones, including Whitefield, Marathahalli, Bellandur, Varthur, Koramangala and HSR Layout.
2. At each pharmacy they follow a scenario-based audit: a set of pharmacist questions plus observations.
3. Each audit is entered through a form that checks responses against Schedule H1 rules.
4. Results are mapped by zone on the public dashboard, with each pharmacy given a code so none is counted twice.

## Technologies used

React, TypeScript, Cloudflare Pages
