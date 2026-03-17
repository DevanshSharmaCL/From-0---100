let users = [
  "nova.stream42@gmail.com",
  "pixel.shadow17@yahoo.com",
  "cyberleaf88@outlook.com",
  "lunar.byte29@gmail.com",
  "echo.vector61@protonmail.com",
];

function sendEmail(email) {
  return new Promise((resolve, reject) => {
    let time = Math.floor(Math.random() * 5);

    setTimeout(() => {
      let probability = Math.floor(Math.random() * 10);
      if (probability > 5) resolve(console.log("email sent succesfully", probability));
      else reject(console.log("email failed", probability));
    }, time * 1000);
    console.log(time)
  });
}

// now settimout can do 2 things from inside , agar resolve chala toh uska then state chalega , agar reject chala toh uska catch state chalega


sendEmail("cyberlight@101")
// now agar resolve chala toh then state chalega
.then(function(data){
    console.log(data)
})
.catch(function(err){
    console.log(err)
})