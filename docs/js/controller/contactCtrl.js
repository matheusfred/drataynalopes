/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('contactCtrl', function($scope, cfpLoadingBar, contactFactory){
    
    $scope.createScrap = function(value){
        cfpLoadingBar.start();
        contactFactory.createScrap(value, onSucess);

        function onSucess(){
			var div = document.getElementById("sucess_msg");
			div.classList.add("sucess_msg");
			window.setTimeout(function() {div.classList.remove("sucess_msg");}, 3000);
        };
        
		cfpLoadingBar.complete();
    };

});  