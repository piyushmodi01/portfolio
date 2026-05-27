# Deloitte — Data Collection Framework
## Project Intelligence & Interview Notes

**Status:** Complete — ready to write  
**Purpose:** Source of truth for crafting the final case study narrative

---

## Verified Facts
- Timeline: 2019 — Ongoing (still actively used and expanded after Piyush left)
- Role: UI/UX Designer — sole designer, team of 6
- Team: 2 developers, 1 PM (broader project), 1 Senior Manager (US-India bridge)
- Platform: Salesforce
- Client: US State-level Government (confirmed: child welfare programs, family case intake)
- DCF = internal Deloitte product — used by the org to rapidly deploy forms for client engagements
- Won Deloitte's Applause Award (rare, cash bonus, announced publicly in front of team)
- Stats: 5+ projects, 3+ RFPs, 550+ dev hours saved (team estimate, first state deployment)
- After Piyush left: colleagues confirmed DCF is "in full swing," features added, rolling out to more clients

---

## What DCF Actually Is — The Real Picture

An "Intake Questionnaire" platform built on Salesforce. Used by case workers (child welfare, family services, state government programs) to conduct structured interviews with citizens — children, families, people in difficult situations.

**The screenshot shows a real form:**
- "Child Assessment" — intake questionnaire
- Sections: Primary Information, Family Together Assessment, Family Care Assessment, Support Assessment, Custodial Party Assessment, Non-Custodial Party Assessment
- Left panel: section navigation with question counts and completion status (e.g., "Primary Information 6/6")
- Main area: "Family Together Assessment" — questions about child name, family profession, conditions, expenses
- Top right: "Use Conversational UI" toggle — both modes coexist, user can switch
- Bottom: "0 out of 24 questions answered · page 1 of 3"

This is not an abstract enterprise tool. It's a form a case worker fills out while sitting across from a child.

---

## The Conversational UI Failure — What Actually Happened

**The client demo:** Deloitte was presenting the Conversational UI to what Piyush believes was the **State of Indiana**. Goal: show their capability to rapidly deploy government forms.

**The client's reaction:** Their case workers work in the field — meeting children, families in difficult situations. They cannot ask one question, wait, fill it in, then ask the next. They need the full form visible so they can hold a natural human conversation while completing the intake. The client "was really pissed." The meeting ended.

**The team:** "We were tense af."

**What the client actually said:** *"This product won't work. We don't need 1-question-at-a-time forms in our state."*

**The pivot triggered more than a UI change.** It surfaced a requirement nobody had made explicit: case workers needed to see:
- All sections and their status
- How many questions in each section, how many completed
- Overall form progress
- What's coming up — so they could plan the conversation without losing eye contact with the person they were interviewing

**The decision:** Both Conversational UI and Traditional UI were kept. The use case decides which is right. Short, simple forms = conversational. Complex, multi-page intake forms = traditional with full visibility. Both modes documented with pros and cons. The screenshot confirms this — "Use Conversational UI" toggle exists on the rendered form.

---

## How the Traditional UI Actually Got Designed

**Important detail:** Developers had already built a traditional UI version *without involving design*. It was messy — multiple columns, multiple fields per column, no defined flow direction (left-right? top-bottom?).

Piyush was brought in to fix what the developers had built. He:
- Redesigned the entire look and feel
- Chose a **single-column layout** — minimises head movement for case workers looking between screen and person
- Added a **left-side progress panel** showing: current page, section names, question counts, completion checkmarks
- Made it responsive
- Kept data entry simple — each question has a direct input field, minimal cognitive overhead

The single-column decision was not a default choice — it came from a specific insight about how case workers work.

---

## The Case Worker Insight — What Changed the Design

From watching "day in the life of a case worker" videos:

Case workers are under pressure. They're talking to children. People in crisis. They have to be empathetic, make the person feel comfortable and safe. For this reason they try to **minimise how often they look at the screen** and keep as much eye contact as possible.

**The design implication:** When they do look at the screen, they need to get maximum information in minimum time — where they are, what question is next, what's coming up — so they can plan the conversation in their head without breaking connection with the person.

**Quote from Piyush:** *"We need to reduce the amount of times they look at the screen. When they get a chance to look, they should be able to get where they are, what question they should ask, what are the next questions coming up — so they can plan in their head without losing eye contact."*

This is why the progress panel is on the left (always visible), why the layout is single column (eye moves straight down, no scanning), and why inputs are simple (just type, no complex interactions).

**Piyush never met a case worker.** He designed for them entirely through videos, documentation, and a 5-layer chain of information:
Users → State → Deloitte US office → Deloitte India office → Manager → Piyush

---

## Conditional Visibility — Real Example

**The scenario:** Page 1, Question 1: *"Do you have a US visa?"*

If **No** → system immediately hides/disables ~50 questions across 5 pages related to visa status, type, expiry, etc. In real-time, as the user answers.

If an entire page is only relevant to visa holders → that entire page disappears from the form structure.

**Why this mattered for case workers:** The form adapts to the person being interviewed. Irrelevant questions don't clutter the view. The case worker isn't scrolling past sections that don't apply. The form is always the shortest it can be for that specific person.

---

## The Team Dynamic

Sole designer with 5 others who weren't designers:
- 2 developers (feasibility)
- 1 PM (broader project, not DCF-specific)
- 1 Senior Manager (US-India bridge, understood client requirements)

How decisions worked: Team generated ideas → devs confirmed feasibility → business approved use cases → Piyush designed. No other designers to debate with. Every visual decision was his.

---

## The Applause Award

- Rare — very few people receive it
- Senior Manager announced it publicly in front of the entire team
- Piyush received a card on his desk and a cash bonus in his salary
- Between Piyush and the Senior Manager: 3 levels (Consultant → Sr. Consultant → Manager → Sr. Manager)
- Recognition was for product design work that directly helped the org win government projects
- The award skipped multiple levels to reach him

---

## If DCF Hadn't Been Built

Deloitte would have built forms from scratch on Salesforce for every engagement:
- Limited to Salesforce's default, non-intuitive UI
- New development, testing, customisation, and rule-setting per client
- No reuse across programs or states
- Higher time, higher cost, lower quality per engagement

DCF removed the *production* burden. Testing still existed — but building was handled by the tool. Non-technical teams could configure and deploy. Developers stayed out of routine form work.

---

## What DCF Means to Piyush — Personal

One of his first real products after entering product design. He describes this period:

*"I was reading every night to learn more and implementing the next day."*
*"I was going to other designers with questions and implementing."*
*"Learning on that project by implementing."*

**"That project made me the designer I am today."**

The designer it made: someone who goes in every direction before making a call. Data-driven. Reads the room when data isn't available. Doesn't accept decisions blindly. Pushes back on red flags.

---

## What MATLAB Added (the growth arc across both projects)

MATLAB came after DCF. What it added:

*"Even a small detail — just clicking a checkbox to switch view — can have massive impact on customers."*

*"Kill your preconceived notions of what a good interface looks like. If people know the UI, they are the happiest people. You don't know the UI because you're not the user."*

DCF built the foundation: rigour, process, empathy, learning-by-doing.
MATLAB sharpened it: humility, constraint-based thinking, respecting what users already know.

---

## Quotes Worth Using
- "The meeting ended. The client was really pissed. We were tense af."
- "Our case workers are meeting kids. They cannot fill a form one question at a time."
- "Reduce the amount of times they look at the screen. When they do look, they need everything."
- "I was reading every night. Implementing the next day."
- "That project made me the designer I am today."
- "Someone who goes in every direction to not leave stones unturned before making a call."
- "I don't let emotions take over. Data is the key — and if data isn't available, read the room."

---

## Narrative Arc (Final)

1. Deloitte needed a way to build government forms faster — custom dev per client wasn't scaling
2. First attempt: Conversational UI. Seemed right. A client meeting ended badly because of it.
3. Case workers sit across from children. They can't look at the screen question by question.
4. Developers had already built a traditional UI without design — Piyush came in and rebuilt it around one insight from a video: minimise how often they look at the screen
5. Built the platform around that: single column, left-panel progress, conditional visibility, both modes available
6. 5+ projects. 3+ RFPs won. Cash bonus. Public recognition. Still running.
