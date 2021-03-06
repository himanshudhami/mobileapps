angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$ionicLoading) {

function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(43.07493,-89.381388),
          zoom: 11,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);

        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener(document.getElementById('map'), 'mousedown', function(e) {
          e.preventDefault();
          return false;
        });

        $scope.map = map;
      }
      google.maps.event.addDomListener(window, 'load', initialize);
      
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };

})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})


.controller('LoginCtrl', function($scope, $firebaseSimpleLogin, $location) {
  $scope.loginData = {};

  var dataRef = new Firebase("https://ionic-firebase-login.firebaseio.com/");
  $scope.loginObj = $firebaseSimpleLogin(dataRef);
  
  $scope.login = function() {
    if($scope.loginData.email=='test@gmail.com' && $scope.loginData.password=='Test123')
    {
      $location.url('/tab/dash');
    }
    else
    {
      console.log('Unable to login');
    }
  };

  $scope.tryLogin = function() {
    $scope.loginObj.$login('facebook').then(function(user) {
      // The root scope event will trigger and navigate
      console.log(user);
      $location.url('/tab/dash');
    }, function(error) {
      // Show a form error here
      console.error('Unable to login', error);
    });
  };
})

.controller('SignupCtrl', function($scope) {
});
