'use strict';

export default class localStorageService {

	constructor($window) {
		this.$window = $window;
	}

	set(key, value) {
		// JSON.stringify serializes NaN to null, so we override this
		// behaviour here to allow consistent data exchange.
		// NOTE: avoid usage of `isNaN(value)` here because it reports
		//       certain non-numeric values as NaN after type-casting;
		//       see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN#Confusing_special-case_behavior
		//       instead, prefer strict comparison to itself to check
		//       for NaN because is the only value that is not
		//       strictly (===) equal to itself
		this.$window.localStorage.setItem(key, value);
	}	

	get(key) {
        // NOTE: this.$window.localStorage.getItem reports non-exisistent values as nulls
        var value = this.$window.localStorage.getItem(key);
        switch (value) {
            case 'undefined': return undefined;
            case 'NaN': return NaN;
            default: return angular.fromJson(value);
        }
    }

    remove(key) {
        this.$window.localStorage.removeItem(key);
    }

    key(index) {
        return this.$window.localStorage.key(index);
    }

    get length() {
        return this.$window.localStorage.length;
    }
}