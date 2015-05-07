'use strict';

import ChampionCtrl from '../Champion/champion.controller';
import ChampionService from '../Champion/champion.service';

angular.module('Champion', [])
	.controller('ChampionCtrl', ChampionCtrl)
	.service('ChampionService', ChampionService)

	.config(function ($stateProvider) {
		$stateProvider

			.state('champion', {
				url: 'champion/detail/:id',
				templateUrl: 'app/Champion/champion.tpl.html',
				controller: 'ChampionCtrl',
				controllerAs: 'champion',
				resolve: {
					resolveChamp: function (ChampionService, $stateParams) {
					    return ChampionService.getChampionDetails($stateParams.id).then(function (response) {
					    	return response;
					    });
					}
				}
			});
	});