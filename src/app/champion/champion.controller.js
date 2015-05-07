'use strict';

class ChampionCtrl {
	constructor ($scope, $state, resolveChamp) {

		let details = resolveChamp;

		angular.extend(this, {
			details: details
		});
	}
}

ChampionCtrl.$inject = ['$scope', '$state', 'resolveChamp'];

export default ChampionCtrl;