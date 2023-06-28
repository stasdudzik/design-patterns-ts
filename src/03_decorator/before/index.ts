// imagine we are in "Star Cafe"
// we need company to be able to serve drinks

interface DrinkInterface {
  description: string;
  price: number;
  getDescription(): string;
  getPrice(): number;
}

class Drink implements DrinkInterface {
  public description: string;
  public price: number;
  constructor(description: string, price: number) {
    this.description = description;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.description;
  }
}
