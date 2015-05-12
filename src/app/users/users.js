'use strict';

import UsersCtrl from '../users/users.controller';
import UsersService from '../users/users.service';

angular.module('Users', [])
	.controller('UsersCtrl', UsersCtrl)
	.service('UsersService', UsersService)

	.config(function ($stateProvider) {
		$stateProvider
			.state('users', {
				url: '/users/:name1&:name2',
				templateUrl: 'app/users/users.tpl.html',
				controller: UsersCtrl.name,
				controllerAs: UsersCtrl.nameAs,
				resolve: {
					resolvedUsers: function (UsersService, $stateParams) {
						return UsersService.getUsers($stateParams.name1, $stateParams.name2)
							.then((response) => {
								return response;
							});
					}
				}
			});
	});