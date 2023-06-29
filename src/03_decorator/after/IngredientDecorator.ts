import { Beverage } from "./Beverage";

export default abstract class IngredientDecorator extends Beverage {
  public abstract cost(): number;
}
