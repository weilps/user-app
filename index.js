// https://randomuser.me/api/?results=24
let userData = [];

const fetchUser = async () => {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => (userData = data.results));

  console.log(userData);
};

const userDisplay = async () => {
  await fetchUser();

  document.body.innerHTML = userData
    .map(
      (user) => `
        <div class="card">
            <img src=${user.picture.large} alt="photo de ${user.name.last}">
            <h3>${user.name.first}</h3>
        </div>
  `
    )
    .join("");
};

userDisplay();
