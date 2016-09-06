configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function configRoutes($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('landing', {
      url: '/',
      views: {
        main: { component : 'landing' },
      }
    })

    .state('show-albums', {
      url: '/albums',
      views: {
        main: { component: 'showAlbums' },
      }
    })

    .state('specific-album', {
      url: 'album/:albumId?display',
      params: {display: {dynamic: true}},
      resolve: {
        albumId: ['$stateParams', params => params.albumId],
        display: ['$stateParams', params => params.display || 'text']
      },
      views: {
        main: { component: 'showSpecific' },
      }
    });

  // default view if any other URL used
  $urlRouterProvider.otherwise('/');
}
