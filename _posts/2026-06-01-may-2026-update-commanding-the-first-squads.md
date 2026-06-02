---
title: "May 2026 Update: Commanding the First Squads"
excerpt: "May focused on turning the military production chain into controllable squads, with selection, orders, formation previews, bridge movement, barracks staging, and stronger save/load support."
coverImage: "/assets/blog/images/2026-04-03-mine-and-military-production-chain-07-spearman-military.png"
date: "2026-06-01T00:00:00.000Z"
author:
  name: "Bura Chuhadar"
  picture: "/assets/blog/authors/bc.jpg"
ogImage:
  url: "/assets/blog/images/2026-04-03-mine-and-military-production-chain-07-spearman-military.png"
---

Builders, hello.

In the March update, I showed the military production chain and the building roles behind it. May was about moving beyond that planning layer and making the first military units behave like something you can actually command on the map.

This is still foundation work, not the final combat update, but the military system is now much closer to becoming a playable part of the city simulation.

<div style="position: relative; width: 100%; aspect-ratio: 16 / 9; margin: 2rem 0;">
  <iframe
    src="https://www.youtube.com/embed/k4-ZiiIeMAI"
    title="May 2026 Tutankhamun military update video"
    style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div>
<p class="text-sm text-center text-gray-500 mt-2">A video look at the May military update and the first squad-control work.</p>

---

## Squads Are Becoming Real Gameplay Objects

The biggest change this month is that soldiers are no longer just an output of the recruitment chain. They now exist as active squads with selection, movement, formation logic, and save/load support.

That shift matters because it turns the military from a future production goal into something the player can begin using directly. You can select squads, send them across the map, and see the first shape of the tactical layer that will support future battles.

![Spearman squad unit](/assets/blog/images/2026-04-03-mine-and-military-production-chain-07-spearman-military.png)
<p class="text-sm text-center text-gray-500 mt-2">Spearmen are part of the first live military roster and now sit inside a broader squad-control foundation.</p>

---

## Selection, Orders, and Formation Preview

The squad control layer received a major pass this month.

Active squads can now be selected, group-selected, and given movement orders. The command system supports both walk and run behavior, and the UI gives clearer feedback when an order is issued.

Formation previews are also in place so you can see how selected soldiers are expected to arrange themselves before the order is committed. That is an important step toward making the army feel readable and intentional instead of feeling like a loose crowd of units.

Current formation work includes:

- Line formations
- Box formations
- Column formations
- Wedge formations

Those shapes give the first squad types a stronger identity and leave room for later combat systems to grow.

---

## Movement That Understands the City

Military movement needed deeper work because Tutankhamun is a city builder first. Soldiers need to move through a real settlement full of roads, buildings, terrain changes, and narrow access points.

May added more of the tactical pathing layer needed for that. Squads can resolve movement to walkable positions, avoid blocked building footprints, recover followers that drift out of formation, and stay grounded correctly on the map.

Bridge movement also received attention. Bridges are not just cosmetic road pieces once military units enter the game. They become strategic routes, chokepoints, and access paths between separated areas. The bridge work this month improves placement validation and helps squads move through bridge routes in a cleaner column instead of each unit trying to solve the crossing on its own.

---

## Soldiers With More Identity

The first live roster remains focused on Spearmen and Archers, but May was less about announcing those unit types and more about making them act correctly.

Spearmen received animation and idle polish so they can hold their weapons more naturally while waiting or moving. Archers received bow-focused attack behavior, including arrow projectile support with flight movement, rotation, trails, and hit completion.

There was also work on military equipment sockets and unit setup so weapons such as spears, shields, bows, and arrows can be attached more consistently to soldier prefabs.

![Archer squad unit](/assets/blog/images/2026-04-03-mine-and-military-production-chain-06-archer-military.png)
<p class="text-sm text-center text-gray-500 mt-2">Archers now have more of the behavior needed for future battlefield encounters.</p>

---

## Barracks Staging

Recruitment now has more structure after soldiers are produced.

Barracks can provide waiting and staging areas for trained units, which helps soldiers move into a more believable military flow instead of simply appearing and standing wherever they were created. The system also has better checks for missing training support, so the player can get clearer feedback when recruitment cannot complete the way it should.

This is the kind of work that is easy to miss in screenshots, but it is important. The military layer needs to connect cleanly to city layout, building placement, pathing, and save/load before larger enemy systems are layered on top.

---

## Save, Load, and Reliability

Military state now has stronger persistence support.

Active squads can be captured for saving, restored with their owning recruitment buildings, and cleaned up correctly when a save is loaded. That keeps the military system aligned with the rest of the simulation instead of becoming a separate runtime-only feature.

I also expanded test coverage around military recruitment, formation planning, squad selection, movement helpers, A* behavior, formation previews, arrow projectiles, and bridge validation. The goal is to make this foundation stable enough to keep building on without breaking earlier city systems.

---

## First Military Scenario Work

The first dedicated military scenario has also shifted names from Semna to Tjaru.

Tjaru is a better fit for the direction of the scenario: a frontier settlement where military readiness, roads, bridges, and access routes can matter more directly. This is where the new systems can come together: city planning, military production, squad movement, terrain access, barracks staging, and eventually enemy pressure.

![Tjaru military scenario screenshot](/assets/blog/images/2026-06-01-tjaru-military-scenario.png)
<p class="text-sm text-center text-gray-500 mt-2">A look at Tjaru, where roads, terrain access, mining sites, and military staging start to come together.</p>

What is coming next for this scenario is more playable pressure around the army itself. I want the map to ask the player to prepare soldiers, move them with purpose, protect important routes, and respond to threats in a way that still feels connected to the city-building loop.

---

## What This Means

May was about the transition from military production to military control.

The earlier updates explained how the city prepares an army. This update is about what happens once that army starts appearing on the map. Squads can be selected, moved, previewed in formation, routed around city obstacles, staged near barracks, saved, loaded, and tested.

The next steps are to make the system more visible in moment-to-moment gameplay: clearer combat encounters, stronger enemy pressure, better battlefield feedback, and more scenario goals where the army becomes part of the city's survival.

Thanks for following development.
