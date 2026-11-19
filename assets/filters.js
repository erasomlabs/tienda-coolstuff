(() => {
  const buttons = document.querySelectorAll(".filters button");
  const cards = Array.from(document.querySelectorAll("#product-grid .plate"));
  const empty = document.getElementById("empty-state");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      let visible = 0;

      buttons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      cards.forEach((card) => {
        const show = filter === "todo" || card.dataset.category === filter;
        card.hidden = !show;
        if (show) visible += 1;
      });
      empty.style.display = visible === 0 ? "block" : "none";
    });
  });
})();
