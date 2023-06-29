import { Beverage, DarkRoast } from "./Beverage";
import { Milk, Caramel, Soy } from "./Ingredients";

let darkRoast: Beverage = new DarkRoast();

// Order A
let milk = new Milk(darkRoast);
console.log(`Coffee with milk costs ${milk.cost()}`);

// Order B
let soy = new Soy(darkRoast);
let caramel = new Caramel(soy);
console.log(`Soy caramel cofee costs ${caramel.cost()}`);

// Order C
soy = new Soy(darkRoast);
caramel = new Caramel(soy);
const milkCarmelSoyAmericano = new Milk(caramel);

console.log(`Milk Carmel Soy Americano costs ${milkCarmelSoyAmericano.cost()}`);
