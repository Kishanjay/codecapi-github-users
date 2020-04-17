import githubStorage from "@/storage/github.storage"
import githubRepository from "@/repository/github.repository"
import { GithubUser } from "@/types";

export default { 
    async listUsers (searchQuery: string): Promise<GithubUser[]> {
        const cachedUsers = await githubStorage.getUsers(searchQuery);
        if (cachedUsers) {
            return cachedUsers;
        }

        const searchResult = await githubRepository.searchUsers(searchQuery)
        const users = searchResult.items;
        
        githubStorage.setUsers(searchQuery, users);
        return users;
    },
    getUser(_userId: string) {
    
    }
}