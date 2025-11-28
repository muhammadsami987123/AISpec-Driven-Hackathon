---
id: chapter-2-pda-loop
title: Perception-Decision-Action Loop
sidebar_label: Perception-Decision-Action (PDA)
slug: /chapter-2/pda-loop
---

## The Perception-Decision-Action (PDA) Loop

The PDA loop is a simple model describing how embodied systems sense, reason, and act:

1. **Perception** — collect sensor data and estimate the current state of the world.
2. **Decision** — run planning, policy, or learned models to choose an action.
3. **Action** — execute the action via actuators and observe the outcome.

### Example: Mobile robot navigation

- Perception: LIDAR + camera produce a map and obstacle list.
- Decision: planner computes a collision-free path and velocity profile.
- Action: low-level controllers convert the plan into motor commands.

### Closed-loop considerations

- Latency and timing: ensure loop cycles meet real-time constraints.
- Safety and fallback: incorporate safety envelopes and failure modes.
- Observability: design sensors and estimators to reduce state uncertainty.
