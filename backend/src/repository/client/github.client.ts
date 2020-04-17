import { GithubUser } from "@/types";

const axios = require('axios');

const baseURL = 'https://api.github.com/'
const client = axios.create({
    baseURL,
});


export interface SearchUserResponse {
    total_count: number,
    incomplete_results: boolean,
    items: GithubUser[]
}
export default client;