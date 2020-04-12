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
//-----------------------PROTOTYPES
// function Dog(name, breed, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
// }
// Dog.prototype.species = "Canine";
// Dog.prototype.bark = function() {
//     if (this.weight > 25) {
//         console.log(this.name + " says Woof!");
//     } else {
//         console.log(this.name + " says Yip!");
//     }
// };
// Dog.prototype.run = function() {
//     console.log("Run!");
// };
// Dog.prototype.wag = function() {
//     console.log("Wag!");
// };
// let fido = new Dog("Fido", "Mixed", 38);
// let fluffy = new Dog("Fluffy", "Poodle", 30);
// let spot = new Dog("Spot", "Chihuahua", 10);
// fido.bark();
// fido.run();
// fido.wag();
// fluffy.bark();
// fluffy.run();
// fluffy.wag();
// spot.bark();
// spot.run();
// spot.wag();

//--------------------------------------------------------------------------------------------

// function СarOfMyDream() {
//     this.make = "Webville Motors";
//     this.year=2020;
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
// let taxi=new СarOfMyDream();
// taxi.model="Bullet";
// taxi.upDoor=true;
// taxi.streamlinedForm=true;
// taxi.diameterWheels=20;

//---------------------------------------------------------------------------------------------

// function Robot(name,year,owner) {
//     this.name=name;
//     this.year=year;
//     this.owner=owner;
// }
// Robot.prototype.maker="fabric";
// Robot.prototype.speak=function () {
//     console.log(this.name+" is Speaking");
// };
// Robot.prototype.makeCoffee=function () {
//     console.log(this.name+" make coffee for "+this.owner);
// };
// Robot.prototype.blinkLights=function () {
//     console.log(this.name+" blinks light 4 times");
// };
//
// let robby=new Robot("Robby",1999,"Mike");
// let rosie=new Robot("Rosie",1956,"Linda");
//
// robby.onOffSwitch=true;
// robby.makeCoffee=function () {
//     console.log(this.name+" brought coffee from Starbucks for "+this.owner);
// };
//
// rosie.cleanHouse=function () {
//     console.log(this.name+" is cleaning house");
// };
// console.log(robby.name + " was made by " + robby.maker +
//     " in " + robby.year + " and is owned by " + robby.owner);
// robby.makeCoffee();
// robby.blinkLights();
// console.log(rosie.name + " was made by " + rosie.maker +
//     " in " + rosie.year + " and is owned by " + rosie.owner);
// rosie.cleanHouse();

//----------------------------------------------------------------------------

// function Game() {
//     this.level = 0;
// }
// Game.prototype.play = function() {
// // Действия игрока
//     this.level++;
//     console.log("Welcome to level " + this.level);
//     this.unlock();
// };
// Game.prototype.unlock = function() {
//     if(this.level===42){
//         return " is blasting you with laser beams.";
//     }
// };
// function Robot(name, year, owner) {
//     this.name = name;
//     this.year = year;
//     this.owner = owner;
// }
// Robot.prototype.deployLaser=function(){
//   console.log(this.name+game.unlock()) ;
// };
// let game = new Game();
// let robby = new Robot("Robby", 1956, "Dr. Morbius");
// let rosie = new Robot("Rosie", 1962, "George Jetson");
// while (game.level < 42) {
//     game.play();
// };
// robby.deployLaser();
// rosie.deployLaser();

//----------------------------------------------------------------------------------------

// function Dog(name, breed, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
// }
//
// Dog.prototype.species = "Canine";
// Dog.prototype.bark = function () {
//     if (this.weight > 25) {
//         console.log(this.name + " says Woof!");
//     } else {
//         console.log(this.name + " says Yip!");
//     }
// };
// Dog.prototype.run = function () {
//     console.log("Run!");
// };
// Dog.prototype.wag = function () {
//     console.log("Wag!");
// };
//
// function ShowDog(name, breed, weight, handler) {
//     Dog.call(this, name, breed, weight);
//     this.handler = handler;
// }
//
// ShowDog.prototype = new Dog();//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// ShowDog.prototype.constructor = ShowDog;
// ShowDog.prototype.league = "Webville";
// ShowDog.prototype.stack = function () {
//     console.log("Stack");
// };
// ShowDog.prototype.bait = function () {
//     console.log("Bait");
// };
// ShowDog.prototype.gait = function (kind) {
//     console.log(kind + "ing");
// };
// ShowDog.prototype.groom = function () {
//     console.log("Groom");
// };
//
// let fido = new Dog("Fido", "Mixed", 38);
// let fluffy = new Dog("Fluffy", "Poodle", 30);
// let spot = new Dog("Spot", "Chihuahua", 10);
// let scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
// let beatrice = new ShowDog("Beatrice", "Pomeranian", 5, "Hamilton");
// fido.bark();
// fluffy.bark();
// spot.bark();
// scotty.bark();
// beatrice.bark();
// scotty.gait("Walk");
// beatrice.groom();

//-----------------------------------------------------------------------------------------------------

// function Robot(name,year,owner) {
//     this.name=name;
//     this.year=year;
//     this.owner=owner;
// }
// Robot.prototype.maker="fabric";
// Robot.prototype.speak=function () {
//     console.log(this.name+" is Speaking");
// };
// Robot.prototype.makeCoffee=function () {
//     console.log(this.name+" make coffee for "+this.owner);
// };
// Robot.prototype.blinkLights=function () {
//     console.log(this.name+" blinks light 4 times");
// };
//
// function SpaceRobot(name, year, owner, homePlanet) {
//     Robot.call(this, name,year,owner);
//     this.homePlanet=homePlanet;
// }
// SpaceRobot.prototype = new Robot();
// SpaceRobot.prototype.constructor=SpaceRobot;
// SpaceRobot.prototype.speak = function() {
//     alert(this.name + " says Sir, If I may venture an opinion...");
// };
// SpaceRobot.prototype.pilot = function() {
//     alert(this.name + " says Thrusters? Are they important?");
// };
// let c3po = new SpaceRobot("C3PO", 1977, "Luke Skywalker", "Tatooine");
// c3po.speak();
// c3po.pilot();
// console.log(c3po.name + " was made by " + c3po.maker);
// let simon = new SpaceRobot("Simon", 2009, "Carla Diana", "Earth");
// simon.makeCoffee();
// simon.blinkLights();
// simon.speak();

//-----------------------------------------------------------------------------------------------

String.prototype.palindrome=function () {
    if(this.toString()===this.split("").reverse().join("")){
        return true;
    }else{
        return false;
    }
};
console.log("polop".palindrome());
console.log("polopl".palindrome());