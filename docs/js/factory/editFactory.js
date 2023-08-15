moduleApp.factory('editFactory', function() {
	const firestore = firebase.firestore();
    const settings = {timestampsInSnapshots: true};

    firestore.settings(settings);    
  
    return {
        updateItem: function(value, onSucess){
            firestore.collection("itens").where("editid", "==", value.editid).get()
            .then(function(querySnapshot) {

                querySnapshot.forEach(function(doc) {
                    firestore.collection("itens").doc(doc.id).set({
                        editid: value.editid,
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
                    });
                });
                return onSucess();
            });            
        },

        deleteItem: function(value,onSucess){
            firestore.collection("itens").where("editid", "==", value.editid).get()
            .then(function(querySnapshot) {

                querySnapshot.forEach(function(doc) {
                    firestore.collection("itens").doc(doc.id).delete();
                });
                return onSucess();
            });                
        }
    }
});         