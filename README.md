# Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring a fixed sidebar profile layout and dynamic content sections.

## Features

- **Fixed Profile Sidebar**: Persistent right-side profile panel with contact information, skills, and social links
- **Responsive Design**: Fully responsive layout that adapts to mobile, tablet, and desktop screens
- **Multiple Sections**:
  - Projects showcase with live demos and GitHub links
  - Professional experience timeline
  - Certifications gallery
  - Downloadable resume
- **Modern UI**: Clean design with smooth animations and hover effects
- **Optimized Performance**: Built with Vite for fast loading and development

## Tech Stack

- **Frontend Framework**: React
- **Build Tool**: Vite
- **Styling**: CSS with CSS Variables for theming
- **Icons & Images**: Custom assets and external CDN resources

## Project Structure

```
portfolio-website/
├── components/
│   ├── Certifications/
│   │   ├── Certifications.jsx
│   │   ├── Certifications.css
│   │   ├── CertificationsCard.jsx
│   │   └── CertificationsCard.css
│   ├── Experience/
│   │   ├── Experience.jsx
│   │   ├── Experience.css
│   │   ├── ExperienceCard.jsx
│   │   └── ExperienceCard.css
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── Profile/
│   │   ├── Profile.jsx
│   │   └── Profile.css
│   └── Projects/
│       ├── Projects.jsx
│       ├── Projects.css
│       ├── ProjectCard.jsx
│       └── ProjectCard.css
├── data/
│   ├── certificationsData.js
│   ├── experienceData.js
│   ├── profileData.js
│   └── projectsData.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/CyrilWibowo/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Styling

The website uses CSS variables for easy theming. Edit the root variables in your main CSS file:

```css
:root {
  --accent-primary: #your-color;
  --bg-primary: #your-color;
  --text-primary: #your-color;
  /* ... other variables */
}
```

## Responsive Breakpoints

- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: > 768px


## Contributing

This is a personal portfolio project, but feel free to fork it and customize it for your own use!

## Contact

For any questions or feedback, please reach out through the contact information provided in the portfolio.

---

**Made with React & Vite**