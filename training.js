// window.onload=function () {
//     let count=0;
//     let message="You click on button ";
//     let mes=document.getElementById("message");
//
//     let button=document.getElementById("clickMe");
//     button.onclick=function () {
//         count++;
//         mes.innerHTML=message+count+" times!";
//     }
// }

//---------------------------------------------------------------------------------------------

// function Dog(name, breed, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
// }
// let fido = new Dog("Fido", "Mixed", 38);
// let fluffy = new Dog("Fluffy", "Poodle", 30);
// let spot = new Dog("Spot", "Chihuahua", 10);
// let dogs = [fido, fluffy, spot];
// for (let i = 0; i < dogs.length; i++) {
//     let size = "small";
//     if (dogs[i].weight > 10) {
//         size = "large";
//     }
//     console.log("Dog: " + dogs[i].name
//         + " is a " + size
//         + " " + dogs[i].breed);
// }

//--------------------------------------------------------------------------------------------

// function Drinks(roast, ounces) {
//     this.roast = roast;
//     this.ounces = ounces;
//     this.getSize = function () {
//         if (this.ounces === 8) {
//             return "small";
//         } else if (this.ounces === 12) {
//             return "medium";
//         } else if (this.ounces === 16) {
//             return "large";
//         }
//     };
//     this.toString = function () {
//         alert("You’ve ordered a " + this.getSize() + " " + this.roast + " coffee.")
//     };
// }
//
// let small = new Drinks("House blend", 8);
// let medium = new Drinks("Cappuccino", 12);
// let large = new Drinks("Espresso", 16);
// let coffee = [small, medium, large];
// for (let i = 0; i < coffee.length; i++) {
//     coffee[i].toString();
// }

//---------------------------------------------------------------------------------------------

// function Car(make, model, year, color, passengers, convertible, mileage) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.passengers = passengers;
//     this.convertible = convertible;
//     this.mileage = mileage;
//     this.started = false;
//     this.start = function () {
//         this.started = true;
//     };
//     this.stop = function () {
//         this.started = false;
//     };
//     this.drive = function () {
//         if (this.started) {
//             console.log(this.make + " " +
//                 this.model + " goes zoom zoom!");
//         } else {
//             console.log("Start the engine first.");
//         }
//     };
// }
// let chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
// let cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
// let taxi = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341);
// let fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);
//
// let testCar = new Car("Webville Motors", "Test Car", 2014, "marine", 2, true, 21);
// let cars = [chevy, cadi, taxi, fiat, testCar];
// for(let i=0;i<cars.length;i++){
//     cars[i].start();
//     cars[i].drive();
//     cars[i].stop();
// }

// -----------------------------------------------------------------------------------------------------

// let cadiParam = {
//     make: "GM",
//     model: "Cadillac",
//     year: 1955,
//     color: "tan",
//     passengers: 5,
//     convertible: false,
//     mileage: 12852
// };
//
// let cadi = new Car(cadiParam);
//
// function Car(params) {
//     this.make = params.make;
//     this.model = params.model;
//     this.year = params.year;
//     this.color = params.color;
//     this.passengers = params.passengers;
//     this.convertible = params.convertible;
//     this.mileage = params.mileage;
//     this.started = false;
//     this.start = function () {
//         this.started = true;
//     };
//     this.stop = function () {
//         this.started = false;
//     };
//     this.drive = function () {
//         if (this.started) {
//             console.log(this.make + " " +
//                 this.model + " goes zoom zoom!");
//         } else {
//             console.log("Start the engine first.");
//         }
//     };
// }
// function Dog(name, breed, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
//     this.bark = function() {
//         if (this.weight > 25) {
//             alert(this.name + " says Woof!");
//         } else {
//             alert(this.name + " says Yip!");
//         }
//     };
// }
// let limoParams = {make: "Webville Motors",
//     model: "limo",
//     year: 1983,
//     color: "black",
//     passengers: 12,
//     convertible: true,
//     mileage: 21120};
// let limo = new Car(limoParams);
// let limoDog = new Dog("Rhapsody In Blue", "Poodle", 40);
// console.log(limo.make + " " + limo.model + " is a " + typeof limo);
// console.log(limoDog.name + " is a " + typeof limoDog);

// ------------------------------------------------------------------------------------------------------

// function dogCatcher(obj) {
//     if (obj instanceof Dog) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// function Cat(name, breed, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
// }
//
// let meow = new Cat("Meow", "Siamese", 10);
// let whiskers = new Cat("Whiskers", "Mixed", 12);
// let fido = {name: "Fido", breed: "Mixed", weight: 38};
//
// function Dog(name, breed, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
//     this.bark = function () {
//         if (this.weight > 25) {
//             alert(this.name + " says Woof!");
//         } else {
//             alert(this.name + " says Yip!");
//         }
//     };
// }
//
// let fluffy = new Dog("Fluffy", "Poodle", 30);
// let spot = new Dog("Spot", "Chihuahua", 10);
// let dogs = [meow, whiskers, fido, fluffy, spot];
// for (let i = 0; i < dogs.length; i++) {
//     if (dogCatcher(dogs[i])) {
//         console.log(dogs[i].name + " is a dog!");
//     }
// }
// let now=new Date();
// console.log(now);

//--------------------------------------------------------------------------------------------

function carOfMyDream() {
    this.make = "Webville Motors";
    this.year=2020;
    this.started = false;
    this.start = function () {
        this.started = true;
    };
    this.stop = function () {
        this.started = false;
    };
    this.drive = function () {
        if (this.started) {
            console.log(this.make + " " +
                this.model + " goes zoom zoom!");
        } else {
            console.log("Start the engine first.");
        }
    };
}
let taxi=new carOfMyDream();
taxi.model="Bullet";
taxi.upDoor=true;
taxi.streamlinedForm=true;
taxi.diameterWheels=20;