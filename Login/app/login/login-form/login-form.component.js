(function () {
    function LoginFormController() {
        var ctrl = this;
        ctrl.$onInit = function () {
            ctrl.login = login;
        }

        function login() {
            if (ctrl.user) {
                ctrl.onLoginItem({ loginFormObj: angular.copy(ctrl.user) });
            }
        }
    }

    var loginFormComponent = {
        bindings: {
            onLoginItem: '&',
            message: '<'
        },
        controller: LoginFormController,
        templateUrl: 'app/login/login-form/login-form.component.html'
    };

    angular.module('loginForm')
        .component('loginForm', loginFormComponent);

})();