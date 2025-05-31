---
title: "Pathfinding & Villager Immigration in a Pharaoh-Style Unity City Builder"
excerpt: "Designing a two-phase pathfinding system and queuing logic for authentic villager movement in a Unity city builder."
coverImage: "/assets/blog/images/villagers-in-the-making.png"
date: "2025-05-31T05:35:07.322Z"
author:
  name: "Bura Chuhadar"
  picture: "/assets/blog/authors/bc.jpg"
ogImage:
  url: "/assets/blog/images/villagers-in-the-making.png"
video: "/assets/blog/videos/villagers-in-the-making.mp4"
---

# Pathfinding & Villager Immigration in a Pharaoh-Style Unity City Builder

## Overview

While building a Pharaoh-inspired city builder in Unity, I wanted to make the immigration system feel authentic: villagers should spawn at the map edge, move toward the nearest road, and then follow roads all the way to their new homes—just like in classic city builders. Here’s how I designed a two-phase pathfinding system and queuing logic so that villagers don’t overlap and move smoothly through the city.

---

## Video Demo

Villagers walking to the house

<video controls>
  <source src="/assets/blog/videos/villagers-in-the-making.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

## How Immigration Pathfinding Works

**1. Villager Spawn (Immigration Point)**  
Villagers spawn at a fixed immigration cell at the edge of the map (not always next to a road).

**2. Finding the Road**  
Each villager finds the nearest road tile to their spawn point. This allows the city to organically grow away from the map edge, and for villagers to “walk into” the city like in Pharaoh.

**3. Two-Phase Pathfinding**

- **Phase 1:** The villager walks in a straight line (Bresenham/DDA) from the immigration point to the closest road.
- **Phase 2:** The villager then uses A\* (or similar) pathfinding to traverse connected road tiles to their assigned house.

**4. Queueing Logic**  
Multiple villagers spawning at the same time form a visually pleasing “queue” by offsetting their spawn positions perpendicular to their travel direction—this prevents overlap and simulates lines of immigrants.

**5. Walking Animation**  
Villagers interpolate between path nodes each frame, resulting in smooth, natural-looking movement as they navigate to their destination.

---

## Example: Villager Pathfinding Logic (C#)

Here’s the core code for how a villager chooses their path and walks to a house:

```csharp
public void StartWalking(Grid gridRef, Vector3Int startCell, Vector3Int targetCell)
{
    grid = gridRef;

    // 1. Find nearest road cell to immigration point
    Vector3Int nearestRoad = GameManager.Instance.FindNearestRoadCell(startCell);

    // 2. Straight-line walk from immigration to road
    var phase1Path = GetStraightPath(startCell, nearestRoad);

    // 3. A* from road to house, using only valid road and house cells
    var allCells = GameManager.Instance.houseCells.Concat(GameManager.Instance.roadCells).ToList();
    int minX = allCells.Min(c => c.x);
    int maxX = allCells.Max(c => c.x);
    int minY = allCells.Min(c => c.y);
    int maxY = allCells.Max(c => c.y);

    var phase2Path = Pathfinder.FindPath(grid, nearestRoad, targetCell, VillagerIsPassable, minX, maxX, minY, maxY);

    // 4. Merge both phases into a single path
    path = new List<Vector3Int>();
    if (phase1Path != null && phase1Path.Count > 0)
        path.AddRange(phase1Path);
    if (phase2Path != null && phase2Path.Count > 1)
        path.AddRange(phase2Path.Skip(1)); // skip connecting cell

    pathIndex = 0;
    walking = path != null && path.Count > 1;

    // 5. Apply queue offset so villagers form a line
    ApplyQueueSpawnOffset(startCell, nearestRoad);
}
```

---

## Preventing Overlap: Queueing at Immigration

To prevent all villagers from standing in the exact same spot, each villager checks how many others have spawned at that location and offsets itself perpendicular to its travel direction:

```csharp
private void ApplyQueueSpawnOffset(Vector3Int startCell, Vector3Int nearestRoad)
{
    var allVillagers = Object.FindObjectsByType<Villager>(FindObjectsSortMode.None);
    int queueIndex = 0;
    foreach (var v in allVillagers)
    {
        if (v != this && v.path != null && v.path.Count > 0 && v.path[0] == startCell)
            queueIndex++;
    }
    Vector3 dir = (grid.GetCellCenterWorld(nearestRoad) - grid.GetCellCenterWorld(startCell)).normalized;
    if (dir.sqrMagnitude < 0.001f)
        dir = Vector3.right;
    Vector3 perp = Vector3.Cross(dir, Vector3.up).normalized;
    Vector3 spawnPos = grid.GetCellCenterWorld(startCell) + perp * queueSpacing * queueIndex;
    spawnPos.y = GetSurfaceYAtCell(startCell);
    transform.position = spawnPos;
}
```

---

## Walking Along the Path

Villagers move toward each point in their computed path, adjusting their Y (height) based on the tile’s world position (and any desired offset):

```csharp
void Update()
{
    if (!walking || path == null || pathIndex >= path.Count)
        return;

    Vector3 targetWorld = grid.GetCellCenterWorld(path[pathIndex]);
    targetWorld.y = GetSurfaceYAtCell(path[pathIndex]);

    Vector3 moveDir = (targetWorld - transform.position);
    float dist = moveDir.magnitude;

    if (dist < 0.05f)
    {
        pathIndex++;
        if (pathIndex >= path.Count)
        {
            walking = false;
            OnArrival();
        }
    }
    else
    {
        transform.position += moveDir.normalized * moveSpeed * Time.deltaTime;
    }
}
```

---

## Why This Feels Like Pharaoh

- **Authentic immigration:** Villagers walk in from the edge, find roads, and follow them—just like the classic city builders.
- **No teleportation:** All movement is visible and makes use of your city’s layout.
- **Organic lines:** Queueing makes immigrants look like crowds arriving, not a swarm of clones.
- **Expandable:** Works with any city layout—villagers always adapt to the current roads and available houses.

---

If you’re building a city builder in Unity and want Pharaoh-style pathfinding for your citizens, this approach is robust, flexible, and visually pleasing.  
Check out the demo video and feel free to adapt the code for your own project!

## Example Video

Villagers walking to the house
