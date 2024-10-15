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