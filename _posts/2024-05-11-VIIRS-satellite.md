---
layout: post
title: Participating in a Virtual Satellite Science Fair
permalink: /VIIRS-satellite/
categories: [projects, environment]
tags: [satellite, JPSS, wildfires, California, vegetation cover, land surface temperature, drought measurement]
---
As a participant in a captivating US-based virtual science fair, I analyzed satellite data from the Joint Point Satellite System (JPSS) to uncover trends in climatic phenomena.

**Introduction**

After deliberating on our topic choice, my team of three and I settled on creating an index to predict wildfires in California. With these fires annually destroying around 5,000 acres (equivalent to roughly 3,800 football fields) and impacting thousands of lives, predicting them became vital. Crafting an index could fulfill competition criteria and offer a practical solution for minimizing damage to human lives.


**Brief of Index**

The Wildfire Index outlined these general properties:

- The three critical criteria are green vegetation fraction, land surface temperature, and drought index.
- Analyzed each of California's 58 counties to assess wildfire risk.
- Gathered data on July 1st, 8th, 15th, 22nd, and August 1st, 8th, 15th, 22nd, 2023.
- Index values range from 0 to 1, with 1 indicating the highest potential wildfire risk.

Information on these criteria was sourced from [JSTAR Mapper](https://www.star.nesdis.noaa.gov/mapper/), which provides satellite imagery and data from the NOAA-20 satellite, an essential tool for climate monitoring.

These data collection dates align with the US summer season when wildfire risk is at its highest due to rising land temperatures that can ignite dry foliage and other combustible materials.


**Criteria**

- _Land Surface Temperature_: A high land surface temperature facilitates wildfire outbreaks. It dries out moist vegetation, increases the chances of dry matter catching fire on the ground, and promotes rapid fire spread.

- _Green Vegetation Fraction_: Green vegetation can act as fuel for wildfires, so high amounts of greenery, along with high land surface temperature, suggest a greater likelihood of wildfire outbreaks.

- _Drought Index_: This criterion indicates an area's dryness or moisture conditions. Regions with low humidity and high dryness are more prone to wildfire ignition and spread.

Due to certain limitations within the JSTAR Mapper, we couldn't include the Drought Index as a criterion in our formula, so it wasn't part of our final submission.


**Formula**

We collected the values for Land Surface Temperature from 271 to 343 Kelvin (K), while Green Vegetation Fraction data varied between 1 and 100 units. To ensure consistency within our index, we needed to normalize the data. This normalization process involved:
Green Vegetation Fraction divided by 100
(Land Surface Temperature - 291) divided by (343 - 291)

With both criteria now standardized on a scale of 0 to 1, we can calculate the average between them. This allows us to determine the wildfire risk for the selected area.


**Conclusion**

Ultimately, our work suggested that Colusa County, CA, had the highest risk of wildfires, whereas Alpine County had the lowest. In the future, we aim to improve the accuracy of the index by including more criteria, such as the Drought Index, and giving each criterion a weightage based on the extent to which it can influence the chances of wildfires. We will also take satellite data from an increased range of dates, not just in the summer. 


**Bibliography**

Wikipedia, https://gis.data.ca.gov/datasets/8713ced9b78a4abb97dc130a691a8695/explore. Accessed 11 May 2024.

Wikipedia, http://extension.okstate.edu/programs/fire-ecology/fire-effects-research-and-demonstration-sites/. Accessed 11 May 2024.

“JSTAR Mapper.” noaa/nesdis/star, http://www.star.nesdis.noaa.gov/mapper/. Accessed 11 May 2024.

“Relationship of forest fires with a land surface temperature and b rainfall.” ResearchGate, http://www.researchgate.net/figure/Relationship-of-forest-fires-with-a-land-surface-temperature-and-b-rainfall_fig5_362672167#. Accessed 11 May 2024.
