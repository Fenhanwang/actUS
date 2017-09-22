angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.findActivityAround', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/findActivityAround.html',
        controller: 'findActivityAroundCtrl'
      }
    }
  })

  .state('tabsController.createNewActivity', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/createNewActivity.html',
        controller: 'createNewActivityCtrl'
      }
    }
  })

  .state('showProfile', {
    url: '/page9',
    templateUrl: 'templates/showProfile.html',
    controller: 'showProfileCtrl'
  })

  .state('tabsController.myActivityList', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/myActivityList.html',
        controller: 'myActivityListCtrl'
      }
    }
  })

  .state('tabsController.activityDetail', {
    url: '/page10',
    views: {
      'tab3': {
        templateUrl: 'templates/activityDetail.html',
        controller: 'activityDetailCtrl'
      }
    }
  })

  .state('tabsController.activityMemberDetail', {
    url: '/page13',
    views: {
      'tab3': {
        templateUrl: 'templates/activityMemberDetail.html',
        controller: 'activityMemberDetailCtrl'
      }
    }
  })

  .state('eventMates', {
    url: '/page11',
    templateUrl: 'templates/eventMates.html',
    controller: 'eventMatesCtrl'
  })

  .state('tabsController.letUsChat', {
    url: '/page14',
    views: {
      'tab3': {
        templateUrl: 'templates/letUsChat.html',
        controller: 'letUsChatCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page2')


});