configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function configRoutes($stateProvider, $urlRouterProvider){

  $stateProvider
    .state( 'welcome', {
      url: '/',
      views: {
        header: {
          component: 'appNav'
        },
        main: {
          component: 'welcome'
        }
      }
    })

    .state( 'list-albums', {
      url: '/albums',
      views: {
        header: {
          component: 'appNav'
        },
        main: {
          component: 'listAlbums'
        }
      }
    });

  $urlRouterProvider.otherwise( '/' );
}
