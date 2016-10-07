(function () {
    "use strict";

    UserAddOrEditController.$inject = ["$scope", "userService", "$routeParams", "viewModelHelper"];

    function UserAddOrEditController($scope, userService, $routeParams, viewModelHelper) {

        var self = this;
        self.model = {
            id: parseInt($routeParams.userId) || 0
        };

        self.$onInit = function () {
            if (self.model.id > 0) {
                self.refreshUser();
            }
        }

        self.$onDestroy = function () {
        }

        self.refreshUser = function () {
            viewModelHelper.apiGet("Api/Users/" + self.model.id,
                null,
                function (result) {
                    self.model = result.data;
                });
        }

        self.backToList = function () {
            viewModelHelper.navigateTo("users");
        }
    }

    angular
        .module("users")
        .component("userCreateOrUpdate",
        {
            templateUrl: window.App.rootPath + "Users/Components/UserCreateOrUpdate.cshtml?v=" + window.App.version,
            controller: UserAddOrEditController
        });
})();