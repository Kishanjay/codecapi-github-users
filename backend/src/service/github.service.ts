// import githubStorage from "@/storage/github.storage"
import githubRepository from "@/repository/github.repository"
import { GithubUser } from "@/types";

export default { 
    async listUsers (searchQuery: string): Promise<GithubUser[]> {
        // const cachedUsers = await githubStorage.userStorage(searchQuery);
        const searchResult = await githubRepository.searchUsers(searchQuery)
        return searchResult.items;
    },
    getUser(_userId: string) {
    
    }
}