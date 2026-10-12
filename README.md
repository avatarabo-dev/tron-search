# TRON: earthquake forecasting from animal behavior using video AI

> TRON (Technology Real-time Online Nucleus) is a technology idea for short-term earthquake forecasting based on animal behavior, developed since 2011 by Boris D. Yarovoy. This repository contains the Gemma 4 automation experiment: a pipeline that analyzes animal-behavior video with no human in the chain.

**Project site:** https://www.tron.ru/
**Funding proposal (about EUR 200,000 for a 6-month validation):** https://www.tron.ru/2026/09/invest-ai-project-global.html
**Contact:** avatarabo@gmail.com

## Status (October 2026)

- The hypothesis that animal behavior carries information about an upcoming earthquake has **not been statistically validated**. Forecast accuracy has not been measured.
- What exists: a working video-analysis pipeline (video, frames, Gemma 4, verdict) tested on three clips. It shows the chain can run without humans, not that it forecasts earthquakes.
- What does not exist: a system where volunteers submit animal observations, and a live monitoring network.
- Next step: a pilot validation in a seismically active zone, with forecasts published before events and checked against an earthquake catalog.

---

## Key discovery

The idea of using animal behavior for earthquake prediction is not new.
What was missing was the tool to automate it.

Before Gemma 4 — the system required humans to watch and interpret footage.
After Gemma 4 — the system works autonomously.

Gemma 4 was the first model capable of analyzing video sequences — not just
single frames. This is what makes TRON possible now, and not ten years ago.

Gemma 4 correctly identified elephant panic behavior during a real earthquake
by tracking behavioral change across frames:

| Frame | Behavior | Status |
|-------|----------|--------|
| 1–2 | Group dispersed, calm movement | 🟢 NORMAL |
| 3–4 | Animals moving closer together | 🟡 SUSPICIOUS |
| 5–6 | Tight protective circle formed | 🔴 ANOMALY |

---

## Test results

| Animal | Source | TRON result | Model-reported confidence | Notes |
|--------|--------|-------------|---------------------------|-------|
| 🐘 Elephants | Rutube | 🔴 ANOMALY | high | Real earthquake archive footage |
| 🐱 Cat | Rutube | 🟢 NORMAL | 1.0 | Calm daily behavior |
| 🐻 Bear | YouTube | 🔴 ANOMALY | 1.0 | Erratic movement + camera shaking |

**3 of 3 test clips were classified as expected.**
This is a demonstration on three clips, not a statistical evaluation: accuracy has not been measured, and the confidence values are reported by the model itself.
Both video platforms confirmed working: Rutube and YouTube.

---

## What TRON is really about

The current prototype detects anomalies in short video clips.
But the real system works differently.

A 1-minute video can only capture a quake that is already happening.
That is not prediction — that is observation.

**True prediction requires continuous monitoring and statistical accumulation:**

- Connect to live webcam feeds near animal habitats
- Continuously analyze behavioral baselines per species and location
- When chickens in a 300 km radius start showing subtle behavioral shifts,
  then a 3–4 magnitude quake occurs, then behavior returns to baseline —
  the system records that pattern
- Repeated across thousands of events, these micro-patterns become
  a predictive signal

One camera sees nothing. A thousand cameras see the future.

This prototype shows that Gemma 4 can classify animal behavior
from video. Whether the behavior predicts earthquakes is the question
the proposed pilot is designed to answer. The next step is scale.

## Scientific basis

Reports suggest animals may react to seismic precursors minutes to weeks before
a quake, depending on species and distance from the epicenter. The time windows
below come from historical observation tables (for example, the Soviet "Mercury-18"
project) and have not been confirmed by controlled studies:

- **Cats and dogs** — react 10 minutes to 4 hours before, within 100 km
- **Horses and cows** — react 1–30 minutes before, near epicenter
- **Fish** — react days to weeks before, up to 250+ km away

Key references:
- USGS: [Animals and Earthquake Prediction](https://www.usgs.gov/programs/earthquake-hazards/animals-earthquake-prediction) — anecdotal evidence documented since 373 BC
- Wikelski et al. (2020) — sensor study of farm animals reporting increased activity before tremors
- Woith et al. (2018), *Bulletin of the Seismological Society of America* — review of 700+ reports

> **Note on Woith et al.:** Their review found that most anecdotal reports
> could not be evaluated statistically. TRON aims to address exactly this problem —
> by automating monitoring across multiple sources simultaneously rather than
> relying on individual reports.

---

## Tech stack

| Component | Technology |
|-----------|------------|
| Behavioral analysis | Gemma 4 (`gemma-4-31b-it`) multimodal |
| Video processing | OpenCV + ffmpeg |
| Video sources | Rutube API, yt-dlp (YouTube) |
| Runtime | Kaggle Notebooks |

---

## How to run

1. Open the [Kaggle Notebook](https://www.kaggle.com/code/borisdyarovoy/tron-early-earthquake-warning)
2. Add your `GEMINI_API_KEY` to Kaggle Secrets
3. Run all cells

No local installation required. Works entirely in the cloud.

---

## Links

- 🌐 [Project site (tron.ru)](https://www.tron.ru/)
- 💶 [Funding proposal: EUR 200,000 for validation](https://www.tron.ru/2026/09/invest-ai-project-global.html)
- 🚀 [Kaggle Notebook — Live Demo](https://www.kaggle.com/code/borisdyarovoy/tron-early-earthquake-warning)
- 🖥️ [Demo (HTML preview)](https://raw.githack.com/avatarabo-dev/tron-search/main/tron.html)
- 📄 **[Technical write-up (full documentation)](TRON_writeup.md)**

---

## Author

**Boris Yarovoy** — founder, AI integration  
avatarabo@gmail.com  
Russia, 2026
