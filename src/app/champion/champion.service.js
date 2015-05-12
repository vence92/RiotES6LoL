'use strict';

class ChampionService {
	constructor($http) {
        this.$http = $http;
        this.champion = {};
    }

    getChampion(id) {
    	return this.$http.get('https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion/'+ id +'?champData=all&api_key=eb5cff4a-9a8a-4932-a8f8-429e6d9c7183');
    }
}

ChampionService.$inject = ['$http'];

export default ChampionService;