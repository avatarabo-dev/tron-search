# TRON: An Earthquake Early Warning System Using Animal Behavior

**Author:** Boris Yarovoy  
**Project:** TRON (Earthquake Early Warning System)  
**Track:** Global Resilience  
**Hackathon:** Gemma 4 Good Hackathon (Kaggle)  

---

## Problem

Earthquakes kill thousands of people every year. In the 20th century, annual fatalities averaged 15,000–20,000. In the 21st century, despite advances in seismic construction, the average has risen to 25,000–30,000. According to Our World in Data (Oxford University), mortality per 100,000 population increased from 0.01 in 1900 to 0.08 in 2025 — an eightfold rise.

According to UNDRR, earthquakes account for more than 25% of all global economic losses from natural disasters — $18–27 billion in direct damage annually, not including indirect losses.

Current early warning systems trigger after the shaking has already begun, providing only 10–60 seconds of reaction time. No short-term forecasting system (hours, days, or weeks ahead) currently exists.

---

## Hypothesis

**My hypothesis:** Multimodal neural networks such as Gemma 4 can identify changes in animal behavior days or weeks before an earthquake by analyzing video footage.

---

## Key Discovery

During development, I found that **static single-frame analysis does not work — dynamic multi-frame analysis does**.

Analyzing a single frame, the model cannot reliably detect behavioral anomalies. Panic can look like normal activity; calmness can look like freezing — and vice versa. Only by tracking **behavioral change over time** can a relevant result be obtained.

Example from real footage of elephants during an earthquake:

| Frames | Behavior | Status |
|--------|----------|--------|
| 1–2 | Group dispersed, calm movement | 🟢 NORMAL |
| 3–4 | Animals moving closer together | 🟡 SUSPICIOUS |
| 5–6 | Tight protective circle formed | 🔴 ANOMALY |

Only by seeing the sequence can you distinguish alarm from normal activity.

---

## How the Prototype Works

### What was built

I took short videos from YouTube and Rutube (elephants during an earthquake, a normal cat, a bear during an earthquake) and built a pipeline:

> Video → ffmpeg (frames) → OpenCV → Gemma 4 → JSON verdict

The prototype runs entirely in the cloud (Kaggle Notebook). It requires no labeled data — Gemma 4 operates zero-shot, out of the box.

### Test results

| Animal | Source | Result | Confidence |
|--------|--------|--------|------------|
| 🐘 Elephants (earthquake) | Rutube | 🔴 ANOMALY | high |
| 🐱 Cat (normal) | Rutube | 🟢 NORMAL | 1.0 |
| 🐻 Bear (earthquake) | YouTube | 🔴 ANOMALY | 1.0 |

**Result:** 3 out of 3 correct detections (100%). The prototype correctly identified anomaly in the bear's behavior even with severe camera shaking during the earthquake.

### Limitations of the prototype

- No real-time streaming — only pre-recorded videos
- No analytical system correlating behavioral anomalies with seismic data

---

## Why Gemma 4

I learned about the Gemma 4 Good Hackathon on April 1st — one day before Telegram was blocked in Russia. I asked my assistants (ChatGPT, Claude, DeepSeek, Gemini) whether we should participate with the TRON project. All of them, independently, recommended joining. Their reasoning: Gemma 4 is a multimodal language model capable of zero-shot operation (no training required). It works with any animal — including aquarium fish, reptiles, and amphibians, which are believed to be among the most seismically sensitive.

No labeled datasets of pre-earthquake animal behavior exist. Gemma 4 bypasses this critical limitation and allows immediate hypothesis testing. This is the ideal tool for TRON.

**This shift is critical** in domains where signals are rare, noisy, and historically undocumented. TRON is not selling a model — it is selling a way around the industry's core blocker: the absence of data.

---

## Scientific Basis

The connection between animal behavior and seismic events is documented across centuries:

- **373 BC, Greece** — Rats, weasels, snakes, and centipedes reportedly fled their homes days before a destructive earthquake. This is the earliest documented observation on record (USGS).

- **1975, Haicheng, China** — Mass anomalous behavior was observed before a magnitude 7.3 earthquake: snakes emerged from hibernation into freezing temperatures, dogs barked continuously, cats refused to stay indoors, fish jumped from ponds. Local authorities ordered evacuation on the morning of February 4th. The earthquake struck at 19:36, destroying nearly 90% of buildings. This remains the only successful evacuation before a major earthquake in recorded history.

- **Project "Mercury-18" (USSR KGB)** — In seismically active regions of the USSR — Kamchatka, the Caucasus, and Central Asia — bioseismological proving grounds were established as part of this classified program. Observations of various animal species were conducted and correlated with subsequent seismic events.
The table below is compiled from archival research materials (1970s–1980s). It reflects observed reaction times of different animal species depending on their distance from the epicenter. The data are illustrative in nature and have not undergone independent validation.

![Animal reaction times before earthquakes](https://raw.githubusercontent.com/avatarabo-dev/tron-search/main/images/animal_table_en.png)
*Source: Mercury-18 project archives (USSR, 1970s–1980s)* 

- **2005, Israel** — Alexander Yagodin was granted a patent for a method of earthquake prediction based on animal behavior (Patent No. 169757).

- **2009, L'Aquila, Italy** — Biologist Rachel Grant (Open University, UK) was conducting daily observations of a common toad colony at Lake San Ruffino. On April 1st, 96% of males abandoned the breeding site. By April 3rd, the count dropped to zero. On April 6th, a magnitude 6.3 earthquake destroyed the city of L'Aquila. The toads began returning the next day. The lake was 74 km from the epicenter. (Grant & Halliday, 2011, *Journal of Zoology*)

- **Fenceroy & Sethi (2024)** — A review demonstrating the value of anomalous animal behavior as a precursor to natural disasters, also mentioning the use of AI for early warning systems (*Geological Society of America Abstracts*).

- **Woith et al. (2018)** — Analyzed 729 reports of unusual animal behavior and concluded that 715 were single observations, insufficient to distinguish anomaly from coincidence (*Bulletin of the Seismological Society of America*).

---

## Response to Critics

**"Earthquake prediction is impossible" (USGS)**

The USGS statement refers to the impossibility of precise prediction based on physical measurements alone. TRON proposes a different data source: the biosphere as a global sensor network. The fact that seismographs cannot predict earthquakes does not preclude other methods. Gemma 4 makes it technically feasible to convert distributed biological signals into measurable data.

**"Animal observations are random and unreliable" (Woith et al., 2018)**

Woith et al. are correct — for isolated observations. A single elephant may panic due to a low-flying aircraft. A cat may run due to spilled catnip. A crab may emerge due to an oil spill.

But monitoring thousands of distributed cameras across different species removes the local noise problem. If multiple species simultaneously change behavior across a 300 km radius, this cannot be explained by one aircraft or one bottle of catnip. A storm or a predator produces only local, short-lived behavioral changes. For a distributed system of thousands of cameras to generate a false positive, you would need a Godzilla-scale event that frightens animals across hundreds of kilometers simultaneously. For practical purposes, the Godzilla problem is not a concern.

**"Even with a forecast, evacuation would cause panic" (Stiros, 1997)**

TRON does not propose instant mass evacuation. It proposes an early signal that enables: switching infrastructure to readiness mode, restricting high-risk activities, and enabling managed decision-making in advance. This is a tool for gradual risk reduction, not a panic trigger. The argument that prediction is useless because response infrastructure does not yet exist is backwards — the infrastructure should evolve alongside the forecasting technology.

---

## What TRON Is Really About

The hackathon prototype analyzes short video clips on demand. It proves that Gemma 4 can classify animal behavior. But the real system works differently.

A 1-minute video can only detect a quake that is already happening. That is observation, not prediction.

True prediction requires continuous monitoring and statistical accumulation:

1. Connect to live streams from cameras in zoos, aquariums, farms, serpentariums, and private animal owners in seismically active regions
2. Analyze behavioral baselines continuously — 24/7
3. Track micro-anomalies across a large territory: if chickens across a 300 km radius begin subtly changing behavior, record it
4. Correlate these anomalies with small earthquakes (magnitude 2–5), which occur far more frequently than catastrophic ones
5. Repeat across thousands of events to build a predictive statistical model

> One camera sees nothing. A thousand cameras see the future.

---

## Limitations

- Very small test sample (3 videos) — proof of concept only
- No real-time streaming — only pre-recorded video
- No analytical layer connecting behavioral anomalies to seismic data
- Threshold sensitivity per species and region unknown — requires long-term data collection

---

## Conclusion

This prototype proves one thing: **Gemma 4 can correctly classify animal behavior as normal or anomalous, operating zero-shot, out of the box, on any species.**

Three correct detections out of three is not a statistically significant scientific result. But it is sufficient proof for the next step.

**The next step** is a real working system: connected to live cameras, analyzing continuous streams, accumulating correlational statistics with seismic sensor data.

With support from interested organizations, I am ready to build it.

---

**Repository:** https://github.com/avatarabo-dev/tron-search  
**Author:** Boris Yarovoy — avatarabo@gmail.com  
**Russia, 2026**
