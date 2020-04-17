import { GithubUser } from '@/types';

import storageClient from './redis.client';

export default {
    setUsers(searchQuery: string, users: GithubUser[]){
        return storageClient.setAsync(`users-${searchQuery}`, JSON.stringify(users));
    },
    async getUsers(searchQuery: string) {
        const usersString = await storageClient.getAsync(`users-${searchQuery}`);
        return JSON.parse(usersString);
    },
    setUser(userId: string, user: GithubUser) {
        return storageClient.setAsync(`user-${userId}`, JSON.stringify(user));
    },
    async getUser(userId: string) {
        const userString = await storageClient.getAsync(`user-${userId}`);
        return JSON.parse(userString);
    }
}

