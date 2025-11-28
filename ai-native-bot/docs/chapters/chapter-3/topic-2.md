---
sidebar_position: 11
sidebar_label: 'Evaluation Metrics & Benchmarks'
title: 'Evaluation Metrics & Benchmarks for Prompts'
---

## Gazebo & Ignition: Open-source Robot Simulation

Gazebo (and its successor Ignition/Isaac Gazebo) are widely used, open-source, physics-based simulators for robot prototyping and control testing. They integrate with ROS and provide sensors, physics engines, and world models suitable for many robotics research workflows.

### Strengths

- Tight ROS integration and common tooling in robotics research.
- Lightweight and fast for control and planning experiments.
- Extensive community models and plugins.

### Limits

- Visual realism is limited compared to Unity/Omniverse — not ideal when photorealistic sensor data is needed for perception research.
- Some physics fidelity trade-offs; advanced dynamics may require tuning.

### When to use

- Use Gazebo/Ignition for control development, trajectory testing, and rapid prototyping when ROS compatibility and speed are priorities.
