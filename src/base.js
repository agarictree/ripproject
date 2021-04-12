let openrequest = indexedDB.open("imagesdata", 1);
openrequest.onupgradeneeded = function (params) {
    let db = openrequest.result;
    if (!db.objectStoreNames.contains('images')) { 
        db.createObjectStore('images', {keyPath: 'id'}); 
    }
}
export default openrequest;