(function () {

    LoginController.$inject = ['loginService'];

    function LoginController(loginService) {
        var ctrl = this;

        ctrl.$onInit = function () {
            ctrl.loginTo = loginTo;
            ctrl.users = angular.copy(loginService.get());
        }

        function loginTo(user) {
            for (var userIndex = 0; userIndex < ctrl.users.length; userIndex++) {
                if (ctrl.users[userIndex].username == user.username && ctrl.users[userIndex].password == user.password) {
                    ctrl.status = "You have successfully logged in.";
                } else {
                    ctrl.status = "Invalid username or password..Please try again";
                }
            }
        }
    }

    var loginComponent = {
        bindings: {
            status: '&'
        },
        controller: LoginController,
        templateUrl: 'app/login/login.component.html'
    };

    angular.module('login')
        .component('login', loginComponent);

})();