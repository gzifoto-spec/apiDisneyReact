# 🏰 Dataland - Disney Characters Collection

An educational web application built with React and Tailwind CSS that showcases Disney characters through an interactive, magical user experience. Features dynamic transitions, sound effects, and comprehensive character information from the Disney API.

![Dataland Preview](https://img.shields.io/badge/React-18.3-blue) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8) ![Vite](https://img.shields.io/badge/Vite-6.0-646cff)

## ✨ Features

- 🎭 **Interactive Character Cards** - Browse through 410+ Disney characters
- 🎨 **Magical Transitions** - Random visual effects (slide, curtain) with synchronized sound
- 🔊 **Sound Effects** - Immersive audio feedback on page transitions
- 📱 **Responsive Design** - Adaptive layout (6/12/24 characters per page based on device)
- 🖼️ **Smart Placeholder** - Custom castle image when character images fail to load
- 📄 **Detailed Character View** - Full character information with expandable sections
- 🎯 **Auto-scroll** - Smooth scrolling to content on page changes
- 🎲 **Random Start** - Loads a random page on initial visit

## 🚀 Tech Stack

- **Frontend Framework:** React 18.3
- **Styling:** Tailwind CSS 3.4
- **Build Tool:** Vite 6.0
- **API:** [Disney API](https://disneyapi.dev)
- **Version Control:** Git & GitHub

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/gzifoto-spec/apiDisneyReact.git
cd apiDisneyReact
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

## 🏗️ Project Structure
```
apiDisneyReact/
├── public/
│   └── assets/
│       ├── images/          # Logos, placeholders, GIFs
│       └── sounds/          # Audio effects
├── src/
│   ├── features/
│   │   ├── characters/
│   │   │   ├── CharacterCard.jsx
│   │   │   ├── CharacterGrid.jsx
│   │   │   └── CharacterDetail.jsx
│   │   └── navigation/
│   │       └── Pagination.jsx
│   ├── shared/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   └── hooks/
│   │       ├── useResponsive.js
│   │       └── useTransitionEffect.js
│   ├── services/
│   │   └── disneyApi.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Key Components

### CharacterCard
- Displays character preview with key information
- Handles image loading errors with castle placeholder
- Clickable to open detailed view

### CharacterDetail
- Full-page character information display
- Scrollable content with all character data
- Back navigation with animated GIF

### Pagination
- Custom Disney-themed navigation buttons
- Animated GIFs (previous/next actions)
- Page counter display

### useResponsive Hook
- Detects screen size
- Returns adaptive page size (6/12/24)
- Updates on window resize

### useTransitionEffect Hook
- Manages random visual effects
- Synchronizes sound with animations
- Provides smooth transitions between pages

## 🎯 How It Works

1. **Initial Load:** Random page (1-410) loads with fade-in effect
2. **Navigation:** Click Previous/Next buttons to browse pages
3. **Transitions:** Random effect (slide/curtain) plays with sound
4. **Character Details:** Click any card to view full information
5. **Auto-scroll:** Page automatically scrolls to content after transitions

## 🌐 API Integration

This project consumes the [Disney API](https://disneyapi.dev/):

**Endpoint:** `https://api.disneyapi.dev/character`

**Parameters:**
- `page` - Page number (1-410)
- `pageSize` - Characters per page (6/12/24)

**Response Structure:**
```javascript
{
  data: [...], // Array of character objects
  info: {
    page: 1,
    totalPages: 410
  }
}
```

## 🎨 Custom Assets

- **Logos:** Custom Dataland branding (blue/white variants)
- **Placeholder:** Disney castle image for missing character images
- **Audio:** 3 magical sound effects (.wav format)
- **GIFs:** Animated navigation buttons (previous/next)

## 🚧 Development Process

This project was built following professional development practices:

- ✅ Feature-based Git branching
- ✅ Incremental commits with descriptive messages
- ✅ Component-driven architecture
- ✅ Custom hooks for reusable logic
- ✅ Responsive-first design approach
- ✅ Service layer for API calls

## 📝 Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🤝 Contributing

This is an educational project, but suggestions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Xavier Piñeiro**
- GitHub: [@gzifoto-spec](https://github.com/gzifoto-spec)

## 🙏 Acknowledgments

- Disney API for providing character data
- Claude AI & Cline for development assistance
- React and Tailwind CSS communities

---

**Built with ❤️ as an educational React project**