adminForm.addEventListener("submit", event => {
  event.preventDefault();

  const email = document.querySelector("#admin-email").value;

  const addAdminRole = func.httpsCallable("addAdminRole");
  addAdminRole({ email })
    .then(console.log)
    .catch(console.log);
});
