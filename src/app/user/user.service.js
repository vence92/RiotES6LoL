'use strict';

export default class UserService {
    constructor($http) {
        this.$http = $http;
    }

    getUser(name) {
        return this.$http.get('https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/'+ name +'?api_key=eb5cff4a-9a8a-4932-a8f8-429e6d9c7183')
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error.data;
            });
    }
}