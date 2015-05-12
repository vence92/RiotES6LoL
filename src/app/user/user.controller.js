'use strict';

export default class UserCtrl {

    static get nameAs() { return 'ctrlUser'; }

    constructor (resolvedUser, $stateParams) {

        let user = resolvedUser[$stateParams.name];
        
        angular.extend(this, {
        	user: user
        });
    }
}