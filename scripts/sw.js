/*
    Unregister all service workers
*/

if('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
            registration.unregister()
    }}).catch(function(err) {
        console.log('Service Worker registration failed: ', err);
    });
}