// Define the base class
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Static method that can be accessed without creating an instance
    static category() {
        return 'Mammal';
    }

    // Method to display properties
    displayInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Category: ${Animal.category()}`;
    }
}

// Subclass inheriting from Animal
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age); // Call the parent class constructor
        this.breed = breed;
    }

    // Override display method to include breed
    displayInfo() {
        return `${super.displayInfo()}, Breed: ${this.breed}`;
    }
}

// Create an instance of the subclass
const myDog = new Dog('Buddy', 5, 'Golden Retriever');

// Select the output div from the HTML
const outputDiv = document.getElementById('output');

// Display the properties and category by accessing the method
outputDiv.textContent = myDog.displayInfo();