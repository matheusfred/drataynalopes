/* ****************************************************** */
/*
/* Routes aplication config.
/* 
/* Utilizado diretiva uiRouter do AngularJs.     
/*   
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.config(function($stateProvider) {
  $stateProvider
    // SIMPLE PAGS 
    .state('home', {
      url: '/home',
      templateUrl: 'pags/home.html'
    })      

    .state('contact', {
      url: '/contact',
      controller: 'contactCtrl',
      templateUrl: 'pags/contact.html'
    })
    .state('custom', {
      url: '/custom',
      templateUrl: 'pags/custom.html'
    })      

    // STORE
    .state('store', {
      url: '/store',
      templateUrl: 'pags/home.html'
    })      
    .state('store.modelo', {
      url: '/:modeloID',
      controller: 'storeCtrl',
      templateUrl: 'pags/subpage/itemList.html'
    })
    .state('store.listPointer', {
      url: '/:modeloID/:listID',
      controller: 'storeCtrl',
      templateUrl: 'pags/subpage/itemList.html'
    })        
    .state('store.list', {
      url : '/:listID',
      controller: 'storeCtrl',
      templateUrl: 'pags/subpage/itemList.html'
    })
    .state('store.item', {
      url : '/{itemID}',
      params : {
        item : null  
      },
      controller: 'itemDetailCtrl',
      templateUrl: 'pags/subpage/item.html'
    })  

    // ADMINISTRATION AREA
    .state('admin', {
      url: "/admin",
      templateUrl: 'pags/admin.html',
      controller: 'adminCtrl'
    })  
    .state('dashboard', {
      url: "admin/cms",
      templateUrl: 'pags/subpage/dashboard.html',
      controller: 'dashboardCtrl',
      params: {
        obj: null
      }
    })
    .state('dashboard.new', {
      url: '/new',
      templateUrl: 'pags/subpage/dashboard/addform.html',
      controller: 'dashboardCtrl'
    })
    .state('dashboard.edit', {
      url: '/edit',
      templateUrl: 'pags/subpage/dashboard/addform.html',
      params: {
        item: null
      },
      controller: 'editCtrl'
    })      
    .state('dashboard.list', {
      url: '/list',
      templateUrl: 'pags/subpage/dashboard/list.html',
      controller: 'dashboardCtrl'
    })  
    .state('dashboard.scrap', {
      url: '/scrap',
      templateUrl: 'pags/subpage/dashboard/listScrap.html',
      controller: 'dashboardCtrl'
    })
    .state('dashboard.config', {
      url: '/config',
      templateUrl: 'pags/subpage/dashboard/config.html',
      controller: 'configCtrl'
    })                           
});