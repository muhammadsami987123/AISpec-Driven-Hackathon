---
sidebar_position: 12
sidebar_label: 'Prompt Design Patterns'
title: 'Prompt Design Patterns and Antipatterns'
---

## Unity, NVIDIA Omniverse & Isaac Sim: High-fidelity Simulation

Unity (with robotics packages) and NVIDIA Omniverse / Isaac Sim provide high-fidelity, visually rich simulation environments. These platforms are ideal when perception models need photorealistic data or when interactions depend on complex rendering and sensor emulation.

### Strengths

- Photorealistic rendering and sophisticated sensor emulation (cameras, lidar, depth).
- GPU-accelerated physics and support for complex scenes.
- Strong tooling for synthetic dataset generation and domain randomization pipelines.

### Limits & Costs

- Heavier resource requirements (GPU) and slower iteration than lightweight simulators.
- Licensing or platform complexity may be a consideration for some teams.

### When to use

- Use Unity/Omniverse/Isaac Sim for perception research, dataset generation, and scenarios where visual fidelity materially affects downstream model performance.
