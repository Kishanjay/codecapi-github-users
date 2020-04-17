import express = require('express');
import githubService from '@/service/github.service';

export default { 
    async listUsers(req: express.Request, res: express.Response) {
        let searchQuery = req.query.search as string;
        const users = await githubService.listUsers(searchQuery)
        res.send({ users });
    },
    
    async getUser(){
    
    }
 };
