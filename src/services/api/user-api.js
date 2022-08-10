import axios from 'axios';

const userDetail = {
  id: 1,
  name: "Foo",
  job: "Noob developer",
  place: "Mars"
};

function loginUser(loginData) {
  axios.post(`/user`, loginData)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

function getUser(user) {
  console.log('.env', process.env.REACT_APP_NOT_SECRET_CODE);

  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (user === "foo") return resolve(userDetail);
      return reject("No such user");
    }, 2000)
  );
}

export default getUser;
