# Spendly — Design Decisions

## 1. Implementation strategy

This submission uses **Part 2 — The Premium Home Page**. The brief's ingestion-strategy question applies to Part 1, so it is not applicable here. For Part 2, I chose a **React + Vite component-based implementation** rather than a static HTML/CSS page. This made it easier to keep the navbar, hero, dashboard preview, features, how-it-works, insights, final CTA, and footer organized as separate sections while iterating quickly on responsive behavior.

I kept the visual direction intentionally minimal: a light background, dark typography, and one indigo accent. The dashboard/insights sections use clearly illustrative product data as a mock UI rather than fabricated testimonials, user counts, or logos.

## 2. Trade-off

Under the time limit, I prioritized **visual polish, responsive layout, navigation, and a convincing product preview** over adding complex application functionality. The page is a marketing home page, so adding authentication or a real finance backend would have increased complexity without improving the assessment goal.

With a full week, I would add a small interactive dashboard demo, improve accessibility with a full keyboard/screen-reader audit, add automated visual/regression checks, and further optimize performance.

## 3. AI tools

AI tools were used for **brainstorming, implementation assistance, responsive CSS debugging, troubleshooting, and deployment guidance**. I personally reviewed and changed the generated suggestions, tested the page in the browser, fixed the mobile layout issues, verified the anchor navigation and CTA behavior, checked the page at mobile width, and verified the final deployed Vercel version.

The final implementation was tested rather than submitted solely from AI output, and I can explain the component structure, CSS decisions, responsive rules, and deployment setup used in the project.
