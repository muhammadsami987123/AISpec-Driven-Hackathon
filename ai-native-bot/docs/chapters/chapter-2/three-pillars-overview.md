---
id: chapter-2-three-pillars
title: Three Pillars Framework
sidebar_label: Three Pillars Framework
slug: /chapter-2/three-pillars
---

## The Three Pillars Framework

The "Three Pillars" organizes Physical AI work into three interacting areas:

- **Simulation** — virtual environments, physics engines, and scenario generators that let teams iterate quickly without hardware.
- **Perception & Control** — sensing, state estimation, perception models, and control stacks that convert observations into safe actions.
- **Embodied AI** — integration of software with bodies (robots, vehicles) including mechanics, actuation, and co-design concerns.

### Interactions between the pillars

Simulation accelerates learning and testing for perception and control. Perception & Control assumptions inform what simulations must model. Embodied AI ties both to real hardware constraints.

### Subcomponents (high level)

- Simulation: physics fidelity, domain randomization, scenario orchestration
- Perception: sensors, perception models, sensor fusion, state estimation
- Control: planners, low-level controllers, safety envelopes
- Embodiment: kinematics, dynamics, hardware-in-the-loop
