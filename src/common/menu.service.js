(function () {
  "use strict";

  angular.module('common')
    .service('MenuService', MenuService);


  MenuService.$inject = ['$http', 'ApiPath'];
  function MenuService($http, ApiPath) {
    var service = this;
    var user = null;
    var favoriteDish = null;


    service.getCategories = function () {
      return $http.get(ApiPath + '/categories.json').then(function (response) {
        return response.data;
      });
    };


    service.getMenuItems = function (category) {
      return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
        return response.data;
      });
    };
    // Save user information and their favorite dish
    service.saveUser = function (userData, dishData) {
      user = userData;
      favoriteDish = dishData;
    };

    // Retrieve user information
    service.getUser = function () {
      return user;
    };

    // Retrieve favorite dish information
    service.getFavoriteDish = function () {
      return favoriteDish;
    };

    // Fetch a specific menu item by its short name (e.g., "L1")
    service.getMenuItem = function (menuItemShortName) {
      var category = menuItemShortName[0]; // First letter is the category
      var itemIndex = menuItemShortName.slice(1) - 1; // Remaining is the index
      var url = `${ApiPath}/menu_items/${category}/menu_items/${itemIndex}.json`;
      return $http.get(url).then(function (response) {
        if (!response.data) {
          throw new Error('Menu item not found');
        }
        return response.data;
      });
    };

  }



})();
