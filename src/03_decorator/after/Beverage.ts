import { Prices } from "./Prices";

export abstract class Beverage {
  public description: string;

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

export class DarkRoast extends Beverage {
  cost() {
    return Prices.BASE_COFFEE;
  }
}
