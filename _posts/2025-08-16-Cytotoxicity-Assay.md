---
layout: post
title: "Cell Culture Techniques: Cytotoxicity Assay [7/8]"
date: 2025-08-16
categories: [biology]
tags: [cell-culture, STEM, biology, experiments, internship]
---

**Purpose:** To set up a cytotoxicity assay in a 96-well plate to find how much of a drug is needed to kill cells.

**Principle:**
A cytotoxicity assay tests how many cells die after treatment with a drug. The cells are given the same starting number, and the drug is given at different concentrations made by serial dilution. The key value is the IC50, the concentration of drug that reduces cell viability by 50%. The IC50 shows how potent a drug is, which is one of the first things checked when deciding whether it is worth developing further.

The plate includes two controls:
- **Media control:** cells in medium only, with no drug.
- **Vehicle control:** cells with the solvent the drug is dissolved in, but no drug. This shows whether the solvent alone affects the cells. <!-- added: meaning of the vehicle control -->

After treatment, the number of living cells is measured with an MTT assay, and viability is calculated as:

% viability = absorbance of sample / absorbance of control x 100

The cells are plated the day before treatment so they can settle and attach. About 3000 to 4000 cells per well is a good number, so the wells do not get overcrowded during the experiment. The outer wells are filled with saline instead of cells, because they evaporate faster than the inner wells. <!-- added: why outer wells are filled with saline -->

**Protocol:**
*Plating*
1. I suspended 0.2 x 10^6 cells in 7 mL of medium in a 15 mL tube.
2. I added 100 µL of cell suspension to each well, inverting and mixing the tube after each row so the cells did not settle.
3. I added 100 µL of saline to the outer wells.
4. I incubated the plate for 24 hours so the cells could stabilize.

*Treatment*

5. I made a 2-fold serial dilution of the drug, starting from the highest concentration of 5%, to get 8 concentrations.
6. I removed the old medium from the wells.
7. I added 100 µL of each drug concentration to its wells, plus the media and vehicle controls, in triplicate.
8. I incubated one plate for 24 hours and another for 48 hours.
9. I ran an MTT assay on each plate to measure cell viability.
