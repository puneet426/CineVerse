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
