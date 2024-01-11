if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./serviceWorker.js").then(
      (registration) =>
        console.log(
          "Success ServiceWorker registration with scope: ",
          registration.scope
        ),
      (err) => console.error("Failed ServiceWorker registration:", err)
    );
  });
}
