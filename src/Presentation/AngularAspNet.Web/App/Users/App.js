(function() {
    "use strict";

    angular
        .module("users", ["common"])
        .config(routeConfig)
        .factory("userService", userService);

    routeConfig.$inject = ["$routeProvider", "$locationProvider"];

    function routeConfig($routeProvider, $locationProvider) {

        var rootPath = window.App.rootPath;

        $routeProvider
            .when(rootPath + "users", {
                template: "<user-list></user-list>",
                caseInsensitiveMatch: true
            })
            .when(rootPath + "users/:userId",
            {
                template: "<user-create-or-update></user-create-or-update>",
                caseInsensitiveMatch: true
            })
            .otherwise({ redirectTo: (rootPath + "users") });

        $locationProvider.html5Mode({ enabled: true, requireBase: false });
    }

    userService.$inject = ["$rootScope", "$http", "$q", "$location", "viewModelHelper"];

    function userService($rootScope, $http, $q, $location, viewModelHelper) {
        return window.App.userService($rootScope, $http, $q, $location, viewModelHelper);
    }

    (function(app) {
        var userService = function ($rootScope, $http, $q, $location, viewModelHelper) {
            var self = this;

            self.navigateToUserList = function () {
                viewModelHelper.navigateTo("users");
            }

            self.navigateToUser = function (userId) {
                viewModelHelper.navigateTo("users/" + userId);
            }

            return this;
        };
        app.userService = userService;
    }(window.App));
})();