---
layout: post
title: "Growing Salmonella Under Gut Stress: My IISc Experiment"
date: 2025-05-19
permalink: /salmonella-growth-stress/
categories: [biology]
tags: [biology, STEM, microbiology, internship, research]
---

Toward the end of my [internship at IISc](/biology/2025/05/12/IISc-internship.html) I ran a small experiment of my own. The question was simple: before *Salmonella* can cause disease, it has to survive the gut, so how much do the gut's conditions actually slow it down?

**The idea**

The gut is hostile in several ways at once. Stomach acid lowers the pH. Bile salts break up membranes. And the host withholds iron, which bacteria need, as a defense called nutritional immunity. I wanted to measure how each of these changes *Salmonella*'s growth, and whether two of them together do more damage than either alone.

**The plan, and what I actually ran**

I planned seven conditions: a control, low pH, bile salts, iron depletion, and the three pairings. In the time I had I ran three of them:

- **Control:** plain LB broth
- **Bile salts:** LB with sodium deoxycholate
- **Iron depletion:** LB with 2,2-dipyridyl, an iron chelator

Both compounds were already in the lab, which is part of why I started with those two.

**Method**

1. I grew *S.* Typhimurium wild type overnight in LB, streaked it, picked colonies and grew a fresh overnight culture from those.
2. I made stocks: 2,2-dipyridyl in 100% ethanol, and sodium deoxycholate in water at 10%.
3. I added sodium deoxycholate at 200 µL per 10 mL of LB, and dipyridyl to its own flasks.
4. I added 100 µL of the overnight culture to each condition, took a reading at time zero, and plated replicates into a 96-well plate.
5. The plate went into a shaking incubator at 37 °C.
6. I read the optical density at 1, 2, 3, 6, 12 and 24 hours. <!-- the plan said OD600; your results chart says 595 nm, so I used 595. Confirm which it was. -->

Each condition was run in replicate and I plotted the mean. <!-- confirm how many replicates: the plan says 3 biological replicates, the notebook says 2 -->

**Results**

{% include figure.html dir="salmonella-growth-stress" n=1 alt="Line chart of optical density at 595 nm over 24 hours for control, bile and iron depletion" caption="Mean optical density at 595 nm over 24 hours. LB is the control, Bile is sodium deoxycholate, ID is iron depletion." %}

Both stresses slowed growth, and iron depletion slowed it more than bile did. By 24 hours the control sat around 0.34, bile around 0.22 and iron depletion around 0.13. The control reached its plateau within a couple of hours, while both stressed cultures took about six hours to reach their highest reading and then fell back.

So the ranking came out the way I expected, but the curves did not.

**What is wrong with this data**

A growth curve should rise and then level off. Mine does not. The control jumps to its highest reading at one hour, then falls and settles lower. The bile culture drops to its lowest reading at three hours and then more than quadruples by six hours. Neither of those is how bacteria grow.

The most likely explanations are on my side rather than the bacteria's:

- **The starting culture was probably too dense.** If it was already near stationary phase, there was never much growth left to see.
- **Reading from a 96-well plate is noisy.** Small volumes, settling cells and condensation all move the number around, and I had already seen in another experiment that optical density counts anything in the well, not just live cells.
- **I had no colony counts to check it against.** The plan included plating serial dilutions at three timepoints to confirm that optical density tracked real cell numbers. I did not get to that part.
- **Too few timepoints early on.** Readings every 30 minutes for the first three hours would have caught the lag phase, which is where the stress conditions should differ most.

**What I would do differently**

Dilute the overnight culture properly into fresh broth and start at a known low density. Use flasks rather than a plate. Read every 30 minutes through the early hours. Plate for colony counts at the end of lag, mid-log and stationary phase. And run the pairings, which were the part I was actually curious about, since there is no reason to assume two stresses combine into the sum of their separate effects.

**Why I still think it was worth doing**

This was the first experiment I designed rather than assisted with, and most of what I learned came from the parts that went wrong. Reading a protocol is easy. Deciding how many timepoints you need, what your control has to control for, and how you would know if your measurement is lying to you is a different skill, and I did not have it yet.
