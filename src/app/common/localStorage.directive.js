'use strict';

export default class localStorageItems { 
	constructor() {
		this.templateUrl = '../app/common/localStorageItems.tpl.html';
		this.restrict = 'E';
		this.bindToController = true;
		this.scope = {
			items: '='
		};
		this.controller = function($state) {
			this.post = function(name) {
				$state.go('user', {
	                name: name.toLowerCase()
	            });
			};
		};
		this.controllerAs = 'ctrlStorage';
	}

	
}