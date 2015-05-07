'use strict';

class ChampionsCtrl {
	constructor ($scope, $state, ChampionsService) {
		
		let list = ChampionsService.champions;

		angular.extend(this, {
			list: list
		});
	}
}

ChampionsCtrl.resolve = {
  initChamps: function (ChampionsService) {
    return ChampionsService.getChampions().then(function (response) {
    	ChampionsService.champions = response;
    });
  }
};

ChampionsCtrl.$inject = ['$scope', '$state', 'ChampionsService'];

export default ChampionsCtrl;