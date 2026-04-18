## Key discovery

Static single-frame analysis does not work. Dynamic multi-frame analysis does.

Gemma 4 correctly identified elephant panic behavior during a real earthquake 
by tracking behavioral change across frames:

| Frame | Behavior | Status |
|-------|----------|--------|
| 1–2 | Group dispersed, calm movement | 🟢 NORMAL |
| 3–4 | Animals moving closer together | 🟡 SUSPICIOUS |
| 5–6 | Tight protective circle formed | 🔴 ANOMALY |

---

## Test results

| Video | Animal | Source | TRON result | Correct? |
|-------|--------|--------|-------------|----------|
| Nepal earthquake 2015 | Elephants | Rutube | 🔴 ANOMALY | ✅ |
| Synchronized panic | Cats | YouTube | 🔴 ANOMALY | ✅ |
| Calm daily behavior | Cats | Rutube | 🟢 NORMAL | ✅ |

**3 out of 3 correct predictions on test set (100%)**  
*Small sample — expansion in progress*

---

## Scientific basis

Research shows animals react to seismic precursors minutes to weeks before 
a quake, depending on species and distance from the epicenter:

- **Cats and dogs** — react 10 minutes to 4 hours before, within 100 km
- **Horses and cows** — react 1–30 minutes before, near epicenter
- **Fish** — react days to weeks before, up to 250+ km away

![TRON System](https://raw.githubusercontent.com/avatarabo-dev/tron-search/main/images/animal_table_en.png)

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
- 📄 Technical write-up: `TRON_writeup.md` in this repository

---

## Author

**Boris Yarovoy** — founder, AI integration  
avatarabo@gmail.com  
Russia, 2026---

## Key discovery

Static single-frame analysis does not work. Dynamic multi-frame analysis does.

Gemma 4 correctly identified elephant panic behavior during a real earthquake 
by tracking behavioral change across frames:

| Frame | Behavior | Status |
|-------|----------|--------|
| 1–2 | Group dispersed, calm movement | 🟢 NORMAL |
| 3–4 | Animals moving closer together | 🟡 SUSPICIOUS |
| 5–6 | Tight protective circle formed | 🔴 ANOMALY |

---

## Test results

| Video | Animal | Source | TRON result | Correct? |
|-------|--------|--------|-------------|----------|
| Nepal earthquake 2015 | Elephants | Rutube | 🔴 ANOMALY | ✅ |
| Synchronized panic | Cats | YouTube | 🔴 ANOMALY | ✅ |
| Calm daily behavior | Cats | Rutube | 🟢 NORMAL | ✅ |

**3 out of 3 correct predictions on test set (100%)**  
*Small sample — expansion in progress*

---

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
- 📄 Technical write-up: `TRON_writeup.md` in this repository

---

## Author

**Boris Yarovoy** — founder, AI integration  
avatarabo@gmail.com  
Russia, 2026
