/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('indexCtrl', function($state, $scope, cfpLoadingBar, dashboardFactory){	
	cfpLoadingBar.start();

	//MENU STATE
	$scope.statusModelo = null;	
	$scope.$state = $state;
	$scope.isMobile = false;

	//CHANGE MODELO MENU
	$scope.changeStatus = function(newValue){
		$scope.statusModelo =  newValue;
	};

	//MOBILE DETECT
	$scope.detectMob = function() {	
		if (window.innerWidth <= 1024){
			$scope.isMobile = true;
		}
	}; $scope.detectMob();	

	//PROMOÇÕES
	$scope.loadPromo = function(){
		cfpLoadingBar.start();
		dashboardFactory.loadPromo(returnData);

		function returnData(data){
			$scope.promo = data;
			cfpLoadingBar.complete();
		};
	}; $scope.loadPromo();	
});  
