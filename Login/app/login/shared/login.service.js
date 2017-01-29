(function () {
    angular.module('login')
        .factory('loginService', loginService);

    function loginService() {
        var users = [{
            username: "navaneeth",
            password: "navi123"
        }];

        var service = {
            get: get
        };
        return service;

        function get() {
            return users;
        }

    }
})();