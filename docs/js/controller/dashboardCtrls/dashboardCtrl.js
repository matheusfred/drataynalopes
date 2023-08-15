/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('dashboardCtrl', function(dashboardFactory, $scope, $state, $stateParams, cfpLoadingBar){	
	checkPath();

	function checkPath(){
		if($stateParams.obj != null){}			
		else $state.go('admin');	
	};
	
	$scope.$state = $state;

	$scope.loadItems = function(){
		cfpLoadingBar.start();
		dashboardFactory.load(returnData);

		function returnData(data){
			$scope.contents = data;
			cfpLoadingBar.complete();
		};
	};	

	$scope.loadScraps = function(){
		cfpLoadingBar.start();
		dashboardFactory.loadScrap(returnData);

		function returnData(data){
			$scope.scraps = data;
			cfpLoadingBar.complete();
		};
	};

	$scope.createItems = function(value){
		cfpLoadingBar.start();

		var editid = Math.floor(Math.random() *10000000);

		dashboardFactory.create(value,editid,onSucess);

		function onSucess(){
			var div = document.getElementById("sucess_msg");
			div.classList.add("sucess_msg");
			$state.go('dashboard.list');
			window.setTimeout(function() {div.classList.remove("sucess_msg");}, 3000);
		};
		cfpLoadingBar.complete();
	};
});
