'use server';
import axios from "axios";

export const githubRest = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
    },
});