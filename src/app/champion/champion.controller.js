'use strict';

class ChampionCtrl {
	static get nameAs() { return 'ctrlChampion'; }

	constructor (resolvedChamp) {
		
		let champion = resolvedChamp.data;
		
		angular.extend(this, {
			champion: champion
		});
	}

}

export default ChampionCtrl;