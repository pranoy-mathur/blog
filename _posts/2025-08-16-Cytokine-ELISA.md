---
layout: post
title: "Cell Culture Techniques: Cytokine ELISA [6/8]"
date: 2025-08-16
categories: [biology]
tags: [cell-culture, STEM, biology, experiments, internship]
---

**Purpose:** To measure cytokines released by cultured cells using sandwich ELISA.

**Principle:**
Cytokines are small proteins that cells release to signal to each other. Two that I measured were:
- **GM-CSF** (granulocyte-macrophage colony stimulating factor)
- **PDGF-AA** (platelet-derived growth factor AA)

Cytokines are measured with a sandwich ELISA:
1. A capture antibody is coated onto the wells.
2. The wells are washed, and an assay diluent is added as a blocking step. It covers any empty space on the plastic not taken up by the capture antibody, so other molecules cannot stick there and give a false signal (non-specific binding).
3. The sample is added, and the cytokine binds to the capture antibody.
4. After washing, a detection antibody binds to a different part of the cytokine, so the cytokine is sandwiched between the two antibodies. The detection antibody is linked to an enzyme. In these kits it carries biotin, which binds streptavidin linked to horseradish peroxidase (SAv-HRP). <!-- added: biotin-streptavidin link -->
5. A substrate is added, and the enzyme turns it into a colored product. A stop solution ends the reaction, and the absorbance is read at 450 nm.

Unlike the malaria ELISA, which only shows whether an antigen is present, a cytokine ELISA measures how much is present. So a standard curve of known cytokine concentrations is needed to convert absorbance into concentration.

**Protocol:**
*GM-CSF kit*
1. I diluted the capture antibody 1:250 in diluent (8 µL of antibody in 2000 µL of diluent) and added 100 µL to each well. I incubated the plate overnight at 4°C.
2. I aspirated and washed the wells 3 times.
3. I blocked the plate with 200 µL of assay diluent per well and incubated it for 1 hour at room temperature.
4. I aspirated and washed 3 times.
5. I added 100 µL of standard or sample to each well and incubated for 2 hours at room temperature.
6. I aspirated and washed 5 times.
7. I added 100 µL of working detector (detection antibody with SAv-HRP, diluted 1:250) to each well and incubated for 1 hour at room temperature.
8. I aspirated and washed 7 times, with a 30 second to 1 minute soak each time.
9. I added 100 µL of substrate solution to each well and incubated for 30 minutes at room temperature in the dark.
10. I added 50 µL of stop solution to each well and read the plate at 450 nm within 30 minutes, with a wavelength correction at 570 nm.

*PDGF-AA kit*

1. After bringing the kit to room temperature, I added 100 µL of diluted standard or sample to each well and incubated at 37°C for 80 minutes.
2. I discarded the liquid, washed each well 3 times with 200 µL of 1x wash buffer, patted the plate dry on clean absorbent paper, added 100 µL of 1x biotinylated antibody working solution and incubated at 37°C for 50 minutes.
3. I washed 3 times the same way, added 100 µL of 1x streptavidin-HRP working solution and incubated at 37°C for 50 minutes.
4. I washed 5 times, patted dry, added 90 µL of TMB substrate and incubated at 37°C for 20 minutes in the dark.
5. I added 50 µL of stop solution, mixed on a plate shaker for 1 minute and read the absorbance at 450 nm immediately.
