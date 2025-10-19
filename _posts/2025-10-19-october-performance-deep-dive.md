---
title: "October Performance Deep Dive"
excerpt: "Tuning frame times and showing fresh builds for Tutankhamun: Builders of the Eternal"
coverImage: "/assets/blog/images/2025-10-19-october-performance-deep-dive.png"
date: "2025-10-19T08:00:00.000Z"
author:
  name: "Bura Chuhadar"
  picture: "/assets/blog/authors/bc.jpg"
ogImage:
  url: "/assets/blog/images/2025-10-19-october-performance-deep-dive.png"
---

## Performance Focus for October 2025

Optimization has been the theme of the month. We profiled the engine across mid-range GPUs and concentrated on stabilizing frame pacing in the busiest city views. Batch rendering for construction props, smarter occlusion culling, and animation LODs together shaved up to 28% off the heaviest scenes.

## Simulation and Memory Wins

Villager AI received pathfinding cache improvements that dropped CPU spikes during rush-hour routines. Texture streaming now relies on adaptive budgets, reducing peak VRAM usage on 4K setups.

## Sneak Peek: New Building Types

This month’s capture highlights the optimized build with fresh engineering buildings we’re refining this month. You’ll spot them in the latest performance video as everything locks into place.

<!-- Replace VIDEO_ID with the YouTube identifier once the upload is live. -->
<iframe
  src="https://player.mux.com/4Col4o00H3qQHlzMZOo1F3c02JBCWFDH01jzJk9svAEvu4?metadata-video-title=2025-10-19-october-performance-deep-dive&video-title=2025-10-19-october-performance-deep-dive"
  style="width: 100%; border: none; aspect-ratio: 16/9;"
  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
  allowfullscreen
></iframe>

## What’s Next

We’re wrapping the engineering building and we will start focusing on farming. Expect more polishing passes as we bring every system together for the upcoming milestone.
