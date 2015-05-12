'use strict';

class ChampionsCtrl {
	static get nameAs() { return 'ctrlChampions'; }

	constructor (resolvedChamps, $state) {
		
		let list = resolvedChamps.data;

		function get(champId) {
			$state.go('champion', {
				id: champId
			});
		}

		angular.extend(this, {
			list: list,
			get: get
		});
	}
}

export default ChampionsCtrl;