createForm.addEventListener("submit", async event => {
  event.preventDefault();
  await db.collection("quotes").add({
    author: createForm["author"].value,
    message: createForm["message"].value
  });

  const modal = document.querySelector("#modal-create");
  M.Modal.getInstance(modal).close();
  createForm.reset();
});
