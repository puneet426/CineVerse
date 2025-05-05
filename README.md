🎬 CineVerse – Discover, Watch, Explore

CineVerse is a feature-rich movie and TV show explorer built using **React JS**. With a modern and intuitive UI, users can search for any movie or TV show, view trailers, get recommendations, explore cast and crew details, and navigate through trending, popular, and top-rated content.

## 🎥 Demo

![Project Demo](/public/Cineverse.gif)

🚀 **Live Demo**: [https://CineVerse.app/](https://cine-verse-kappa.vercel.app/)



## ✨ Features

- 🔍 **Search** for any movie, TV show, or celebrity.
- 📽 **Watch trailers** 
- 🎞 View **full details**: overview, cast, genres, runtime, release date.
- 🤖 **Related recommendations** for each movie/TV show.
- 🧑‍🎤 **Actor profiles**: biography, filmography, and TV work.
- ♾️ **Infinite scroll** for trending/popular lists.
- 🧠 **Redux Toolkit** used for robust state management.
- ⚡ Built using **Vite** for faster development and optimized production.



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
### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

> 🔐 Make sure `.env` is listed in `.gitignore`


### 4. Start development server

```bash
npm run dev
```
---

## 📁 Required Packages

```bash
npm install react-router-dom axios react-player react-infinite-scroll-component @reduxjs/toolkit react-redux
```

📚 Resources & References
> Emphasizes learning sources or documentation used during development

- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [TMDB API](https://www.themoviedb.org/)
- [React Player](https://github.com/cookpete/react-player)
- [Remix Icon](https://remixicon.com/)
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component)

---



## 🛠️ To Do / Improvements

- 📱 Make UI more responsive for mobile devices

- ✨ Add user login / watchlist feature


---


## 🤝 Contributing

We welcome contributions from the community! Follow the steps below:

### 1. Fork the repository

Click the **Fork** button at the top right of the repo to create your own copy.

### 2. Create a new branch

```bash
git checkout -b feature/my-feature-name
```

### 3. Make your changes

Follow project structure and keep code readable.

### 4. Commit & push

```bash
git add .
git commit -m "Added new feature"
git push origin feature/my-feature-name
```

### 5. Open a Pull Request

Go to the GitHub repo and click **New Pull Request**.

---
## ⭐ Show Your Support

If you enjoyed this project:

- 🌟 Star the repository
- 🍴 Fork it
- 🧑‍💻 Contribute
- 📢 Share with your friends

---
