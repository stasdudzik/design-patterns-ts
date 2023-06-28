// imagine we are in "Star Cafe"
// we need company to be able to serve drinks

interface DrinkInterface {
  description: string;
  price: number;
  milk: boolean;
  topping: boolean;

  getDescription(): string;
  getPrice(): number;
  getMilk(): boolean;
  addMilk(): void;
  getTopping(): boolean;
  addTopping(): void;
}

class Drink implements DrinkInterface {
  public description: string;
  public price: number;
  public milk: boolean;
  public topping: boolean;

  constructor(milk?: boolean, topping?: boolean) {
    this.milk = milk;
    this.topping = topping;
  }

  getPrice() {
    if (this.getMilk()) {
      this.addMilk();
    }

    if (this.getTopping()) {
      this.addTopping();
    }
    return this.price;
  }

  getDescription() {
    return this.description;
  }

  getMilk() {
    return this.milk;
  }
  addMilk() {
    this.price = this.price + 2;
  }
  getTopping() {
    return this.topping;
  }
  addTopping() {
    this.price = this.price + 1.5;
  }
}

class Cappucino extends Drink {
  price = 6;
  description = "Classic milky coffee drink served before noon";
}

class WildFrappucino extends Drink {
  price = 8;
  description = "Whatever cocktails you get in Starbucks nowadays";
}

const order1 = new Cappucino(true, false);
const order2 = new Cappucino(true, true);
const order3 = new WildFrappucino(false, false);
const order4 = new WildFrappucino(true, true);

console.log({
  order1: order1.getPrice(),
  order2: order2.getPrice(),
  order3: order3.getPrice(),
  order4: order4.getPrice(),
});
