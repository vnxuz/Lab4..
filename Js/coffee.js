const output = document.querySelector("#output");


/* Parent Coffee class */
class Coffee {

    // Constructor properties
    size;
    isDecaf;


    constructor(size, isDecaf) {
        this.size = size;
        this.isDecaf = isDecaf;
    }


    // Creates and displays coffee cup image
    serveIt() {

        let cup = document.createElement("img");

        // Select cup image depending on caffeine
        if (this.isDecaf) {
            cup.setAttribute("src", "images/coffee-cup-green.svg");
        } 
        else {
            cup.setAttribute("src", "images/coffee-cup-purple.svg");
        }


        // Set cup size
        switch (this.size) {

            case "small":
                cup.setAttribute("height", 100);
                break;

            case "medium":
                cup.setAttribute("height", 150);
                break;

            case "large":
                cup.setAttribute("height", 200);
                break;

            default:
                cup.setAttribute("height", 150);
        }


        cup.setAttribute("title", `A ${this.size} coffee.`);

        output.appendChild(cup);
    }
}



/* Subclass of Coffee */
class Mocha extends Coffee {

    // New properties
    shots;
    flavour;


    constructor(size, isDecaf, shots, flavour) {

        // Pass size and isDecaf to Coffee
        super(size, isDecaf);

        this.shots = shots;
        this.flavour = flavour;
    }


    // Custom description method
    describeDrink() {

        return `A ${this.size} Mocha with ${this.shots} shots and ${this.flavour} syrup.`;

    }

}



/* Create two Mocha objects */

let mocha1 = new Mocha("large", false, 2, "caramel");

let mocha2 = new Mocha("medium", true, 1, "vanilla");



/* Use inherited serveIt() method */

mocha1.serveIt();

mocha2.serveIt();



/* Display custom descriptions */

output.innerHTML += `<br>${mocha1.describeDrink()}<br>`;

output.innerHTML += `${mocha2.describeDrink()}`;
