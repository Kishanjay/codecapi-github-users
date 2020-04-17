import Client, { SearchUserResponse } from './client/github.client';

export default {
  searchUsers(_searchQuery: string): Promise<SearchUserResponse> {
    const params = { q: 'kishanjay' };
  
    return Client.request({
        url: 'search/users',
        method: 'GET',
        params,
    }).then(({data}: {data: SearchUserResponse}) => data);
  }
}