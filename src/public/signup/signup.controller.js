(function() {
    'use strict';

    var signupController = function(MenuService) {
        var current = this;

        current.user = {};
        current.favoriteDish = {};

        current.showError = false;       
        current.showMessage = false;     

        current.signup = function(form) {
            current.showError = false;
            current.showMessage = false;
            
            if(form.$invalid) {
                console.log('The form is not valid');
                return;
            }

            MenuService.getFavoriteDish(current.user.favoriteDish).then(function(response) {
                current.user.favoriteDishDetails = response.data;
                console.log(current.favoriteDish);
                MenuService.saveUser(current.user);
                current.showMessage = true;
            }, function(error) {
                console.log(error);
                current.showError = true;
            });

        }
    };


    signupController.$inject = ['MenuService'];
    angular.module('public').controller('SignupController', signupController);
})();