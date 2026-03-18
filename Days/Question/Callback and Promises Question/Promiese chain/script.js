function loginUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10);
      console.log("Random number:", num);

      if (num > 5) {
        console.log("Login successful");
        resolve("User logged in");
      } else {
        console.log("Login failed");
        reject("Access denied");
      }
    }, 1000);
  });
}

function getProfile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Profile loaded");
      resolve("Profile data");
    }, 1000);
  });
}

function getPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Posts loaded");
      resolve("Posts data");
    }, 1000);
  });
}


loginUser()
  .then(() => {
    return getProfile();   // only runs if login SUCCESS
  })
  .then(() => {
    return getPosts();     // only runs if profile SUCCESS
  })
  .then(() => {
    console.log("All done ✅");
  })
  .catch((err) => {
    console.log("Stopped:", err);
  });