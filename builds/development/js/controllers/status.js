myApp.controller('StatusController', function(
  $scope, $rootScope,
  $location, $firebase, $firebaseAuth, FIREBASE_URL) {

  var ref = new Firebase(FIREBASE_URL);
  var auth = $firebaseAuth(ref);

  auth.$onAuth(function(authUser) {
    if (authUser) {

      var ref = new Firebase(FIREBASE_URL + '/users/' + authUser.uid);
      var user = $firebase(ref).$asObject();

      $rootScope.currentUser = user;

    } else {
      $rootScope.currentUser = null;
    }
  }); // Check user status 

}); //StatusController


/*

  $scope.logout = function() {
    Authentication.logout();
    $location.path('/login');
  }; //logout

  $rootScope.$onAuth(function(authUser) {
    var ref = new Firebase(FIREBASE_URL + '/users/' + authUser.uid);
    var user = $firebase(ref).$asObject();

    user.$loaded().then(function() {
      $rootScope.currentUser = user;
    });
  }); //login

  $rootScope.$on('logout', function(e, authUser) {
    $rootScope.currentUser = null;
  }); //login

*/
