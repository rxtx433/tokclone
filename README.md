# TokClone - TikTok Clone with Expo

A TikTok clone built with React Native and Expo, featuring vertical video scrolling, user profiles, discovery, and more.

## Features

- 📱 Vertical video feed with swipe navigation
- 🎥 Video playback with play/pause controls
- 🔇 Mute/unmute functionality
- ❤️ Interactive UI elements (likes, comments, shares)
- 🔍 Discovery/Search screen with trending hashtags
- 👤 User profile with video grid
- 📬 Inbox/Notifications screen
- ➕ Create/Upload placeholder screen
- 🎨 TikTok-inspired dark theme UI

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Expo CLI (installed automatically)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rxtx433/tokclone.git
cd tokclone
```

2. Install dependencies:
```bash
npm install
```

### Running the App

Start the development server:
```bash
npm start
```

Then you can:
- Press `a` to open on Android emulator
- Press `i` to open on iOS simulator (macOS only)
- Press `w` to open in web browser
- Scan the QR code with Expo Go app on your physical device

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── VideoPlayer.tsx
│   └── VideoInfo.tsx
├── screens/         # Screen components
│   ├── HomeScreen.tsx
│   ├── DiscoverScreen.tsx
│   ├── CreateScreen.tsx
│   ├── InboxScreen.tsx
│   └── ProfileScreen.tsx
├── navigation/      # Navigation configuration
│   └── TabNavigator.tsx
├── types/          # TypeScript type definitions
│   └── index.ts
├── constants/      # App constants
│   └── colors.ts
└── data/           # Mock data
    └── videos.ts
```

## Technologies Used

- **React Native** - Mobile app framework
- **Expo** - Development platform
- **TypeScript** - Type safety
- **React Navigation** - Navigation library
- **Expo AV** - Audio/Video playback
- **Expo Vector Icons** - Icon library

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This is a clone project built for educational purposes to demonstrate React Native and Expo capabilities.
