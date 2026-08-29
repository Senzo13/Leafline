# 🌿 Leafline — Smart Plant Care & Garden Monitoring App

<div align="center">

![React Native](https://img.shields.io/badge/React_Native-0.73-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20iOS-green?style=for-the-badge)
![License](https://img.shields.io/badge/License-Private-red?style=for-the-badge)
![Node](https://img.shields.io/badge/Node-%3E%3D18-339933?style=for-the-badge&logo=node.js&logoColor=white)

<img src="background-mockup.jpg" alt="Leafline App Preview" width="80%" />

**Leafline** is a cross-platform React Native mobile app that combines **IoT sensor data**, **AI-powered insights**, and **real-time weather forecasting** to help gardeners protect and nurture their plants. Monitor soil moisture, temperature, and light intensity — all from your phone.

[Features](#-features) · [Tech Stack](#-tech-stack) · [Getting Started](#-getting-started) · [Architecture](#-architecture) · [Running Tests](#-running-tests)

</div>

---

## 🌱 Features

| Feature | Description |
|---|---|
| **Real-Time Sensor Dashboard** | Monitor soil humidity, temperature, and light intensity from connected IoT sensors in real time. |
| **Weather-Based Plant Alerts** | Receive predictive notifications about weather risks (rain, frost, heatwaves) that could harm your plants. |
| **Interactive Garden Map** | Visualize your garden plots and sensor locations on an interactive Mapbox-powered map. |
| **Plant Health Scan** | Scan your plants to detect potential diseases and get AI-driven care recommendations. |
| **Land & Plot Management** | Organize your garden into lands and plots, each with dedicated sensor monitoring. |
| **Personalized Care Tips** | Get tailored suggestions and actionable advice based on your plant data and local conditions. |
| **Multi-Language Support** | Fully internationalized interface with i18next integration. |
| **User Authentication** | Secure sign-up and login with JWT-based authentication. |

---

## 🛠 Tech Stack

### Core

| Technology | Purpose |
|---|---|
| **React Native 0.73** | Cross-platform mobile framework |
| **TypeScript** | Type-safe development |
| **React Navigation 6** | Screen navigation (stack + bottom tabs) |

### Data & Networking

| Technology | Purpose |
|---|---|
| **Axios** | HTTP client for API communication |
| **SWR** | Data fetching and caching |
| **AsyncStorage** | Local persistent storage |
| **JWT Decode** | Token-based auth management |

### UI & Maps

| Technology | Purpose |
|---|---|
| **Mapbox (@rnmapbox/maps)** | Interactive garden maps |
| **Lottie** | Animated micro-interactions |
| **React Native Reanimated** | Smooth gesture-driven animations |
| **Bottom Sheet** | Native-feeling bottom panels |
| **React Native SVG** | Scalable vector graphics |
| **Linear Gradient** | Gradient backgrounds and overlays |

### Utilities

| Technology | Purpose |
|---|---|
| **i18next + react-i18next** | Internationalization (i18n) |
| **React Hook Form** | Performant form handling |
| **date-fns** | Date formatting and manipulation |
| **React Native Permissions** | Runtime permission management |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18 — [Download](https://nodejs.org/)
- **React Native CLI** — [Environment Setup Guide](https://reactnative.dev/docs/environment-setup)
- **Android Studio** (for Android) or **Xcode** (for iOS)

### Installation

```bash
# Clone the repository
git clone https://github.com/Senzo13/Leafline.git
cd Leafline

# Install dependencies
npm install

# iOS only — install CocoaPods
cd ios && pod install && cd ..
```

### Running the App

```bash
# Start the Metro bundler
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios
```

### Troubleshooting

```bash
# Clear Metro cache
npx react-native start --reset-cache

# Clean Android build
cd android && ./gradlew clean && ./gradlew assembleDebug
```

---

## 🏛 Architecture

Leafline follows a **modular architecture** designed for scalability and maintainability:

```
src/
├── components/       # Reusable UI components (buttons, cards, inputs, etc.)
├── screens/          # App screens organized by feature
│   ├── tabs/         # Main tab screens (Home, Map, Dashboard, Account)
│   └── others/       # Secondary screens (Land, Plot, Auth, Welcome)
├── services/         # API clients and external service integrations
├── navigations/      # Navigation configuration and custom tab bar
├── context/          # React Context providers for global state
├── i18n/             # Internationalization configuration and translations
├── types/            # TypeScript type definitions
├── utils/            # Helper functions and utilities
├── assets/           # Static images and fonts
└── resources/        # Additional app resources
```

---

## 🧪 Running Tests

```bash
# Run the test suite
npm test
```

---

## 📱 Building for Release

### Android APK

```bash
cd android
./gradlew assembleRelease
```

### Android App Bundle (AAB)

```bash
cd android
./gradlew bundleRelease
```

> Refer to the [React Native Publishing Guide](https://reactnative.dev/docs/signed-apk-android) for signing configuration details.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to open an issue or submit a pull request.

---

<div align="center">

**Built with React Native** · **Powered by IoT** · **Made for Gardeners**

</div>
