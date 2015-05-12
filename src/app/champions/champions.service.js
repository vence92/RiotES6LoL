'use strict';

class ChampionsService {
	constructor($http) {
        this.$http = $http;
    }

    getChampions() {
        return this.$http.get('https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=tags&api_key=eb5cff4a-9a8a-4932-a8f8-429e6d9c7183')
        	.then((response) => {
                return response.data;
            })
        	.catch((err) => {
                throw new Error('Erreur suivante: ' + err.data);
            });
    }
}

ChampionsService.$inject = ['$http'];

export default ChampionsService;