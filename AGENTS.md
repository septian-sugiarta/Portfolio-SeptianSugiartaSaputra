# Project Guidelines & Conventions

## Workflow: Revisions & Git Sync
- Whenever a code or content revision is completed, always:
  1. Verify the project builds cleanly (`npm run build`).
  2. Stage changes (`git add`).
  3. Commit and push directly to `origin main`.

## Commit Message Style
- **Never sound like an AI / LLM generator**:
  - Avoid formal, robotic corporate buzzwords: "chore: update per user prompt", "refactor: comprehensive alignment", "feat: AI assistant improvements".
- **Keep it human, concise, and specific** to what component or section was actually updated:
  - Examples:
    - `update about bio and hero summary`
    - `fix github link and add whatsapp in contact`
    - `update experience details for GMF and SISI`
    - `add metrics to scabitren and update project stack`
    - `update skills list with nestjs and postgres`
    - `tweak navbar mobile layout`
