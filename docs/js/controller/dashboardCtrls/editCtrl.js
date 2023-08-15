/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('editCtrl', function($stateParams, $scope, $state, editFactory, cfpLoadingBar){   
    $scope.value = $stateParams.item;
    
    $scope.updateItems = function(value){
		cfpLoadingBar.start();

		editFactory.updateItem(value,onSucess);

		function onSucess(){
			var div = document.getElementById("sucess_msg");
			div.classList.add("sucess_msg");
			$state.go('dashboard.list');
			window.setTimeout(function() {div.classList.remove("sucess_msg");}, 3000);
		};
		cfpLoadingBar.complete();
    };
    
    $scope.deleteItem = function(value){
		cfpLoadingBar.start();

		editFactory.deleteItem(value,onSucess);

		function onSucess(){
			var div = document.getElementById("sucess_msg");
			div.classList.add("sucess_msg");
			$state.go('dashboard.list');
			window.setTimeout(function() {div.classList.remove("sucess_msg");}, 3000);
		};
		cfpLoadingBar.complete();
	};    
});  