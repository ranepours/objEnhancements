createInstructor = (firstName, lastName) => {
    return {
        firstName,
        lastName
    }
}

const favoriteNumber = 42;
const instructor = {
    firstName: 'Colt',
    [favoriteNumber]: "That's my favorite!"
}

const instructorAgain = {
    firstName: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return `${this.firstName} says bye!`;
    }
}

createAnimal = (species, verb, noise) => {
    return {
        species,
        verb,
        noise
    }
}