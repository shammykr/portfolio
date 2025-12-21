# 🚀 Modern Developer Portfolio & Dashboard

A high-performance, responsive portfolio dashboard designed for the 2025 web. This project showcases my engineering journey from delivering **90+ user stories at Bank of America** to pursuing my **MS in Computer Engineering at Stony Brook University**. It serves as a live demonstration of my skills in **Frontend Engineering**, **DevOps Automation**, and **System Design**.

## 🛠️ Key Technical Features

* **Automated Data Pipeline**: Built a **GitHub Action** that pulls live **LeetCode statistics** (332 solved problems) every 6 hours and updates the dashboard dynamically via a cached JSON asset.
* **3D Neural Visualization**: Implemented a WebGL-powered **Vanta.js** background that simulates a neural network, reacting to real-time mouse movement.
* **iOS-Style Glassmorphism**: Engineered a premium UI using **backdrop-filters**, high-saturation blurs (`180%`), and semi-transparent layers for an operating-system-level aesthetic.
* **Dynamic Theme Engine**: Developed a real-time dark/light mode toggle that synchronizes CSS variables and re-initializes WebGL assets for optimal contrast and readability.
* **Mobile-First Responsive Design**: Optimized the **Bento Grid** layout to maintain a 100% performance score across mobile, tablet, and desktop viewports.

## 🏗️ Tech Stack

* **Frontend**: HTML5, CSS3 (Advanced Flexbox/Grid), JavaScript (ES6+).
* **Graphics**: Three.js & Vanta.js (WebGL).
* **Automation**: GitHub Actions (CI/CD), GitHub Pages for deployment.
* **Design**: iOS Glassmorphism, Bento UI Architecture.

## 📈 Live Metrics (Automated)

| Metric | Status |
| :--- | :--- |
| **Total Problems Solved** | 332 |
| **Acceptance Rate** | 67.18% |
| **Update Frequency** | Every 6 Hours (via GitHub Actions) |
| **Performance Improvement** | 40% reduction in page load times (Legacy vs. Modern) |

## 📁 Repository Structure

```bash
.
├── .github/workflows/      # Automated CI/CD Pipelines
│   └── update-leetcode.yml # Fetches live LeetCode data
├── assets/                 # Cached JSON data, Images, and PDF Resume
│   ├── leetcode.json       # Live data from GitHub Action
│   └── resume.pdf          # Professional Resume
├── index.html              # Core Structural Layer
├── style.css               # Theme Engine & iOS Glass Styles
└── script.js               # UI Interactivity & API Fetch Logic
````
## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone [https://github.com/shammykr/portfolio.git](https://github.com/shammykr/portfolio.git)
    ```
2.  **Run Locally**:
    Simply open `index.html` in any modern browser. No build steps are required as the automation is handled server-side.

---

## 👨‍💻 About Me
Currently an **MS Computer Engineering candidate at Stony Brook University**. Previously at **Bank of America**, I specialized in **Java Microservices** and **automated failover systems**, clearing a **$7M+ backlog** and delivering **90+ user stories**.

**[Email](mailto:shammykumarsbu27@gmail.com) | [LinkedIn](https://linkedin.com/in/shammy1998) | [GitHub](https://github.com/shammykr)**
