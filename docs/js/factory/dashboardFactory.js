moduleApp.factory('dashboardFactory', function() {
	const firestore = firebase.firestore();
    const settings = {timestampsInSnapshots: true};

    firestore.settings(settings);    
  
    return {
        create: function(value,editid,onSucess){
            firestore.collection('itens').add({
                editid: editid,
                name: value.name,
                desc: value.desc,
                nameen: value.nameen,
                descen: value.descen,
                valor: value.valor,
                value: value.value,
                modelo: value.modelo,
                po: value.po,
                fabricante: value.fabricante,
                status: value.status,
                category: value.category,
                image: value.image,
                promo: value.promo
            })
            return onSucess();
        },  

        load: function(returnData){
            firestore.collection("itens").get().then(function(querySnapshot) {
                var data = querySnapshot.docs.map(function (documentSnapshot) {
                return documentSnapshot.data();
            });

            return returnData(data);
            });     
        }, 

        loadScrap: function(callData){
            firestore.collection("scraptmsg").get().then(function(querySnapshot) {
                var data = querySnapshot.docs.map(function (documentSnapshot) {
                return documentSnapshot.data();
            });

            return callData(data);
            });     
        },
  
        loadPromo: function(callData){
            firestore.collection("itens").where("promo", "==", "true").get().then(function(querySnapshot) {
                var data = querySnapshot.docs.map(function (documentSnapshot) {
                return documentSnapshot.data();
            });

            return callData(data);
            });     
        }       

    }
});    