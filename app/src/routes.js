configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function configRoutes($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('landing', {
      url: '/',
      views: {
        header: { component: 'mainNav' },
        main: { component: 'landing' },
      },
    })

    .state('show-albums', {
      url: '/albums',
      views: {
        header: { component: 'mainNav' },
        main: { component: 'showAlbums' },
      },
    })

    .state('specific-album', {
      url: 'album/:albumId?display',
      params: {display: {dynamic: true}},
      resolve: {
        albumId: ['$stateParams', params => params.albumId],
        display: ['$stateParams', params => params.display || 'text']
      },
      views: {
        header: { component: 'mainNav' },
        main: { component: 'specificAlbum' },
      },
    });

  // default view if any other URL used
  $urlRouterProvider.otherwise('/');
}
