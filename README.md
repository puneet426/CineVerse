# CineVerse 

In project we need packages like 
1. npm i react-router-dom :- for routing
2. npm i axios to call apis
3. npm i react-player :- for playing a variety of URLs, including file paths, YouTube

4. npm i react-infinite-scroll-component:-    A component to make all your infinite scrolling

5. npm install @reduxjs/toolkit react-redux 

here i use remix icon by using cdn
<link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
    rel="stylesheet"
/>


make a Sidenav file in partials beacuse it not load
i am using here The Movie DataBAse


here we use infinite scroll the scroll the full data
import it in trending.jsx
 import InfiniteScroll from 'react-infinite-scroll-component';

structure 

public
src 
   actions
    movieActions.jsx
    personActions.jsx
    tvActions.jsx

   assets
   components
        patials folder
                Card.jsx
                Dropdown.jsx
                Headers.jsx
                HorizontalCards.jsx
                Sidenav.jsx
                Topnav.jsx
                Trailer.jsx
        About.jsx
        Contact.jsx
        Home.jsx
        Loading.jsx
        Movie.jsx
        Moviedetails.jsx
        NotFound.jsx
        People.jsx
        Peopledetails.jsx
        Popular.jsx
        Trending.jsx
        Tvdetails.jsx
        Tvshow.jsx
   reducers
         movieSlice.jsx
         personSlice.jsx
         tvSlice.jsx
   store
        store.jsx
   utils
        axios.jsx
