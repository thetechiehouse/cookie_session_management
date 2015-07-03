'use strict';

/* Controllers */
var app = angular.module('myapp.controllers', []);

app.controller('LoginCtrl', [ '$scope', function($scope) {

	$scope.logOut = function() {
		//alert("logOut!!!");
		$.removeCookie('myapp_token');
		//$("#myapp-navbar").hide();
		$("#appHome-navbar").hide();
		$location.path("/login/");

	};

	$scope.login = function() {
		var credentials = {
			userId : $scope.userId,
			token : this.token
		};
		var success = function(userId) {
			$.cookie('myapp_token', userId);

			$location.path('/');
		};

		var error = function() {
			// TODO: apply user notification here..
		};
		if (credentials.userId) {
			success($scope.userId);
		} else {
			alert('Please login with the name');
		}
	};

	var userLoggedIn = $.cookie('myapp_token');
	//alert(userLoggedIn);
	if (userLoggedIn) {
		$scope.loggedIn = "true";
		$("#myapp-navbar").show();
	} else {
		$location.path("/login/");
	}
} ]);
