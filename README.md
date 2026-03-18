# PhantomBuster — Frontend Interview Test

Welcome! This repository contains the base for your live coding interview. Please read this document carefully before we start.

---

## Setup

**Requirements:** Node.js 18+

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

To run Storybook:

```bash
npm run storybook
```

---

## Context

You will be building a simplified version of the [PhantomBuster Phantom Store](https://phantombuster.com/phantombuster) — a catalog page listing automation tools called "Phantoms".

The codebase already contains:

- The data (`src/data/phantoms.json`)
- Some utility components (`InputField`, `SortSelect`, `Button`, `PhantomTagIcon`, `PhantomSlotBadge`, `Modal`)
- The app shell in `App.tsx`

Your job is to wire everything together and build the missing pieces.

---

## Part 1 — Without AI (~45 min)

> No AI tools (Copilot, Cursor, ChatGPT, etc.). Your editor's autocomplete is fine.

### 1 — PhantomCard component

Build the `PhantomCard` component in Storybook **before** integrating it in the app.

Each card should display:

- The phantom's **title**
- A short **description**
- The **slot count** (use `PhantomSlotBadge`) — positioned in the top-right corner of the card
- The phantom's **tags** as icons (use `PhantomTagIcon`) — no text, icons only
- Two buttons at the bottom: **"Learn More"** and **"Use this Phantom"** (clicking them does nothing for now)

Write the story in `src/components/PhantomCard.stories.tsx`.

### 2 — Display all Phantoms

In `App.tsx`, import the phantom data from `src/data/phantoms.json` and render a `PhantomCard` for each phantom.

The grid should display **3 cards per row** on desktop and **2 cards per row** on smaller screens.

### 3 — Search

Wire up the existing `InputField` component to filter the phantom list **by title and description** as the user types.

### 4 — Sorting

Wire up the existing `SortSelect` component to sort the phantom list.

The sort should support two criteria:

- **Name** (alphabetical)
- **Slots** (numeric)

Each criterion has 3 states: unsorted → ascending → descending (clicking again resets it).

### 5 — Welcome modal

The `Modal` component already exists

In `App.tsx`, display the modal when the user first lands on the page. It should show:

- A **"Welcome"** heading
- A short description welcoming the user on this test

The modal should disappear when the user clicks "Close" or the backdrop.

## Part 2 — With AI (~30 min)

> You are free to use any AI tool you want (Copilot, Cursor, Claude, ChatGPT, etc.).

### "Learn More" page

Implement a detail page for the **LinkedIn Profile Scraper** phantom.

- Clicking **"Learn More"** on the LinkedIn Profile Scraper card should navigate to a new route (e.g. `/phantoms/linkedin-profile-scraper`)
- The page should display meaningful content about this phantom — what it does, its inputs, its outputs, use cases, etc.
- You will need to **add the relevant content** to `phantoms.json` for this phantom — use [this page](https://phantombuster.com/automations/linkedin/5589386912058181/linkedin-profile-scraper) as your reference
- The "Learn More" button on all other phantom cards will show an error state

The goal of this exercise is to see how you work **with** AI: how you prompt, how you review and adjust the generated code, and how you make architectural decisions.

---

## Evaluation Criteria

| Area                    | What we look at                                                    |
| ----------------------- | ------------------------------------------------------------------ |
| Component design        | Props API, composition, reusability                                |
| Code quality            | Readability, TypeScript usage, no unnecessary complexity           |
| Storybook               | Stories reflect real use cases, edge cases covered                 |
| Part 1 speed & accuracy | How much you get done without assistance                           |
| Part 2 AI usage         | Quality of prompts, critical review of output, ability to steer AI |

---

Good luck — feel free to ask questions at any point.
