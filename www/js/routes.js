angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page1', {
    url: '/page1',
    templateUrl: 'templates/page1.html',
    controller: 'page1Ctrl'
  })

  .state('page9', {
    url: '/page9',
    templateUrl: 'templates/page9.html',
    controller: 'page9Ctrl'
  })

  .state('page7', {
    url: '/page7',
    templateUrl: 'templates/page7.html',
    controller: 'page7Ctrl'
  })

  .state('page10', {
    url: '/page10',
    templateUrl: 'templates/page10.html',
    controller: 'page10Ctrl'
  })

  .state('page21', {
    url: '/page21',
    templateUrl: 'templates/page21.html',
    controller: 'page21Ctrl'
  })

  .state('page12', {
    url: '/page12',
    templateUrl: 'templates/page12.html',
    controller: 'page12Ctrl'
  })

  .state('page17', {
    url: '/page17',
    templateUrl: 'templates/page17.html',
    controller: 'page17Ctrl'
  })

  .state('page14', {
    url: '/page14',
    templateUrl: 'templates/page14.html',
    controller: 'page14Ctrl'
  })

  .state('page15', {
    url: '/page15',
    templateUrl: 'templates/page15.html',
    controller: 'page15Ctrl'
  })

  .state('page16', {
    url: '/page16',
    templateUrl: 'templates/page16.html',
    controller: 'page16Ctrl'
  })

  .state('page18', {
    url: '/page18',
    templateUrl: 'templates/page18.html',
    controller: 'page18Ctrl'
  })

  .state('page19', {
    url: '/page19',
    templateUrl: 'templates/page19.html',
    controller: 'page19Ctrl'
  })

  .state('page26', {
    url: '/page26',
    templateUrl: 'templates/page26.html',
    controller: 'page26Ctrl'
  })

  .state('page20', {
    url: '/page20',
    templateUrl: 'templates/page20.html',
    controller: 'page20Ctrl'
  })

  .state('page27', {
    url: '/page27',
    templateUrl: 'templates/page27.html',
    controller: 'page27Ctrl'
  })

  .state('page22', {
    url: '/page22',
    templateUrl: 'templates/page22.html',
    controller: 'page22Ctrl'
  })

  .state('page28', {
    url: '/page28',
    templateUrl: 'templates/page28.html',
    controller: 'page28Ctrl'
  })

  .state('page23', {
    url: '/page23',
    templateUrl: 'templates/page23.html',
    controller: 'page23Ctrl'
  })

  .state('page29', {
    url: '/page29',
    templateUrl: 'templates/page29.html',
    controller: 'page29Ctrl'
  })

  .state('page24', {
    url: '/page24',
    templateUrl: 'templates/page24.html',
    controller: 'page24Ctrl'
  })

  .state('page25', {
    url: '/page25',
    templateUrl: 'templates/page25.html',
    controller: 'page25Ctrl'
  })

$urlRouterProvider.otherwise('/page18')


});