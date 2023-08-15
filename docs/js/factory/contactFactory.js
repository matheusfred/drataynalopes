moduleApp.factory('contactFactory', function() {
	const firestore = firebase.firestore();
    const settings = {timestampsInSnapshots: true};

    firestore.settings(settings);    
  
    return {
        createScrap: function(value,onSucess){
            firestore.collection('scraptmsg').add({
                email: value.email,
                descripition: value.description
            })
            return onSucess();
        }    
    }; 
}); 