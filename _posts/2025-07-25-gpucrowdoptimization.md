---
title: "GPU Crowd Optimization: From 25-30 FPS to Solid 60 FPS"
excerpt: "How I solved critical performance and rotation issues in crowd rendering using GPU Instancer Pro and discovered that Ctrl+A in Blender was the unexpected culprit"
coverImage: "/assets/blog/images/gpucrowdoptimization.png"
date: "2025-06-22T05:35:07.322Z"
author:
  name: "Bura Chuhadar"
  picture: "/assets/blog/authors/bc.jpg"
ogImage:
  url: "/assets/blog/images/gpucrowdoptimization.png"
---

# GPU Crowd Optimization: From 25-30 FPS to Solid 60 FPS

_Development Blog - Tutankhamun Project_  
_Date: June 22, 2025_

## Overview

This development blog documents a significant performance optimization breakthrough in my crowd rendering system using GPU Instancer Pro. I successfully improved performance from a stuttering 25-30 FPS to a solid 60 FPS, while also resolving critical rotation issues that were affecting my villager animations.

![Tutankhamun: Builders of the Eternal](/assets/blog/images/sculpture.png)

## The Challenge

My Tutankhamun project features large crowds of villagers moving through ancient Egyptian scenes. Initially, I was experiencing:

- **Poor Performance**: Frame rates fluctuating between 25-30 FPS with frequent drops
- **Rotation Issues**: Villagers appearing with incorrect orientations during animations
- **Inconsistent Rendering**: Crowd animations appearing jerky and unnatural

These issues were severely impacting the user experience and preventing me from achieving my target of smooth 60 FPS gameplay.

## The Investigation

### Performance Bottlenecks

My initial analysis revealed that the crowd rendering system was struggling with:

- High draw call counts from individual villager meshes
- Inefficient animation processing on the CPU
- Suboptimal GPU utilization for crowd rendering

### The Rotation Mystery

The rotation issues were particularly puzzling. Villagers would:

- Appear rotated incorrectly when transitioning between animations
- Have inconsistent facing directions during pathfinding
- Show visual artifacts during state changes (idle ↔ walking)

## The Solution: GPU Instancer Pro Crowd Animations

### Implementation Strategy

I integrated **GPU Instancer Pro's Crowd Animation system** with the following key components:

1. **Compute Animator Workflow**: Leveraged GPU compute shaders for animation processing
2. **Batch Processing**: Moved from individual villager updates to batched crowd operations
3. **List-Based Animation System**: Implemented flexible animation clip management

### Key Technical Changes

#### 1. Animation System Refactoring

```csharp
// Before: Hardcoded animation references
public AnimationClip idleAnimation;
public AnimationClip walkingAnimation;

// After: Flexible list-based system
public List<AnimationClip> idleAnimations = new List<AnimationClip>();
public List<AnimationClip> walkingAnimations = new List<AnimationClip>();
```

#### 2. GPU Compute Animator Integration

I implemented a robust system that:

- Uses reflection to access GPU Instancer Pro APIs
- Provides fallback mechanisms for compatibility
- Supports random animation start times for natural crowd behavior

#### 3. Simplified Villager Animation System

Initially, I created multiple animation components:

- **VillagerPlayer.cs**: Handled regular villager animations (idle, walking)
- **VillagerVasePlayer.cs**: Managed vase-carrying villager animations

However, after discovering the Blender transformation fix, I realized this separation was unnecessary and counterproductive. The **VillagerVasePlayer was removed** because:

- It created animation sync conflicts with the main character
- Multiple animation players were competing for control
- The Blender fix eliminated the need for separate animation handling
- A single unified **VillagerPlayer** system proved more reliable and maintainable

## The Breakthrough: Fixing the Rotation Issue

### The Culprit: Ctrl+A Apply Transformation

After extensive debugging, I discovered the root cause of my rotation issues:

**The Problem**: During the 3D modeling pipeline, meshes had transformations that weren't properly applied before export to Unity.

**The Solution**:

1. In Blender: Select all objects (Ctrl+A)
2. Choose "Apply" → "All Transforms"
3. This bakes rotation, scale, and position into the mesh data
4. Re-export to Unity with clean transformation matrices

### Simplifying the Animation System

Once I fixed the Blender transformation issue, I made an important architectural decision: **I removed the VillagerVasePlayer component entirely**.

**Why I initially created VillagerVasePlayer:**

- I thought carrying vases required separate animation handling
- Believed different animation sets needed isolated components
- Assumed rotation issues were animation-state related

**The revelation:**

- The Blender transformation fix solved ALL rotation issues
- Vase-carrying vs. regular villagers could use the same animation system
- **VillagerVasePlayer was actually creating animation sync issues** with the main character
- Multiple animation players were fighting for control, causing visual glitches

**The simplified approach:**

- Single **VillagerPlayer** component handles all animation states
- Vase-carrying is now just an animation state, not a separate system
- Clean, unified animation pipeline with no sync conflicts
- Reduced complexity and improved maintainability

This architectural simplification eliminated the animation sync issues I was experiencing and proved that the root problem was always the Blender transformations, not the animation logic complexity.

### Why This Mattered

When transformations aren't applied in Blender:

- Unity receives meshes with "baked-in" rotations that conflict with runtime transforms
- GPU Instancer Pro's compute shaders receive incorrect transformation data
- Animation systems fight against these embedded transformations
- Result: Visual artifacts, incorrect orientations, and performance penalties

## Performance Results

### Before Optimization

- **FPS**: 25-30 FPS (unstable)
- **Frame Time**: 33-40ms (inconsistent)
- **Draw Calls**: ~500-800 per frame
- **CPU Usage**: High animation processing overhead

### After Optimization

- **FPS**: Solid 60 FPS
- **Frame Time**: Consistent 16.7ms
- **Draw Calls**: ~50-100 per frame (dramatic reduction)
- **CPU Usage**: Minimal - most processing moved to GPU

### Performance Metrics

| Metric              | Before | After | Improvement |
| ------------------- | ------ | ----- | ----------- |
| Average FPS         | 27     | 60    | **+122%**   |
| Min FPS             | 22     | 58    | **+164%**   |
| Frame Time Variance | ±8ms   | ±1ms  | **-87%**    |
| Draw Calls          | 650    | 75    | **-88%**    |

### Additional Improvements

Beyond the crowd optimization, the project now features **improved terrain rendering** with more natural landscape visuals. The GPU Instancer optimizations have proven so effective that **all batch renderings are now limited to no more than 37 draw calls**, representing an exceptional level of rendering efficiency that maintains 60 FPS even with complex scenes featuring large crowds and detailed environments.

## Technical Implementation Details

### Random Animation Start Times

```csharp
// Generate random starting time for natural crowd behavior
float randomStartTime = Random.Range(randomStartTimeRange.x, randomStartTimeRange.y);

// Apply to GPU Instancer Pro Compute Animator
GPUIAWComputeAnimator.Instance.StartAnimation(
    crowdInstance,
    clip,
    randomStartTime, // Prevents synchronized animations
    speed,
    transitionTime,
    loop,
    false
);
```

### Batch Processing Benefits

- **Individual Updates**: Each villager processed separately (CPU-intensive)
- **Batch Processing**: Hundreds of villagers processed together on GPU
- **Result**: Massive performance improvement with better visual quality

## Lessons Learned

### 1. Always Apply Transformations in 3D Software

- Use Ctrl+A → Apply → All Transforms in Blender
- Verify clean transformation matrices before Unity import
- This prevents countless downstream issues

### 2. GPU Compute Shaders for Crowds

- Modern GPUs excel at parallel processing
- Moving animation logic to GPU frees CPU for other tasks
- Batch operations are orders of magnitude more efficient
- **Unified animation system**: Removing VillagerVasePlayer eliminated sync conflicts

### 3. Flexible Animation Systems

- List-based animation management provides scalability
- Random selection adds natural variation
- Caching strategies balance performance and variety

### 4. Proper Debugging Workflow

- Performance profiling revealed bottlenecks
- Visual debugging helped identify transformation issues
- Systematic testing confirmed optimizations

## Conclusion

This optimization journey demonstrates the importance of:

- **Proper asset pipeline**: Clean transformations prevent major issues
- **Modern GPU utilization**: Leveraging compute shaders for crowd processing
- **Systematic debugging**: Methodical investigation reveals root causes
- **Performance monitoring**: Continuous measurement ensures sustained improvements

The combination of GPU Instancer Pro's crowd animation system and proper asset preparation transformed my crowd rendering from a performance bottleneck into a smooth, efficient system running at solid 60 FPS.

![Tutankhamun: Builders of the Eternal](/assets/blog/images/gpuioptimzer.png)
