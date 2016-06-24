(function() {
    angular
        .module('firebaseChat')
        .controller('ChatCtrl', function($scope, chatService) {
            
        	var messageRef = firebase.database().ref('messages');

        	messageRef.on('value',function(snapshot){
        		$scope.messages = snapshot.val();
        		$scope.$apply();
        	});

            $scope.addNewMessage = function(messageObj) {
            	var message = messageObj;

            	chatService.sendNewMessage(message).then(function(response) {

            	});
            }
            
        }); // end ctrl

})();