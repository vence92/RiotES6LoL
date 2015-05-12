'use strict';

import UserCtrl from '../user/user.controller';
import UserService from '../user/user.service';

angular.module('User', [])
	.controller('UserCtrl', UserCtrl)
	.service('UserService', UserService)

	.config(function ($stateProvider) {
		$stateProvider
			.state('user', {
				url: '/user/:name',
				templateUrl: 'app/user/user.tpl.html',
				controller: UserCtrl.name,
				controllerAs: UserCtrl.nameAs,
				resolve: {
					resolvedUser: function (UserService, $stateParams, localStorageService) {
						return UserService.getUser($stateParams.name)
							.then(function (response) {
								localStorageService.set(response[$stateParams.name].id, response[$stateParams.name].name);
								return response;
							});
					}
				}
			});
	});