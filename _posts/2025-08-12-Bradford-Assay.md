---
layout: post
title: "Biochemistry Experiments: Bradford Assay [3/12]"
date: 2025-08-12
categories: [biology]
tags: [biochemistry, STEM, biology, experiments, internship]
---

**Purpose:** To measure protein concentration using the Bradford assay and a BSA standard curve.

**Principle:**
Bradford reagent contains Coomassie Brilliant Blue (CBB) dye and is strongly acidic. In the acidic reagent, the free dye is reddish-brown. When the dye binds to protein, mainly to aromatic amino acid residues and positively charged amino acids such as arginine and lysine, it shifts to blue. The more protein there is, the more blue the solution becomes. The blue form is detected at 595 nm.

To turn absorbance into concentration, I made a standard curve with bovine serum albumin (BSA), a protein of known concentration. I plotted absorbance (y) against BSA concentration (x) and fit a straight line, y = mx + c, checking the fit with R². The absorbance of an unknown sample can then be put into the equation to find its concentration.

**Materials:**
- Bradford reagent
- BSA stock
- Distilled water
- Test tubes, pipettes and a 96-well plate
- Spectrophotometer (plate reader)

**Protocol:**
1. I set up the standards and unknown as below.

| Tube | Blank | 1 | 2 | 3 | 4 | 5 | Unknown |
|---|---|---|---|---|---|---|---|
| BSA (µg) | 0 | 4 | 8 | 12 | 16 | 20 | ? |
| BSA stock (µL) | 0 | 4 | 8 | 12 | 16 | 20 | 50 (sample) |
| Distilled water (µL) | 200 | 196 | 192 | 188 | 184 | 180 | 150 |
| Bradford reagent (µL) | 500 | 500 | 500 | 500 | 500 | 500 | 500 |

2. I added the Bradford reagent to each tube and mixed.
3. I incubated the tubes for 15 minutes at room temperature in the dark.
4. I transferred 200 µL from each tube into the wells of a plate.
5. I read the absorbance at 595 nm.
6. I plotted the standard curve and used it to calculate the protein concentration of the unknown.

{% include figure.html dir="bradford-assay" n=1 alt="Photo from my Bradford assay" %}

{% include figure.html dir="bradford-assay" n=2 alt="Second photo from my Bradford assay" %}
