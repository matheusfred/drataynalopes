moduleApp.factory('storeFactory', function() {
	const firestore = firebase.firestore();
    const settings = {timestampsInSnapshots: true};

    firestore.settings(settings);    
  
    return {
        loadStoreList: function(returnData, store){
            firestore.collection("itens").where("category", "==", store).get().then(function(querySnapshot) {
                var data = querySnapshot.docs.map(function (documentSnapshot) {
                return documentSnapshot.data();
            });

            return returnData(data);
            });     
        },
        loadModelo: function(returnData, modelo){
            firestore.collection("itens").where("modelo", "==", modelo).get().then(function(querySnapshot) {
                var data = querySnapshot.docs.map(function (documentSnapshot) {
                return documentSnapshot.data();
            });

            return returnData(data);
            });     
        },
        poitLoader: function(returnData, store, modelo){
            firestore.collection("itens").where("category", "==", store).where("modelo", "==", modelo).get().then(function(querySnapshot) {
                var data = querySnapshot.docs.map(function (documentSnapshot) {
                return documentSnapshot.data();
            });

            return returnData(data);
            });     
        }      
    }
});    