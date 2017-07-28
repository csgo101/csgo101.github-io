function gissa () {
	var  gissning = document.getElementbyid("gissning").value;

	if (gissning == "") {
		resultatElement.innerHTML = "";
		resultatElement.style.color = ""
	} else {
		resultatElement.innerHTML = "";
		resultatElement.style.color = ""
	}


}

var config = {
    apiKey: "AIzaSyA1ZhHF1Sv7SrBY3RAv-mRj6qu4AQVKrwA",
    authDomain: "skylox-79816.firebaseapp.com",
    databaseURL: "https://skylox-79816.firebaseio.com",
    projectId: "skylox-79816",
    storageBucket: "skylox-79816.appspot.com",
    messagingSenderId: "348758685377"
  };
  firebase.initializeApp(config);

 var app = angular.module("app", ["firebase"]);

 app.factory("kommentarer", function($firebaseArray) {
	var ref = firebase.database().ref().child("kommentarer").child(kommentarsfalt);
	return $firebaseArray(ref);
 });

 app.controller("KommentarCtrl", function($scope, kommentarer) {
    $scope.kommentarer = kommentarer;

    // Definera en kommentar med tom text och skribent
    $scope.kommentar = { 
        text: "",
        skribent: ""
    };

    $scope.addComment = function(){
    	   $scope.kommentarer.$add($scope.kommentar);
    	   $scope.kommentar = { 
           text: "",
           skribent: ""
       };
    }
 });









