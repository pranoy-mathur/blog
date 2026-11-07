---
title: AcrB efflux pump virtual screening
order: 1
# Fact check: PUBLISHED in NHSJS, a peer-reviewed journal, November 3, 2026.
# All figures below are from the published version (template 4DX5, top hit
# Glabroisoflavanone B). Nothing from the older 3d9b / Ovigerine version.
statement: "A computational screen of Indian medicinal plant compounds against AcrB, the pump Salmonella uses to push antibiotics out of the cell."
role: "Sole author"
dates: "2026"
status: "Published in a peer-reviewed journal, the National High School Journal of Science (NHSJS), November 2026. CREST Gold Award."
links:
  - { label: "Read the paper (NHSJS)", url: "https://nhsjs.com/2026/computational-screening-of-indian-phytochemicals-as-candidate-efflux-pump-inhibitors-of-salmonella-acrb/" }
  - { label: "Data and code (Zenodo)", url: "https://doi.org/10.5281/zenodo.23356930" }
# Card on the homepage: photo, short label on it, and how to fit it.
thumb: /assets/images/projects/acrb-virtual-screening/1.jpg
thumb_alt: "The top hit docked in the AcrB binding pocket"
thumb_caption: "Published in a peer-reviewed journal"
thumb_fit: contain
---

## Summary

Efflux pumps are one of the main ways bacteria resist antibiotics. AcrB is the inner-membrane pump in *Salmonella* Typhimurium that recognizes and expels a wide range of drugs. Blocking it could keep existing antibiotics working instead of needing new ones, but the two best-known inhibitors, PAβN and NMP, have never reached clinical trials.

I screened drug-like phytochemicals from Indian medicinal plants (the IMPPAT 2.0 database) against AcrB's drug-binding pocket, benchmarked every compound against PAβN and NMP, and used machine learning and molecular dynamics to check what the docking scores were picking up.

{% include figure.html root="projects" dir="acrb-virtual-screening" n=1 alt="Docked pose of Glabroisoflavanone B in the AcrB distal binding pocket, surrounded by contacting residues including F178, F610, V612, F615, F617 and F628" caption="Top hit Glabroisoflavanone B (yellow) docked in the AcrB distal binding pocket, with the residues it contacts (blue)." %}

## Methods

1. Built a homology model of *S.* Typhimurium AcrB in SWISS-MODEL on the E. coli T-state structure 4DX5 (94.96% sequence identity), because the available experimental *Salmonella* structure (4.60 Å) is too low-resolution for pocket-level docking.
2. Filtered the 17,967 phytochemicals in IMPPAT 2.0 down to 865 drug-like compounds using Lipinski, Veber, Egan, Ghose and QED criteria.
3. Validated the docking protocol by redocking a crystallographic ligand (minocycline) to 1.05 Å RMSD, then tested its limits with decoy enrichment (DUD-E), seed robustness and conformer-ensemble docking.
4. Docked the full library and both benchmarks with AutoDock Vina, and flagged primary hits at z ≤ −2.
5. Trained a random forest classifier on 15 RDKit descriptors to separate strong and weak docking-score classes, using scaffold-split cross-validation and an external test set.
6. Profiled the primary hits for drug-likeness and structural alerts with SwissADME, and mapped pocket contacts within 4 Å for the top five.
7. Ran a 100 ns molecular dynamics simulation of the top hit in OpenMM, with ProLIF interaction analysis and MM-GBSA.

## Technical challenges

- **No usable *Salmonella* structure.** The homology model's backbone scored well (GMQE 0.85, 97.77% Ramachandran-favored), but its side-chain rotamers were weak. That is why the redocking check mattered before trusting any score.
- **Knowing what the scores can't tell you.** The decoy test showed Vina separates known actives from decoys poorly (ROC-AUC 0.567). The scores are a way to rank candidates, not proof that a compound binds.
- **Correlated descriptors.** Several molecular descriptors move together, so the classifier's importance values are best read as groups (ring architecture, lipophilicity) rather than single features.

## Results and limitations

{% include figure.html root="projects" dir="acrb-virtual-screening" n=2 alt="Histogram of Vina docking scores for 863 compounds, with dashed lines for the NMP and PAβN benchmarks and a shaded region beyond the z of minus 2 cutoff" caption="Docking scores for all 863 compounds. 254 scored better than PAβN; 17 passed the z ≤ −2 cutoff." %}

- 863 of the 865 compounds docked successfully, and 254 scored better than PAβN.
- The top hit was Glabroisoflavanone B (IMPHY001793) at −11.040 kcal/mol.
- The classifier separated the strong and weak classes with a scaffold-split AUC of 0.944 and an external test AUC of 0.949, driven mainly by ring count and lipophilicity.
- All five top hits contacted F178, F610, V612 and F628, the phenylalanine cluster that PAβN also engages. 13 of the 17 primary hits had no structural alerts.
- Over 100 ns the top hit stayed in the pocket. The protein drifted, but the pocket itself moved only 1.2 to 2.8 Å.

{% include figure.html root="projects" dir="acrb-virtual-screening" n=3 alt="Two line plots over 100 nanoseconds: protein C-alpha RMSD rising to about 4 to 4.5 angstroms, and ligand-to-residue distances staying between about 3 and 5.5 angstroms" caption="100 ns molecular dynamics of the top hit: (a) protein Cα RMSD, (b) distance from the ligand to the pocket residues." %}

**Limitations.** The study is purely computational, so no compound's inhibitory activity is confirmed. Vina scores carry about 2 to 3 kcal/mol of uncertainty, the receptor is a homology model, and the simulation ran in water without a lipid bilayer and for only one compound. The output is a prioritized list of candidates that justifies wet-lab testing, such as efflux or MIC-potentiation assays.

## Technologies used

SWISS-MODEL, PyMOL, Open Babel, Meeko, AutoDock Vina, RDKit, scikit-learn, SwissADME, OpenMM, ProLIF, MM-GBSA, Python
