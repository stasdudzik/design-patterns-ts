import { Knife, Weapon } from "./weapons";

interface HeroData {
  name: string;
  class: Character;
  weapon: Weapon;
  greeting: string;

  setWeapon(weapon: Weapon): void;
  attack(): void;
}

export enum Character {
  Queen = "Queen",
  King = "King",
  Troll = "Troll",
  Knight = "Knight",
}

export class Hero implements HeroData {
  name: string;
  class: Character;
  greeting: string;
  weapon: Weapon;

  constructor(heroData: Partial<HeroData>) {
    this.name = heroData.name;
    this.class = heroData.class;
    this.greeting = heroData.greeting;
    this.weapon = new Knife();
  }

  setWeapon(weapon: Weapon): void {
    this.weapon = weapon;
  }

  attack(): void {
    this.weapon.useWeapon();
  }

  greet(): void {
    console.log(this.greeting);
  }
}
