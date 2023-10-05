class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        // console.log(make, model, year);
    }
    honk() {
        console.log("Beep");
    }
    toString() {
        console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}.`);
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
    
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        console.log("VROOM!!!");
    }
    
}

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            console.log("Only vehicles are allowed in here!");
        } else if (this.vehicles.length < this.capacity) {
            this.vehicles.push(newVehicle);
            console.log("Vehicle added!");
        } else {
            console.log("Sorry, we're full.");
        }
    }
}