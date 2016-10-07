(function () {
    "use strict";

    UserListController.$inject = ["userService", "$routeParams", "viewModelHelper"];

    function UserListController(userService, $routeParams, viewModelHelper) {

        var self = this;

        self.$onInit = function () {
            loadUsers();
        }

        self.$onDestroy = function () {
        }

        self.edit = function (userId) {
            userService.navigateToUser(userId);
        };

        self.add = function () {
            userService.navigateToUser(0);
        }

        function loadUsers() {
            viewModelHelper.apiGet("Api/Users",
                null,
                function (result) {
                    self.users = result.data;
                });
        }
    }

    angular
        .module("users")
        .component("userList", {
            templateUrl: window.App.rootPath + "Users/Components/UserList.cshtml?v=" + window.App.version,
            controller: UserListController
        });
})();