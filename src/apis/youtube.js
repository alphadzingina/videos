import axios from 'axios';

const KEY = 'AIzaSyDFonYr8R2msR8LIXIjAmmlFblczVtTZMg';

export default axios.Create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})