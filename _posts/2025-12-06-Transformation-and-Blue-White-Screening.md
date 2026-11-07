---
layout: post
title: "Genetic Engineering Experiments: Transformation and Blue-White Screening [3/4]"
date: 2025-12-06
categories: [biology]
tags: [genetic-engineering, STEM, biology, experiments, internship]
---

**Purpose:** To insert a plasmid into bacteria and use blue-white screening to identify the bacteria carrying a recombinant plasmid.

**Principle:**
<!-- principle and protocol from Lab Report doc -->
*The lac operon*

An operon is a group of genes controlled together, made up of a promoter followed by the genes. The lac operon contains three genes:
- **lacZ** codes for β-galactosidase, which breaks lactose down into glucose and galactose. <!-- corrected: the doc says lacZ breaks down galactose -->
- **lacY** codes for lactose permease, which lets lactose into the cell.
- **lacA** codes for transacetylase, which moves an acetyl group from acetyl-CoA to β-galactosides.

A separate gene, **lacI**, makes a repressor protein that binds to the operator and blocks RNA polymerase. <!-- corrected: the doc calls it LacL --> When allolactose binds the repressor, it lets go, and the genes are expressed.

*Blue-white screening*

The plasmid carries an ampicillin resistance gene and part of the lacZ gene, with the cloning site inside lacZ. <!-- added -->
- **Ampicillin** kills bacteria that did not take up a plasmid.
- **IPTG** acts like lactose and switches on the lac genes.
- **X-gal** is cut by working β-galactosidase into a blue product.

If a gene has been inserted into lacZ, β-galactosidase is not made, so X-gal is not broken down and the colony stays white. If the plasmid has no insert, lacZ works and the colony turns blue. So white colonies carry the recombinant plasmid. <!-- added: why white means recombinant -->

*Making bacteria take up DNA*

Bacteria do not normally take up plasmids well. Cold calcium chloride makes them "competent": the Ca2+ ions shield the negative charges on the DNA and the membrane so the DNA can get close to the cell. A quick heat shock at 42°C then helps the DNA enter. <!-- added: how CaCl2 and heat shock work -->

**Materials:**
- Bacterial culture
- Cold CaCl2 solution
- Plasmid DNA
- LB broth
- LB agar plates with and without ampicillin, X-gal and IPTG
- Sterile 50 mL tubes and prechilled vials

**Protocol:**
1. I grew the bacterial culture until the OD at 600 nm reached 0.23 to 0.26.
2. I chilled the culture flask on ice for 10 to 20 minutes.
3. I transferred the culture aseptically into sterile 50 mL tubes.
4. I centrifuged them at 6000 rpm for 8 minutes at 4°C.
5. I discarded the supernatant and added 15 mL of cold CaCl2.
6. I resuspended the pellet.
7. I placed the tubes on ice for 30 minutes.
8. I centrifuged them at 8000 rpm for 8 minutes at 4°C.
9. I discarded the supernatant and gently resuspended the cells in 600 µL of cold CaCl2.
10. I aseptically divided 100 µL of the competent cells into each of 6 prechilled vials.
11. I added 100 ng of plasmid DNA to 100 µL of competent cells. <!-- the doc leaves the volume blank -->
12. I tapped the vials gently and incubated them on ice for 20 minutes.
13. I heat shocked the cells in a 42°C water bath for 2 minutes, then returned the vials to ice.
14. I added 0.9 mL of LB broth to each vial aseptically and incubated them at 37°C for 2 hours to let the bacteria recover.
15. I plated the cells on these plates: <!-- added: the doc lists the plates but not the plating step -->
    - LB agar: control
    - LB agar + ampicillin: transformed
    - LB agar + ampicillin: untransformed
    - LB agar + ampicillin + X-gal + IPTG: transformed
    - LB agar + ampicillin + X-gal + IPTG: untransformed
