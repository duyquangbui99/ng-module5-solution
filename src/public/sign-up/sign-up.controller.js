(function () {
    'use strict';

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService'];
    function SignUpController(MenuService) {
        var signUpCtrl = this;
        signUpCtrl.user = {};
        signUpCtrl.invalidDish = false;
        signUpCtrl.infoSaved = false;

        signUpCtrl.submitForm = function () {
            MenuService.getMenuItem(signUpCtrl.user.favoriteDish)
                .then(function (response) {
                    signUpCtrl.invalidDish = false; // Favorite menu item is valid
                    signUpCtrl.infoSaved = true;   // Data saved message
                    MenuService.saveUser(signUpCtrl.user, response);
                })
                .catch(function () {
                    signUpCtrl.invalidDish = true; // Favorite menu item is invalid
                });
        };
    }
})();
