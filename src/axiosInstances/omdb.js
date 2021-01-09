import axios from 'axios'; 

const instance = axios.create({
    baseURL: 'http://www.omdbapi.com/?apikey=95cdb87b&'
})