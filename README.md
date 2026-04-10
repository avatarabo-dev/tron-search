# 🌍 TRON — Early Earthquake Warning System via Animal Behavior Analysis

## What is TRON?
TRON is an early warning system for earthquakes that analyzes animal behavior 
using Gemma 4 multimodal AI. Animals sense seismic precursors hours before 
humans can detect them. TRON monitors this behavior automatically.

## How it works
1. **Video input** — live camera feeds or video files with animals
2. **Frame extraction** — OpenCV extracts frames every 5 seconds
3. **Dynamic analysis** — Gemma 4 analyzes behavioral changes across frames
4. **Alert output** — NORMAL / SUSPICIOUS / ANOMALY with confidence score

## Key Discovery
Static frame analysis fails to detect anomalies.
Dynamic multi-frame analysis works — Gemma 4 correctly identified elephant 
panic behavior during a real earthquake:
- Frame 1-2: dispersed group (normal)
- Frame 3-4: animals moving closer (suspicious)  
- Frame 5-6: tight protective circle (ANOMALY)

## Tech Stack
- **Gemma 4** (gemma-4-31b-it) — multimodal behavioral analysis
- **Google Colab** — processing pipeline
- **ffmpeg + OpenCV** — video processing
- **Rutube API** — video source

## Pipeline
