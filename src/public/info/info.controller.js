(function() {
    'use strict';

    var infoController = function(MenuService, ApiPath) {
        var current = this;
        current.apiPath = ApiPath;

        current.signedUp = false;

        current.user = MenuService.getUser();
/*         console.log('User is', current.user); */
        if (angular.equals(current.user, {})) {
            current.signedUp = false;
        } else {
            current.signedUp = true;
        }
    };

    infoController.$inject = ['MenuService', 'ApiPath'];
    angular.module('public').controller('InfoController', infoController);
})();