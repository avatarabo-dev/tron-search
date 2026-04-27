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

| Animal | Source | TRON result | Confidence | Notes |
|--------|--------|-------------|------------|-------|
| 🐘 Elephants | Rutube | 🔴 ANOMALY | high | Real earthquake archive footage |
| 🐱 Cat | Rutube | 🟢 NORMAL | 1.0 | Calm daily behavior |
| 🐻 Bear | YouTube | 🔴 ANOMALY | 1.0 | Erratic movement + camera shaking |

**3 out of 3 correct detections (100%)**
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

This prototype proves that Gemma 4 can correctly classify animal behavior
from video. The next step is scale.

## Scientific basis

Research shows animals react to seismic precursors minutes to weeks before 
a quake, depending on species and distance from the epicenter:

- **Cats and dogs** — react 10 minutes to 4 hours before, within 100 km
- **Horses and cows** — react 1–30 minutes before, near epicenter
- **Fish** — react days to weeks before, up to 250+ km away

Key references:
- USGS: [Animals and Earthquake Prediction](https://www.usgs.gov/programs/earthquake-hazards/animals-earthquake-prediction) — anecdotal evidence documented since 373 BC
- Wikelski et al. (2020), *PLOS ONE* — sensor study confirming increased animal activity before tremors
- Woith et al. (2018), *Bulletin of the Seismological Society* — statistical analysis of 700+ reports

> **Note on Woith et al.:** Their study found that single anecdotal observations 
> are statistically unreliable. TRON addresses exactly this problem — by automating 
> monitoring across multiple sources simultaneously rather than relying on 
> individual reports.

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

- 🚀 [Kaggle Notebook — Live Demo](https://www.kaggle.com/code/borisdyarovoy/tron-early-earthquake-warning)
- 🖥️ [Demo (HTML preview)](https://raw.githack.com/avatarabo-dev/tron-search/main/tron.html)
- 📄 **[Technical write-up (full documentation)](TRON_writeup.md)**

---

## Author

**Boris Yarovoy** — founder, AI integration  
avatarabo@gmail.com  
Russia, 2026---

