🎬 CineVerse – Discover, Watch, Explore

CineVerse is a feature-rich movie and TV show explorer built using **React JS**. With a modern and intuitive UI, users can search for any movie or TV show, view trailers, get recommendations, explore cast and crew details, and navigate through trending, popular, and top-rated content.

🌐 **Live Site**: [https://CineVerse.app/](https://cine-verse-kappa.vercel.app/)

## ✨ Features

🔍 **Search Movies and TV Shows**  
Type and instantly search for any movie or show by title. Uses TMDB’s search endpoint for results.

▶️ **Watch Trailers Directly**  
Uses `react-player` to seamlessly embed and play YouTube trailers on the details screen.

📃 **Detailed Information**  
View movie/TV overview, ratings, genres, release year, cast and crew, etc.

🎬 **Recommendations Engine**  
Get suggestions based on what you're currently watching or have selected.

📈 **Category Browsing**  
Explore content across categories: Trending, Popular, and Top Rated.

🔁 **Infinite Scroll**  
Smooth and dynamic infinite scrolling powered by `react-infinite-scroll-component`.

👥 **People Browser**  
Explore information about cast, crew, and other individuals in the film industry.

📱 **Responsive UI**  
Sleek and modern design that works great on mobile and desktop.

---

## 🧩 Tech Stack & Libraries

| Technology | Purpose |
|------------|---------|
| **React** | Building UI components |
| **React Router DOM** | Client-side routing and navigation |
| **Redux Toolkit + React Redux** | State management for movies, TV shows, and people |
| **Axios** | API requests to TMDB |
| **React Player** | Embeds and plays YouTube trailers |
| **React Infinite Scroll Component** | Infinite scroll functionality |
| **Remix Icon (via CDN)** | Modern, elegant icons |

---

## 🧱 Folder Structure

```
src/
├── actions/             # API calls to TMDB
│   ├── movieActions.jsx
│   ├── personActions.jsx
│   └── tvActions.jsx
├── assets/              # Images, logos, etc.
├── components/
│   ├── partials/        # Reusable UI components
│   │   ├── Card.jsx
│   │   ├── Dropdown.jsx
│   │   ├── Headers.jsx
│   │   ├── HorizontalCards.jsx
│   │   ├── Sidenav.jsx
│   │   ├── Topnav.jsx
│   │   └── Trailer.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── Loading.jsx
│   ├── Movie.jsx
│   ├── Moviedetails.jsx
│   ├── NotFound.jsx
│   ├── People.jsx
│   ├── Peopledetails.jsx
│   ├── Popular.jsx
│   ├── Trending.jsx
│   ├── Tvdetails.jsx
│   └── Tvshow.jsx
├── reducers/            # Redux slices
│   ├── movieSlice.jsx
│   ├── personSlice.jsx
│   └── tvSlice.jsx
├── store/               # Store configuration
│   └── store.jsx
└── utils/               # Axios instance
    └── axios.jsx
```

---
## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/puneet426/CineVerse
cd cineverse
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```
---

## 📁 Required Packages

```bash
npm install react-router-dom axios react-player react-infinite-scroll-component @reduxjs/toolkit react-redux
```

---

## 🎨 Add Remix Icons

In `public/index.html`, add:

```html
<link
  href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
  rel="stylesheet"
/>
```

---
## 🙌 Acknowledgements

- [TMDB API](https://www.themoviedb.org/)
- [React Player](https://github.com/cookpete/react-player)
- [Remix Icon](https://remixicon.com/)
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component)

---
---


## 🛠️ To Do / Improvements

- 📱 Make UI more responsive for mobile devices

- ✨ Add user login / watchlist feature


---
## ⭐ Show Your Support

If you enjoyed this project:

- 🌟 Star the repository
- 🍴 Fork it
- 🧑‍💻 Contribute
- 📢 Share with your friends

---
