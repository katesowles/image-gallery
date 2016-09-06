configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function configRoutes($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('landing', {
      url: '/',
      views: {
        header: {
          templateUrl: '../app/src/components/main-nav/main-nav.html',
          controller: function () {
            this.styles = '../app/src/components/main-nav/main-nav.scss';
          }
        },
        main: {
          templateUrl: '../app/src/components/landing/landing.html',
          controller: function () {
            this.styles = '../app/src/components/landing/landing.scss';
          }
        }
      }
    })

    .state('show-albums', {
      url: '/albums',
      views: {
        header: {
          templateUrl: '../app/src/components/main-nav/main-nav.html',
          controller: function () {
            this.styles = '../app/src/components/main-nav/main-nav.scss';
          }
        },
        main: {
          templateUrl: '../app/src/components/show-albums/show-albums.html',
          controller: function () {
            this.styles = '../app/src/components/show-albums/show-albums.scss';
          }
        }
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
        header: {
          templateUrl: '../app/src/components/main-nav/main-nav.html',
          controller: function () {
            this.styles = '../app/src/components/main-nav/main-nav.scss';
          }
        },
        main: {
          templateUrl: '../app/src/components/specific-album/specific-album.html',
          controller: function () {
            this.styles = '../app/src/components/specific-album/specific-album.scss';
          }
        }
      }
    });

  // default view if any other URL used
  $urlRouterProvider.otherwise('/');
}
