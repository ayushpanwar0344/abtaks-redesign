# ABTalks Vibe Code Hackathon — AI Usage Log

## Project

ABTalks is a mobile-first redesign of a 60-day coding challenge platform
for Indian college students.

The product focuses on helping students build consistently, create public
proof of work, and become visible to recruiters.

---

## 1. Project Planning

### Goal

Analyze the ABTalks problem statement and identify the three required
experiences:

- Landing page
- Student dashboard
- Challenge day

### AI Direction

The AI was asked to break the problem into a practical product workflow,
identify judging requirements, and prioritize the mobile-first experience.

### Result

The project was structured around:

Build → Prove → Share

with a strong emphasis on daily momentum.

---

## 2. Product Differentiation

### Decision

The project introduced "Recovery Mode" as a core UX idea.

### Reason

The problem statement specifically requires handling missed days.

Instead of treating a missed day as a failure that resets the entire
experience, Recovery Mode encourages students to continue their challenge.

### Result

The dashboard supports:

- Normal state
- First-day state
- Recovery state
- Empty-profile state

---

## 3. Project Architecture

The AI helped structure the React project into:

- pages
- reusable components
- mock data
- global styling

The required routes were implemented:

/
/dashboard
/day/12

---

## 4. Landing Page

### Design Direction

The landing page was designed mobile-first for the required 390px
evaluation viewport.

The main product message became:

"Build every day. Become visible."

### Main sections

- Hero
- 60-day momentum preview
- Build / Prove / Share workflow
- Why the challenge matters
- Recovery Mode introduction
- Final call to action

### Design decisions

A dark visual system with a bright lime accent was chosen to create a
modern developer-focused identity while maintaining strong contrast.

---

## 5. Student Dashboard

### Goal

Create a daily command center that immediately answers:

1. Where am I?
2. What do I need to do today?
3. How much progress have I made?
4. What proof do I need to submit?

### Implemented features

- Current streak
- Challenge progress
- Today's mission
- GitHub proof status
- LinkedIn proof status
- Next milestone
- Achievements
- Recovery Mode

---

## 6. Challenge Day

### Goal

Create a complete experience for one challenge day.

### Implemented features

- Challenge description
- Estimated duration
- Difficulty
- Skills
- Completion checklist
- GitHub proof input
- LinkedIn proof action
- Completion action

The interface was intentionally designed as a guided workflow:

Build → GitHub → LinkedIn → Complete

---

## 7. Edge Cases

The interface was designed to handle:

### First day

A student starts with zero streak rather than seeing an empty or broken
dashboard.

### Missed day

Recovery Mode provides a continuation path instead of forcing a restart.

### Empty profile

A new student receives a clear starting state rather than an empty
dashboard.

---

## 8. Mobile-first QA

The primary design viewport was 390px because the hackathon explicitly
states that submissions will be automatically captured at 390px width.

The layouts were developed and checked with mobile width as the primary
target before considering larger screens.

---

## 9. AI Steering Approach

AI was used iteratively rather than generating the entire project in one
step.

The workflow was:

1. Analyze the problem statement
2. Define the product concept
3. Plan the information architecture
4. Establish the visual direction
5. Build the landing page
6. Build the dashboard
7. Build the challenge-day experience
8. Add edge cases
9. Add lightweight interactions
10. Perform mobile-focused QA
11. Prepare the project for deployment and submission

Human decisions were used to select the product direction, prioritize
features, review the generated UI, and decide what should be changed or
kept.