---
title: "Core Systems Update: Progress on Crest5 river integration, new Time Management architecture, and the first scenario NAQADA: Birth of the Nile."
excerpt: "Progress on Crest5 river integration, new Time Management architecture, and the first scenario NAQADA: Birth of the Nile."
coverImage: "/assets/blog/images/2025-08-09-core-systems-update.png"
date: "2025-08-09T00:00:00.000Z"
author:
  name: "Bura Chuhadar"
  picture: "/assets/blog/authors/bc.jpg"
ogImage:
  url: "/assets/blog/images/2025-08-09-core-systems-update.png"
---

# Core Systems Update

## Overview

This week's development focus has been squarely on three foundational pillars that will shape early gameplay and long-term systemic depth:

1. Crest5-driven river & Nile water system groundwork
2. Game speed implementations
3. Our first level's name: **NAQADA – Birth of the Nile**

Below is a deep dive into where we are, why the work matters, and what comes next.

---

## Crest5 River System Integration

### Goals

Build a believable Nile-inspired hydrological layer that supports seasonal variance (flood & recession), gameplay mechanics (fertility, transport, risk), and visual immersion while remaining performant alongside dense instanced city content.

### Current Progress

- Initial evaluation of Crest5 (Crest Water v5) features for inland river simulation vs. open body usage
- Prototype spline / shape authoring path for carving river channels across the terrain height data
- Early shader/material tuning: sediment coloration gradients, softer specular vs. open sea, foam localization along dynamic banks
- Performance sampling with simulation parameters at target camera distances
- Draft interface point between future Flood Cycle system and Crest water level parameters

### Technical Approach (First Iteration)

- Author river geometry using splines -> generate flow-aligned mesh strips or mask textures
- Apply Crest water surface with tuned underwater scattering color to imply silty Nile water
- Bank blending: planned deferred pass or terrain material splat alpha expansion to eliminate hard seams
- Flow direction encoding for future floating debris / barge pathing cues

### Challenges & Considerations

- Maintaining stable simulation cost while camera rotates frequently (isometric multi-angle views)
- Synchronizing water height offsets with seasonal cycle without popping (lerp with curve smoothing)
- Edge case: shallow delta branches causing tile walkability ambiguity

### Next Steps

- Implement shoreline blend prototype
- Add debug overlay for per-segment flow rate
- Begin integration test with placeholder flood height curve
- Investigate wetness / fertility propagation map export each season transition

---

## Time Management Architecture

### Design Pillars

- Deterministic progression for simulation reproducibility
- Event-driven hooks to avoid per-frame polling by subsystems
- Scalable granularity: fast internal ticks aggregated up to minutes, hours, days, seasons, years

### Current Implementation Highlights

- Core tick accumulator decoupled from frame delta (supports time scaling)
- Calendar abstraction layer: configurable season count & naming (proto-dynastic thematic flavor)

---

## First Scenario: NAQADA – Birth of the Nile

### Vision

This is the first level where you will be understanding game mechanics.

### Draft Objectives (Subject to Iteration)

- Reach population milestone N (placeholder value)
- Construct first market, prefecture and architecture building
- Establish contiguous road network linking housing cluster and storage

### Progression & Teaching Beats

1. Basic placement & movement (camera + roads)
2. Housing adjacency & villager emergence
3. Food production vs. soil fertility indicator introduction
4. Time acceleration & preparing for approaching flood (warning event)
5. Post-flood reclamation and expansion choice

### Next Steps

- Money management, water management and fire mangement.

Here is some demo:

<video controls>
  <source src="/assets/blog/videos/2025-08-09-core-systems-update.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

---

## Summary & Outlook

Thank you for reading this week's devblog! More to come on upcoming weeks.
