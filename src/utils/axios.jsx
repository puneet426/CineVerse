import axios from 'axios'

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWQ1YjUyMmMwYmY4YzIzNTkxMWZlNzliODhhN2I1ZSIsIm5iZiI6MTc0NjIxNTUwNy4zNTUsInN1YiI6IjY4MTUyMjUzZGVlODAyMzYzODkwN2RjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CNvCg4rfBh_q6jREQOU3bRLMlpa8OytAbbvksfCBGuE'
      }
});

export default instance;