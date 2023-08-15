/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('adminCtrl', function($scope, $state){	
	var correctPath = null;

	$scope.logarAdmin = function(){
		var email = $scope.emailAuth;
		var senha = $scope.senhaAuth;

		firebase.auth().signInWithEmailAndPassword(email, senha).catch(function(error){
			//Variavéis p/ erros.
			var errorCode = error.code;
			var errorMessage = error.message;
			//StartExclude
			if(errorCode === 'auth/wrong-password'){
				$state.go('admin');
			} else { $state.go('admin'); }
			console.log(error);
		});

		$scope.authControl();
	};

	$scope.authControl = function(){
		firebase.auth().onAuthStateChanged(function(user) {
			$state.go('dashboard', { obj: {correctPath: true} });	
		});
	};
});