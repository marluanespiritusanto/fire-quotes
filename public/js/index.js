async function setupUI(user) {
  if (user) {
    if (user.admin) {
      adminItems.forEach(el => (el.style.display = "block"));
    }
    const userCollection = (await db
      .collection("users")
      .doc(user.uid)
      .get()).data();

    const html = `
        <div><strong>Logged in as</strong> ${user.email}</div>
        <div><strong>Profile</strong> ${userCollection.bio}</div>
      `;

    accountDetails.innerHTML = html;
    loggedInMenu.forEach(menu => (menu.style.display = "block"));
    loggedOutMenu.forEach(menu => (menu.style.display = "none"));
  } else {
    quotesUl.innerHTML += "<h3 class='center-align'>Please, login to enjoy our quotes!</h3>";
    loggedInMenu.forEach(menu => (menu.style.display = "none"));
    loggedOutMenu.forEach(menu => (menu.style.display = "block"));
    adminItems.forEach(el => (el.style.display = "none"));
  }
}

async function setupQuotes(quotes) {
  let html = "";
  quotes.forEach(doc => {
    const quote = doc.data();
    const li = `
      <li>
        <div class="collapsible-header grey lighten-4">${quote.author}</div>
        <div class="collapsible-body white lighten-4">${quote.message}</div>
      </li>
    `;

    html += li;
  });

  quotesUl.innerHTML = html;
}
