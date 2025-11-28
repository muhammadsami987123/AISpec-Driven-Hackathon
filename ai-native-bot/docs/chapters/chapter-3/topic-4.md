---
sidebar_position: 13
sidebar_label: 'Tools & Automation'
title: 'Tools and Automation for Prompt Testing'
---

## Simulation Fidelity & Sim-to-Real Transfer

Bridging the gap between simulation and reality is essential for deploying controllers and perception models. This section covers fidelity choices, calibration, and techniques such as domain randomization.

### Fidelity trade-offs

- **Low-fidelity** (fast physics, simple visuals): great for control-loop tuning and rapid iteration.
- **High-fidelity** (accurate dynamics, photorealism): necessary for perception model training and complex interaction scenarios.

### Sim-to-Real techniques

- **Domain randomization:** randomize textures, lighting, and physics parameters to make models robust to real-world variation.
- **System identification / calibration:** measure real hardware and tune simulator parameters to closely match observed behavior.
- **Hardware-in-the-loop (HIL):** run parts of the system on real hardware while other parts are simulated to validate integration.

### Validation checklist

- Compare sensor statistics (noise, distribution) between sim and real.
- Run closed-loop tests with safety envelopes before full deployment.
