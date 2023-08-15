/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('configCtrl', function($scope, dashboardFactory, cfpLoadingBar){   

	$scope.loadPromo = function(){
		cfpLoadingBar.start();
		dashboardFactory.loadPromo(returnData);

		function returnData(data){
			$scope.promo = data;
			cfpLoadingBar.complete();
		};
	}; $scope.loadPromo();

});  