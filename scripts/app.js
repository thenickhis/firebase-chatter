(function() {
    angular
        .module('firebaseChat', [
            'ui.router'
        ])
        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('login', {
                    url: '/',
                    templateUrl: 'scripts/login/login.html',
                    controller: 'LoginCtrl'
                })
                .state('chat', {
                    url: '/feed',
                    templateUrl: 'scripts/chat/chat.html',
                    controller: 'ChatCtrl'
                })
        });
    
})();