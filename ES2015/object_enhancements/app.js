//Same keys and values ES2015
function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

//Computed Property Names ES2015
let favoriteNumber = 42;

const instructorOne = {
    firstName: "Colt",
    [favoriteNumber]: "that is my favorite!"
}

//Object Methods ES2015
const instructor = {
    firstName: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
}

//createAnimal function
const dog = createAnimal('dog', 'bark', 'woooof');

const cat = createAnimal('cat', 'meow', 'purrrr');

function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}