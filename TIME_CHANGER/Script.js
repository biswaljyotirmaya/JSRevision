const watch = document.querySelector(".innerDiv");

setInterval(() => {
  const time = new Date().toLocaleTimeString();
  watch.innerHTML = time;
}, 1000);
