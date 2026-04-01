# EcoDispose — E-Waste Collection Locator

A web platform that helps citizens find authorized e-waste recycling centers,
learn safe disposal practices, and understand the environmental impact of
responsible recycling.

---

## Project Structure

```
ecodispose/
├── index.html          ← Main HTML file — all page sections and content
├── css/
│   └── style.css       ← All styles — layout, colors, components, responsive
├── js/
│   ├── data.js         ← All static data (centers, impact values, wipe guides)
│   └── app.js          ← All JavaScript logic (search, modal, calculator, forms)
├── images/             ← Folder for any images added in the future
└── README.md           ← This file
```

---

## How to Run

**Option 1 — Direct open (simplest)**
Double-click `index.html` — opens directly in your browser.

**Option 2 — VS Code + Live Server**
1. Open the `ecodispose` folder in VS Code
2. Install the "Live Server" extension
3. Right-click `index.html` → Open with Live Server

**Option 3 — Python local server**
```bash
cd ecodispose
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

---

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and content |
| CSS3 | All styling, layout, animations, responsive design |
| JavaScript (Vanilla ES6) | All interactivity — search, modal, calculator, forms |
| Google Fonts | Plus Jakarta Sans typography |
| Google Maps URL API | Navigation links (no paid API key required) |

No frameworks, no libraries, no backend. Single-folder project.

---

## Features

- **Find Centers** — City + category dropdown search across 27 recyclers in 15 cities
- **Center Detail Modal** — Click any card to see full details and open Google Maps
- **Impact Calculator** — Enter device quantities to see CO2, metals, water saved
- **Data Wipe Guide** — Step-by-step secure erasure for Android, iPhone, Windows, Mac, HDD
- **Awareness** — 10 expandable accordion topics with full detailed content
- **Report Illegal Dumping** — Location + waste type dropdown form
- **Pickup Request** — Simulated collection request form
- **Data Sources** — Full transparency table of all data origins
- **Terms & Conditions** — 10-clause legal disclaimer

---

## Cities Covered

**East Godavari / Coastal AP (Primary Focus)**
Kakinada, Rajahmundry, Draksharama, Yanam, Amalapuram, Pithapuram, Samalkot

**Other Major Cities**
Hyderabad, Bangalore, Chennai, Mumbai, Delhi, Pune, Kolkata, Ahmedabad

---

## Data Sources

| Source | Type |
|---|---|
| CPCB — Central Pollution Control Board | Government (cpcb.nic.in) |
| AP State Pollution Control Board | Government (appcb.ap.gov.in) |
| Google Maps Business Listings | Public |
| Recycler Company Websites | Public |
| Demo / Sample Data | Simulated |

---

## Disclaimer

This is an academic project created for educational purposes.
Contact details shown are sample/demo data.
Always verify recycler details before visiting.
No personal data entered is stored or transmitted.

---

## Academic Project Info

- **Type:** College Frontend Web Development Project
- **Year:** 2025
- **Subject:** Environmental Awareness / Web Technology
