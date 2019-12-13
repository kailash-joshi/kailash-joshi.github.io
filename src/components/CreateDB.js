const CreateDB = () => {
    let campaign = window.indexedDB.open('campaign', 1);

    //upcoming
    campaign.onsuccess = function(event) {
    // some sample list data
    let list = [];
    for(let i = 0; i <10; i++) {
        let obj = {};
        obj.id = i + 1;
        obj.name= "Test Whatsapp";
        obj.region= "US";
        obj.createdOn= 1662315912;
        obj.price= "Price info of Test Whatsapp";
        obj.csv= "Some CSV link for Whatsapp";
        obj.report= "Some report link for Whatsapp";
        obj.image_url="Some image url of the campaign";
        list.push(obj);
    }
   

    // get database from event
    var db = event.target.result;

    // create transaction from database
    var transactionUpcoming = db.transaction('upcomingList', 'readwrite');
    var transactionLive = db.transaction('liveList', 'readwrite');
    var transactionPast = db.transaction('pastList', 'readwrite');

    // add success event handleer for transaction
    // you should also add onerror, onabort event handlers
    transactionUpcoming.onsuccess = function(event) {
        console.log('[Transaction] ALL DONE!');
    };
    transactionLive.onsuccess = function(event) {
        console.log('[Transaction] ALL DONE!');
    };
    transactionPast.onsuccess = function(event) {
        console.log('[Transaction] ALL DONE!');
    };

    // get store from transaction
    var upcomingStore = transactionUpcoming.objectStore('upcomingList');
    var liveStore = transactionLive.objectStore('liveList');
    var pastStore = transactionPast.objectStore('pastList');

    /*************************************/

    // put list data in listStore
    list.forEach(function(listItem){
        var db_op_req = upcomingStore.add(listItem);

        db_op_req.onsuccess = function(event) {
            console.log(event.target.result == listItem.id); // true
        }
    });

    // count number of objects in store
    // listStore.count().onsuccess = function(event) {
    //     console.log('[Transaction - COUNT] number of list in store', event.target.result);
    // };

    // get listItem with id 1
    // listStore.get(1).onsuccess = function(event) {
    //     console.log('[Transaction - GET] listItem with id 1', event.target.result);
    // };

    // update listItem with id 1
    // list[0].name = 'Blue Men T-shirt';
    // listStore.put(list[0]).onsuccess = function(event) {
    //     console.log('[Transaction - PUT] listItem with id 1', event.target.result);
    // };

    // delete listItem with id 2
    // listStore.delete(2).onsuccess = function(event) {
    //     console.log('[Transaction - DELETE] deleted with id 2');
    // };
};

campaign.onerror = function(event) {
    console.log('[onerror]', campaign.error);
};

campaign.onupgradeneeded = function(event) {
    var db = event.target.result;
    var listStore = db.createObjectStore('upcomingList', {keyPath: 'id'});
};

}
export default CreateDB;