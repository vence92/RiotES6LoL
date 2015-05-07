'use strict';

class ChampionsService {
	constructor($http) {
        this.$http = $http;
        this.champions = [];
    }

    getChampions() {
        return this.$http.get('https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=tags&api_key=eb5cff4a-9a8a-4932-a8f8-429e6d9c7183')
        	.then(getChampionsCompleted)
        	.catch(getChampionsFailed);
        	
        function getChampionsCompleted(response) {
        	return response.data.data;
        }

        function getChampionsFailed(err) {
        	throw new Error('Erreur suivante: ' + err.data);
        }
    }
}

ChampionsService.$inject = ['$http'];

export default ChampionsService;