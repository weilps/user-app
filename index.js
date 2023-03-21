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

  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("en-AU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return newDate;
  };

  const dayCalc = (date) => {
    let today = new Date();
    let todayTimeStamp = Date.parse(today);
    let timeStamp = Date.parse(date);
    return Math.ceil((todayTimeStamp - timeStamp) / 8.64e7);
  };

  document.body.innerHTML = userData
    .map(
      (user) => `
        <div class="card">
            <img src=${user.picture.large} alt="photo of ${user.name.last}">
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>${user.location.city}, ${dateParser(user.dob.date)}</p>
            <em>Member since : ${dayCalc(user.registered.date)} days</em>
        </div>
  `
    )
    .join("");
};

userDisplay();
