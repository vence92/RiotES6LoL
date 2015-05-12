'use strict';

class HomeCtrl {
    static get nameAs() { return 'ctrlHome'; }

    constructor ($state, $window) {

        let localItems = [];

        //retrieve localStorage items
        getLocalItems();

        // private
        function getLocalItems() {
            for ( var i = 0, len = $window.localStorage.length; i < len; ++i ) {
                var item = $window.localStorage.getItem($window.localStorage.key(i));
                if (item !== 'undefined' && item !== 'Undefined') {   
                    localItems.push(item);
                }
            }
            return localItems;
        }
        
        
        // public
        function postUser(userName) {
            $state.go('user', {
                name: userName.toLowerCase()
            });
        }

        function postUsers(userName1, userName2) {
            console.log(userName1, userName2);
            $state.go('users', {
                name1: userName1.toLowerCase(),
                name2: userName2.toLowerCase()
            });
        }


        angular.extend(this, {
            postUser: postUser,
            postUsers: postUsers,
            localItems: localItems
        });
    }
}

export default HomeCtrl;
