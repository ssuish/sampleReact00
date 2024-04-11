// function declaration
function myFunc(theObject) {
    theObject.make = "Toyota"; // This changes the value of the make property
  }
  
  const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };
  
  console.log(mycar.make); // "Honda"
  myFunc(mycar);
  console.log(mycar.make); // "Toyota"

// function expression
// - can be anonymous