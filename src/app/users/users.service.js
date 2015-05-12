'use strict';

export default class UsersService {
    constructor($http) {
        this.$http = $http;
    }

    getUsers(name1, name2) {
    	console.log(name1, name2);
        return this.$http.get('https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/'+ name1 + ',' + name2 + '?api_key=eb5cff4a-9a8a-4932-a8f8-429e6d9c7183')
            .then((response) => {
            	console.log(response);
                return response.data;
            })
            .catch((error) => {
                return error.data;
            });
    }
}