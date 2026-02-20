(function () {
  const node = document.getElementById("updated-time");
  if (!node) return;

  function updateClock() {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    node.textContent = `Updated ${hh}:${mm} Prague Time`;
  }

  updateClock();
  setInterval(updateClock, 60000);
})();
