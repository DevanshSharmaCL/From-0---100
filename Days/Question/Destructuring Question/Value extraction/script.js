let user = {
  name: "Cyber",
  address: {
    city: "Delhi",
    pincode: 110001
  }
};

let {address{city,pincode}} = user

console.log(address.city,address.pincode)