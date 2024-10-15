// Create the adventurer object.
/*const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"]
    }
   
    // Create a loop to log each item in Robin's inventory.
for (let item of adventurer.inventory) {
    console.log(item);
}

// Add "Leo" to the adventurer..!
/*const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name:"Leo",
        type: "Cat"
    }
}; 
// Adding Frank, Leo's companion:
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
      name: "Leo",
      type: "Cat",
      companion: {
        name: "Frank",
        type: "Flea",
        inventory: ["small hat", "sunglasses"]
      }
    },
    // Adding roll method to adventurer. 
    //The (mod = 0) part is the parameter list for this function.
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  };
  // Create Character class.
  class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log('${this.name} rolled a ${result}.');
}
  }
  // Recreate Robin using the Character class.
const robin = new Character ('Robin');
robin.inventory = ["sword", "potion", "artifact"];
robin. companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion = "Flea";
robin.companion.companion.inventory = ["small hat", "sunnies"];
*/

//Part 1 & 2 - Humble Beginnings + Class Fantasy
// Create the Character class
class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
        return result;
    }
}

// Create Robin using the Character class
const robin = new Character('Robin');
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// Demonstrate functionality
console.log("Robin's inventory:");
for (let item of robin.inventory) {
    console.log(item);
}

robin.roll();
robin.companion.roll();
robin.companion.companion.roll();

console.log(robin);

// Part 3 - Class Features - Extend with Adventurer class.
// Adventurer class extending Character
class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");

    }

    scout() {
        console.log('${this.name} is scouting ahead...');
        super.roll();
    }

    // Additinoal method for Adventurers
    rest() {
        console.log('${this.name} sets up the camp and rests.');
        this.health = Math.min(100, this.health + 10);
    }
}

// Companion class extending Character
class Companion extends Character {
    constuctor(name, type) {
        super(name);
        this.type = type;
    }

    // Unique method for companion(s)
    assist(adventurer) {
        console.log('${this.name} assist ${adventurer.name}.');
        adventurer.roll(2); // Assist gives a +2 bonus to the roll
        
    }
}

// Create instances using the new classes
const robin = new Adventurer("Robin", "Rouge");
const leo = new Companion("Leo", "Cat");
const frank = new Companion("Frank", "Flea");

// Set up the companion relstionships
robin.companion = leo;
leo.companion = frank;

// Demo the new structure
console.log(robin);
robin.scout();
robin.rest();
leo.assist(robin);

// Part 4 - Class Uniforms
class Character {
    static MAX_HEALTH = 100;

    constuctor(name) {
        this.name = name;
        this.health = Character.MAX_HEALTH;
        this.inventory = [];
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
        return result;
      }
    }
    
    class Adventurer extends Character {
      static ROLES = ["Fighter", "Healer", "Wizard"];
    
      constructor(name, role) {
        super(name);
        if (Adventurer.ROLES.includes(role)) {
          this.role = role;
        } else {
          throw new Error("Invalid role");
        }
        this.inventory.push("bedroll", "50 gold coins");
      }
    
      scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
      }
    }
    
    // Example: 
    try {
      const robin = new Adventurer("Robin", "Fighter");
      console.log(robin);
      robin.scout();
    
      // This will throw an error
      // const invalidAdventurer = new Adventurer("Invalid", "InvalidRole");
    } catch (error) {
      console.error(error.message);
    }
    
    console.log("Max Health:", Character.MAX_HEALTH);
    console.log("Available Roles:", Adventurer.ROLES);

// Part 5:
// AdventureFactory class for generating multiple adventures of the same role.
class AdventurerFactory {
    constructor(role) {
        // Ensure the role is valid
        if(!Adventurer.ROLES.includes(role)) {
            throw new Error("Invalid role for AdventurerFactory");
        }
this.role = role;
this.adventurers = []; // Array to store created adventures
    }
}

// Method to generate a new adventurer
generate (name) {
const newAdventurer = new Adventurer(name, this.role);
this.adventurer.push(newAdventurer);
return newAdventurer;
}

// Method to find an adventurer by their index in the array
findByIndex(index) {
    if (index < 0 || index >= this.adventureres.length) {
        throw new Error("Invalid index");
    }
return this.adventurers[index];
}

// Method to find an adventurer by their name
findByName(name) {
    return this.adventurers.find((a) => a.name === name);
}
    // Method to get the count of adventurers
    get count () {
        return this.adventures.length;

    }

    // Example use: example of error handling when trying to create an invalid factory
    console.log('Creating Healer factory:');
    const healerFactory = new AdventurerFactory("Healer");

    console.log("Generating healers:");
    const robin = healerFavroty.generate("Robin");
    const galad = healerFactory.generate("Galad");
    const alice = healerFactory.generate("Alice");

console.log('Created ${healerFactory.count} healers');

console.log("\nFinding healers:");
console.log("First healer:", healerFavtory.findByIndex(0).name);
console.log("Healer named Galad", healerFactory.findByName("Galad").name);


console.log("\nTrying to create an invalid factory:");
try {
} catch (error) {
    console.error("Error", error.message);
}