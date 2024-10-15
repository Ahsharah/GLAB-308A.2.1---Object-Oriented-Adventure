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



}
