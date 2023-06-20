import { Bow, Axe, Sword, Club } from "./weapons";
import { Character, Hero } from "./characters";

const queen = new Hero({
  name: "Elisabeth",
  class: Character.Queen,
});

const king = new Hero({
  name: "Charles",
  class: Character.King,
});

const troll = new Hero({
  name: "Bibi",
  class: Character.Troll,
});

const knight = new Hero({
  name: "Harry",
  class: Character.Knight,
});

knight.setWeapon(new Sword());
troll.setWeapon(new Club());
king.setWeapon(new Axe());
queen.setWeapon(new Bow());

knight.attack();
troll.attack();
king.attack();
queen.attack();
