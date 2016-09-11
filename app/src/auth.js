// import angular from 'angular';

auth.$inject= ['$rootScope', 'userService', '$state', '$scope'];

export default function auth($rootScope, userService, $state, $scope) {
  $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {
    if (toState.data && toState.data.requiresAuth && !userService.isAuthenticated()) {
      event.preventDefault();

      console.log('Authentication failed (src/auth.js)');

      $scope.success = function() {
        return $state.go(toState.name, toParams);
      };
    }
  });
}
