'use strict';

class HomeCtrl {
    static get nameAs() { return 'ctrlHome'; }

    constructor ($state, $window) {

        let localItems = [];

        function getLocalItems() {
            for ( var i = 0, len = $window.localStorage.length; i < len; ++i ) {
                var item = $window.localStorage.getItem($window.localStorage.key(i));
                if (item !== 'undefined' && item !== 'Undefined') {   
                    localItems.push(item);
                }
            }
            return localItems;
        }
        
        getLocalItems();

        function post(userName) {
            $state.go('user', {
                name: userName.toLowerCase()
            });
        }


        angular.extend(this, {
            post: post,
            localItems: localItems
        });
    }
}

export default HomeCtrl;
