if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then(function (registration) {
      console.log("Service Worker registrerad med scope:", registration.scope);
    })
    .catch(function (error) {
      console.log("Service Worker-registrering misslyckades:", error);
    });
}
