import Client, { SearchUserResponse } from './client/github.client';

export default {
  searchUsers(_searchQuery: string): Promise<SearchUserResponse> {
    const params = { q: 'kishanjay' };
  
    return Client.request({
        url: 'search/users',
        method: 'GET',
        params,
    }).then(({data}: {data: SearchUserResponse}) => data);
  },
  
  getUserByUsername(username: string): Promise<any> {
    return Client.request({
      url: `users/${username}`,
      method: 'GET',
  }).then(({data}: {data: any}) => data);
  }
}