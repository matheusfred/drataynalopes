/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('storeCtrl', function(storeFactory, $stateParams, $scope, cfpLoadingBar, $state){     
    $scope.loadItens = function(){
        cfpLoadingBar.start();
        if($stateParams.listID != null & $stateParams.modeloID != null){
            storeFactory.poitLoader(returnData, $stateParams.listID, $stateParams.modeloID);
        } else {
            if($stateParams.listID === undefined & $stateParams.modeloID != null){
                storeFactory.loadModelo(returnData, $stateParams.modeloID);
            }
            else
                storeFactory.loadStoreList(returnData, $stateParams.listID);
        }    

        function returnData(data){
            $scope.contents = data;
            if($scope.contents.length === 0){
                $state.go('contact');
                var div = document.getElementById("error_msg");
                div.classList.add("error_msg");
                window.setTimeout(function() {div.classList.remove("error_msg");}, 1000);
            }
            cfpLoadingBar.complete();
        };      
    };
    $scope.loadItens();
    
});  