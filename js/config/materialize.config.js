document.addEventListener("DOMContentLoaded", () => {
  const modals = document.querySelectorAll(".modal");
  debugger;
  M.Modal.init(modals);

  const items = document.querySelectorAll(".collapsible");
  M.Collapsible.init(items);
});
