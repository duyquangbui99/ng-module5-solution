(function () {
    'use strict';

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['MenuService'];
    function MyInfoController(MenuService) {
        var myInfoCtrl = this;

        // Retrieve user data and favorite menu item
        myInfoCtrl.user = MenuService.getUser();
        myInfoCtrl.favoriteDish = MenuService.getFavoriteDish();
        myInfoCtrl.hasSignedUp = !!myInfoCtrl.user; // Check if the user has signed up
    }
})();
