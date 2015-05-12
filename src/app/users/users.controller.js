'use strict';

export default class UsersCtrl {

    static get nameAs() { return 'ctrlUsers'; }

    constructor (resolvedUsers) {

    	let users = resolvedUsers;

        angular.extend(this, {
        	users: users
        });
    }
}