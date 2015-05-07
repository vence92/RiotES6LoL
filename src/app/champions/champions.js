'use strict';

import ChampionsCtrl from '../Champions/champions.controller';
import ChampionsService from '../Champions/champions.service';

angular.module('Champions', [])
	.controller('ChampionsCtrl', ChampionsCtrl)
	.service('ChampionsService', ChampionsService)

	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('champions', {
				url: '/champions',
				templateUrl: 'app/Champions/champions.tpl.html',
				controller: 'ChampionsCtrl',
				controllerAs: 'champions',
				resolve: ChampionsCtrl.resolve
			});
	});