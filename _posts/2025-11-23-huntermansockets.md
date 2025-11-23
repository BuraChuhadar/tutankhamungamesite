---
title: "Sockets Over Firewatchman: Bringing Hunter Animations to Life"
excerpt: "Why we retired Firewatchman's prefab animations in favor of a socket-driven pipeline for HunterMan, and what it unlocks for combat readability."
coverImage: "/assets/blog/images/2025-11-23-hunterman-sockets.png"
date: "2025-11-23T00:00:00.000Z"
author:
  name: "Bura Chuhadar"
  picture: "/assets/blog/authors/bc.jpg"
ogImage:
  url: "/assets/blog/images/2025-11-23-hunterman-sockets.png"
---

# Moving Beyond Firewatchman's Prefabs

HunterMan is our reference character for mid-game ostrich hunting, and he exposed a friction point: Firewatchman baked whole fire-extinguishing sequences into single prefab animations. They look fine when nothing changes, but as soon as stats or item skins vary, we are either duplicating prefabs or compromising on feedback.

While we're keeping the existing Firewatchman assets for now, we'll be readdressing them later. Moving forward, new characters like HunterMan will use a socket-driven pipeline.

Sockets solve the rigidity. Instead of locking every motion into a monolithic clip, we bind reusable poses, weapon meshes, and FX to named attachment points--hips, spine, hands, even arrow notches--then drive timing in code/data.

---

## Problems With Firewatchman

- Prefab sprawl: Each tool/homeworld combo needed its own animation prefab, multiplying authoring time and review overhead.
- One-off FX: Water streams and smoke effects were keyed directly into Firewatchman clips, so changing visual intensity meant re-exporting animations.
- Zero runtime context: The animation system couldn't read HunterMan's stamina or perk state mid-swing, so we faked slow/fast variants with separate clips.
- Blocking iteration: Any tweak required a DCC round-trip; Hot Reload couldn't help because data lived inside imported assets.

---

## Why Sockets Win

- Data-driven assembly: HunterMan now pulls weapon meshes, trails, and impact FX from runtime data, plugging them into sockets defined on the rig.
- Context-aware timing: Code nudges blend weights, root-motion distance, and FX intensity based on live stats without duplicating clips.
- Recolorable FX: VFX graphs reference socket metadata (weapon type), so recolors happen through shared shaders/material overrides.
- Lean content: One base hunting pose can now cover every spear or bow simply by swapping socket payloads.

<video controls preload="metadata" width="100%" src="/assets/blog/videos/hunterman-socket-demo.mp4">
  Your browser does not support the video tag.
</video>
<p class="text-sm text-center text-gray-500 mt-2">Debug view showing socket attachment points tracking in real-time.</p>

---

## How HunterMan Uses Them

- Pose Library: Animation clips provide clean pose transitions only; they're agnostic about weapons or FX.
- Socket Map: Each bone socket stores offsets/constraints. The HunterMan job system writes transforms once per frame--no allocations, no LINQ.
- Event Stream: Timeline markers publish "draw", "release", "impact" events. Gameplay scripts listen and spawn socket-bound FX or projectiles.
- Fallback Rules: If a socketed asset is missing, HunterMan swaps to a default mesh/material list so combat never stalls.

---

## Player-Facing Wins

- Readable upgrades: Equip a new bow or arrow type and you instantly see the difference in the draw—no animation rebuild required.

<video controls preload="metadata" width="100%" src="/assets/blog/videos/hunterman-animations-demo.mp4">
  Your browser does not support the video tag.
</video>
<p class="text-sm text-center text-gray-500 mt-2">The final result: fluid hunting animations with hot-swappable gear.</p>
- Elemental clarity: Fire vs. frost vs. venom attacks use the same swing but emit distinct socket FX, so you read status at a glance.
- Responsive tuning: Balance passes on attack speed or knockback propagate through the animation graph automatically, keeping HunterMan aligned with combat math.
- Future-proofing: When we add dual-wielding or shield tech, we only define new socket payloads instead of duplicating Firewatchman prefabs.

---

## In Short

Firewatchman's prefab animations boxed us into static combat vignettes. By moving HunterMan to a socket-based assembly line, every swing becomes a modular composition of poses, meshes, and FX that respond to live game data. The result is fewer assets to manage, richer feedback for players, and a combat system that can actually keep up with the rest of Tutankhamun's evolving sandbox.
