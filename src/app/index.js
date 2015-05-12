'use strict';

import HomeCtrl from './home/home.controller';
import NavbarCtrl from '../app/components/navbar/navbar.controller';
import Champions from '../app/Champions/champions';
import Champion from '../app/champion/champion';
import User from '../app/user/user';
import Localstorage from '../app/common/localStorage';

angular.module('myProject', 
  [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'restangular',
    'ui.router',
    'ngMaterial',
    'Champions',
    'Champion',
    'User',
    'Localstorage'
  ])
  .controller('HomeCtrl', HomeCtrl)
  .controller('NavbarCtrl', NavbarCtrl)

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: HomeCtrl.name,
        controllerAs: HomeCtrl.nameAs,
      });

    $urlRouterProvider.otherwise('/');
  })
;
