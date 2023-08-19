import axios from 'axios';


const gistApi = axios.create({
    baseURL: 'https://gist.githubusercontent.com/davidlynnDP/3d8a5eaca7bc4cdbe54d123398af8222/raw/f0d008a115705e50c51a52f78ef6f14abdfd703f'
});


export default gistApi;

