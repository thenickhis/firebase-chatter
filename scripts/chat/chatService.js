(function() {
    angular
        .module('firebaseChat')
        .service('chatService', function() {

        	var messageRef = firebase.database().ref('messages');

        	this.sendNewMessage = function(message) {
        		var updates = {};

        		var newKey = firebase.database().ref().child('messages').push().key;

        		updates['/messages/'+newKey] = message; 

        		return firebase.database().ref().update(updates);
        	};

        	messageRef.on('child_added', function(data){
        		var key = data.key,
        			text = data.val().text,
        			user = data.val().user
        	});

        }); // end service

})();