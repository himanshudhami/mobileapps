angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Himanshu Dhami',img:'img/INEMP1415.jpeg',address:'Sr.Arctitech, Emids Technology Bangalore' },
    { id: 1, name: 'Veerabhadra sajjan',img:'img/INEMP1514.jpeg' ,address:'Software Engg, Emids Technology Bangalore'},
    { id: 2, name: 'Nagendra D',img:'img/INEMP1629.jpeg' ,address:'Tech Lead, Emids Technology Bangalore'},
    { id: 3, name: 'Amit v' ,img:'img/INEMP1498.jpeg',address:'Software Engg, Emids Technology Bangalore'},
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
