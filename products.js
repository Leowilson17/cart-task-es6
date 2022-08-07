"usestrict";
var hostels = [
  {
    id: 1,
    name: "Zolo Dune",
    location: "Chennai",
    food_availability: "Yes"
  },
  {
    id: 2,
    name: "Erbil House",
    location: "Guduvanchery",
    food_availability: "No"
  },
  {
    id: 3,
    name: "Fun PG",
    location: "Vandalur",
    food_availability: "Yes"
  },
  {
    id: 4,
    name: "Sai Atcharaa Boys Hostel",
    location: "Chennai",
    food_availability: "Yes"
  },
  {
    id: 5,
    name: "Sai Atcharaa Boys Hostel",
    location: "Guindy",
    food_availability: "No"
  },
  {
    id: 6,
    name: "Zolo Belford",
    location: "Velachery",
    food_availability: "Yes"
  },
  {
    id: 7,
    name: "Sai Atcharaa Boys Hostel",
    location: "Guindy",
    food_availability: "No"
  },
  {
    id: 8,
    name: "Pudur Lucky Hostel",
    location: "Chepak",
    food_availability: "Yes"
  },
  {
    id: 9,
    name: "Royal Comfor Mansion",
    location: "Vadapalani",
    food_availability: "No"
  },
  {
    id: 10,
    name: "SR Boys Hostel",
    location: "Kattankulathur",
    food_availability: "Yes"
  }
];

// add to cart btn
var empty = [];
var addBtn = document.getElementById("add-btn");
var userData = document.getElementById("input");
addBtn.addEventListener("click", () => {
  let number = userData.value;
  hostels.map(data => {
    if (data.id == number) {
      if (!empty.includes(data)) {
        data.qty = 1;
        return empty.push(data);
      } else {
        data.qty++;
      }
    }
  });
  userData.value = "";
});

// cart item remove btn
var removeBtn = document.getElementById("remove-btn");
removeBtn.addEventListener("click", () => {
  let userNumber2 = userData.value;
  let checkId = false;
  empty.find(erase => {
    if (erase.id == userNumber2) {
      checkId = true;
      erase.qty = 0;
    }
  });
  if (checkId == false) {
    alert("Please Choose Valid ID");
  }
  userData.value = "";
});

// view cart btn
var viewBtn = document.getElementById("cart-btn");
viewBtn.addEventListener("click", () => {
  console.log(empty);
});
