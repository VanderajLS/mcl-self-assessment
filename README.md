# MCL Self-Assessment Application

An interactive web-based self-assessment tool for the Meditation Combat League, featuring audio introduction, 5-question assessment, and direct calendar booking integration. Word.

## 🌐 Live Application

**GitHub Pages URL:** `https://[your-username].github.io/[repository-name]/`

## ✨ Features

- **🎵 Audio Welcome Experience** - 3-minute professional introduction with full player controls
- **📱 Mobile-First Design** - Responsive layout with scroll-to-top functionality
- **❓ Interactive Assessment** - 5 carefully crafted questions targeting mental patterns
- **✅ Enhanced Feedback System** - Visual feedback with red X for wrong, green checkmarks for correct
- **📊 Progress Tracking** - Animated progress bar throughout the assessment
- **👤 Profile Results** - Personalized results page with MCL philosophy
- **📅 Calendar Integration** - Direct booking with Google Calendar for MCL training sessions
- **🎨 Professional Styling** - Clean, direct, punchy design matching MCL branding

## 🚀 Quick Start

### For Users
Simply visit the live application URL and begin your assessment journey.

### For Developers

#### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

#### Installation
```bash
# Clone the repository
git clone https://github.com/[your-username]/[repository-name].git
cd [repository-name]

# Install dependencies
npm install

# Start development server
npm run dev
```

#### Build for Production
```bash
# Build the application
npm run build

# Preview the build
npm run preview
```

## 📁 Project Structure

```
mcl-self-assessment/
├── docs/                   # Built files for GitHub Pages
├── src/
│   ├── components/         # React components
│   │   ├── WelcomeScreen.jsx
│   │   ├── IntroScreen.jsx
│   │   ├── QuestionScreen.jsx
│   │   ├── ProfileScreen.jsx
│   │   └── ScrollToTop.jsx
│   ├── data/
│   │   └── questions.js    # Assessment questions and content
│   ├── App.jsx            # Main application component
│   ├── App.css           # Application styles
│   └── main.jsx          # Application entry point
├── public/
│   └── WelcometotheMCL.mp3 # Audio introduction file
└── package.json
```

## 🎯 User Flow

1. **Welcome Screen** - Audio introduction with professional player controls
2. **Intro Screen** - Assessment overview and instructions
3. **Question Flow** - 5 interactive questions with immediate feedback
4. **Profile Results** - Personalized results and call-to-action
5. **Calendar Booking** - Direct integration with MCL training scheduling

## 🛠 Technical Stack

- **Frontend:** React 18 with Vite
- **Styling:** Tailwind CSS with custom animations
- **Routing:** React Router DOM
- **Audio:** HTML5 Audio API with React hooks
- **Deployment:** GitHub Pages (static hosting)

## 📱 Mobile Optimization

- Fully responsive design for all screen sizes
- Touch-optimized controls and buttons
- Automatic scroll-to-top on page navigation
- Optimized audio player for mobile devices

## 🎨 Customization

### Updating Questions
Edit `src/data/questions.js` to modify:
- Question text and options
- Feedback messages
- Profile content

### Styling Changes
Modify `src/App.css` for:
- Color scheme adjustments
- Typography changes
- Animation modifications

### Audio Content
Replace `public/WelcometotheMCL.mp3` with your own audio file (keep the same filename or update the reference in `WelcomeScreen.jsx`)

## 📅 Calendar Integration

The application integrates with Google Calendar for booking MCL training sessions. The calendar link is configured in `src/components/ProfileScreen.jsx`.

To update the booking link:
1. Open `src/components/ProfileScreen.jsx`
2. Find the `window.open()` call
3. Replace the URL with your Google Calendar booking link

## 🚀 Deployment

### GitHub Pages (Recommended)
1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Set source to "Deploy from a branch"
4. Select "main" branch and "/docs" folder
5. Your site will be available at `https://[username].github.io/[repository-name]/`

### Other Hosting Options
The `docs/` folder contains all built files and can be deployed to:
- Netlify
- Vercel
- AWS S3
- Any static hosting service

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Key Components

#### WelcomeScreen
- Audio player with custom controls
- 15-second skip forward/backward
- Volume control and progress bar
- Smart button state management

#### QuestionScreen
- Dynamic question rendering
- Visual feedback system
- Progress tracking
- Smooth animations

#### ProfileScreen
- Results display
- Calendar integration
- Restart functionality

## 📄 License

This project is proprietary to the Meditation Combat League.

## 🤝 Support

For technical support or questions about the MCL Self-Assessment Application, please contact the development team.

---

**Built with ❤️ for the Meditation Combat League**

