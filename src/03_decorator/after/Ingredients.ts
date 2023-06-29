import { Beverage } from "./Beverage";
import IngredientDecorator from "./IngredientDecorator";
import { Prices } from "./Prices";

export class Caramel extends IngredientDecorator {
  public beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  cost() {
    return this.beverage.cost() + Prices.CARAMEL;
  }
}

export class Soy extends IngredientDecorator {
  public beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  cost() {
    return this.beverage.cost() + Prices.SOY;
  }
}

export class Milk extends IngredientDecorator {
  public beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  cost() {
    return this.beverage.cost() + Prices.MILK;
  }
}
