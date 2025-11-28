---
id: chapter-2-tools-overview
title: Tools & Simulation Overview
sidebar_label: Tools & Simulation
slug: /chapter-2/tools-overview
---

## Tools & Simulation

This section surveys common tools used when building and researching Physical AI systems.

### ROS 2

- Widely used robotics middleware providing messaging, lifecycle management, and libraries for perception and control.

### Gazebo / Ignition

- Open-source physics-based simulators used for robot prototyping and control testing.

### NVIDIA Isaac Sim

- High-fidelity simulation platform with photorealistic rendering and GPU-accelerated simulation for complex perception workloads.

### When to choose which tool

- Use lightweight simulators (Gazebo) for fast iteration and control testing; use Isaac Sim for advanced perception datasets and photorealism.
- Integrate hardware-in-the-loop when fidelity matters and run domain randomization to improve sim-to-real transfer.
