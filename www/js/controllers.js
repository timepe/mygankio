angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, $window) {
  /*
  $http.get('http://gank.io/api/data/福利/10/1')
    .then(function (response) {
        $scope.res = response.data;
        console.log($scope.res);
        $scope.width = $window.screen.width;
        console.log($scope.width);
    });
  */
  $scope.categories = [
    '福利',
    'IOS',
    'Android',
    '前端',
    '扩展资源',
    '休息视频'
  ];

  var curpage = 1;
  var defaultCount = 5;
  function showContent(category, count, page){
    var url = 'http://gank.io/api/data/' + category + '/'
              + count + '/' + page;
    console.log(url);
    $http.get(url).then(function (response) {
      $scope.res = response.data;
      $scope.width = $window.screen.width;
    });
  }

  $scope.showContentByCategory = function(category){
    return showContent(category, defaultCount, 1);
  };

  $scope.nextPage = function(category){
    return showContent(category, defaultCount, ++curpage);
  }

  $scope.prevPage = function (category) {
    if(curpage <= 1) return;
    return showContent(category, defaultCount, --curpage);
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
