'use strict';

import localStorageService from '../common/localStorage.service';
import localStorageItems from '../common/localStorage.directive';

angular.module('Localstorage', [])

.service('localStorageService', localStorageService)
.directive('localStorageItems', () => new localStorageItems());