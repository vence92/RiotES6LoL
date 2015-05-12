'use strict';

import ChampionCtrl from '../champion/champion.controller';
import ChampionService from '../champion/champion.service';

angular.module('Champion', [])
	.controller('ChampionCtrl', ChampionCtrl)
	.service('ChampionService', ChampionService)

	.config(function ($stateProvider) {
		$stateProvider
			.state('champion', {
				url: '/champion/:id',
				templateUrl: 'app/champion/champion.tpl.html',
				controller: ChampionCtrl.name,
				controllerAs: ChampionCtrl.nameAs,
				resolve: {
					resolvedChamp: function (ChampionService, $stateParams) {
    					return ChampionService.getChampion($stateParams.id)
					    	.then((response) =>  {
						    	return response;
						    });
				 	}
				}
			});
	});