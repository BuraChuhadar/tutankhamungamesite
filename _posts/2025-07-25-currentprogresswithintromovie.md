---
title: "Intro Movie In Progress"
excerpt: "Creating an epic cinematic introduction for Tutankhamun: Builders of the Eternal using Blender 3D"
coverImage: "/assets/blog/images/initialrendering.png"
date: "2025-07-24T05:35:07.322Z"
author:
  name: "Bura Chuhadar"
  picture: "/assets/blog/authors/bc.jpg"
ogImage:
  url: "/assets/blog/images/initialrendering.png"
---

# Continuing Our Ongoing Journey

## Overview

A little bit hiatus on the dev blogging. That doesn't mean we are not working in the background. Quite progress has been made. Current focus in between shifted a little bit on the intro movie! We are using Blender 3D for this introduction video and some visuals are available!

## The Vision: Cinematic Storytelling

Creating an introduction movie for **Tutankhamun: Builders of the Eternal** has been one of our most exciting challenges yet. We wanted to craft something that would immediately transport players into the mystical world of ancient Egypt - complete with sweeping desert vistas, majestic pyramids, and the grandeur of pharaonic civilization.

The intro serves multiple purposes:

- **Setting the Atmosphere**: Establishing the epic scale and mystical tone of the game
- **Narrative Context**: Introducing players to the world they're about to build and rule
- **Technical Showcase**: Demonstrating the visual fidelity and artistic direction

## Blender 3D: Our Creative Canvas

### Why Blender?

After evaluating several options including traditional video editing software and other 3D animation packages, we chose Blender 3D for several compelling reasons:

1. **Superior Rendering Quality**: Cycles and Eevee render engines produce cinematic-quality visuals
2. **Advanced Animation Tools**: Professional-grade rigging and animation systems
3. **Complete Production Pipeline**: Everything from modeling to final video export in one package
4. **Cost Effectiveness**: Open-source solution that doesn't break the indie budget

### Current Production Pipeline

Our workflow consists of several interconnected phases:

**1. Concept and Storyboarding**

- Created detailed storyboards outlining key scenes
- Established camera movements and transitions
- Defined lighting and mood for each sequence

**2. Asset Creation**

- Modeling iconic Egyptian structures (pyramids, temples, sphinxes)
- Creating detailed character models for pharaohs and workers
- Developing environmental assets (sand dunes, palm trees, Nile river)

**3. Animation and Cinematography**

- Implementing smooth camera sweeps across vast landscapes
- Animating character movements and crowd scenes
- Creating particle effects for sand storms and magical elements

**4. Rendering and Post-Processing**

- Utilizing Blender's Cycles engine for photorealistic lighting
- Implementing atmospheric effects and depth of field
- Color grading to achieve that golden, sun-baked Egyptian aesthetic

### Render Farm Setup

To handle the computationally intensive rendering, we've set up a distributed rendering solution using multiple approaches:

**Local Render Farm**

```bash
# Blender command-line rendering for automated farm
blender intro_scene.blend --background --render-anim --render-output //renders/frame_#### --render-format PNG --render-frame 1 250
```

**SheepIt Render Farm Integration**

For particularly demanding sequences, we've also leveraged [SheepIt Render Farm](https://www.sheepit-renderfarm.com/) - a free distributed rendering service for Blender projects. This community-driven platform allows us to:

- Submit complex scenes that would take days on our local machines
- Contribute our own computing power when not actively rendering
- Access hundreds of machines worldwide for faster turnaround times
- Handle 4K resolution frames that require significant VRAM

The combination of local rendering for quick iterations and SheepIt for final high-quality frames has dramatically accelerated our production pipeline.

### Memory Management

Working with high-poly models and 4K textures in Blender requires careful memory management:

- Using proxies for viewport navigation
- Implementing scene linking to keep file sizes manageable
- Optimizing texture resolution based on screen importance

## Future Enhancements

### Interactive Elements

We're exploring adding subtle interactive elements to the intro:

- Mouse movement affecting camera drift
- Click-to-skip with smooth transitions
- Dynamic music adaptation based on player engagement

### Modular System

Building the intro as a modular system will allow us to:

- Create variations for different game modes
- Update specific scenes without re-rendering everything
- Potentially use scenes for in-game cutscenes

## Lessons Learned

### Planning is Everything

The importance of detailed pre-production cannot be overstated. Our initial week spent on storyboarding and planning saved us countless hours during production.

### Iterative Approach

Starting with low-resolution previews and gradually increasing quality has allowed us to make creative decisions quickly without waiting for long renders.

### Community Feedback

Sharing work-in-progress shots with our community has provided invaluable feedback and kept excitement high for the project.

## What's Next?

The intro movie represents just one facet of our ongoing development. While we continue polishing the cinematic sequences, our programming is simultaneously:

- Implementing advanced AI systems for villager behavior
- Optimizing the game's rendering pipeline for better performance
- Developing sophisticated economic simulation systems
- Creating intuitive UI/UX for complex city management

## Conclusion

Creating a professional-quality intro movie as an indie team has been both challenging and incredibly rewarding. The combination of Blender's powerful tools and our team's growing expertise in 3D animation is producing results that we're genuinely excited to share with players.

The intro movie isn't just eye candy - it's our promise to players about the quality and attention to detail they can expect throughout **Tutankhamun: Builders of the Eternal**. Every frame represents our commitment to creating something truly special in the city builder genre.

Stay tuned for more updates as we approach the final render and video production phases. The pyramid is being built, block by block, frame by frame.

![Tutankhamun: Builders of the Eternal](/assets/blog/images/anotherexample.png)
