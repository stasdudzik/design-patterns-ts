function getRandomNumInRange(min = 0, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export interface Weapon {
  minPower?: number;
  maxPower: number;
  useWeapon(): void;
}

export class Sword implements Weapon {
  maxPower = 10;
  useWeapon(): void {
    console.log(
      `Swoosh cut with a sword ${getRandomNumInRange(0, this.maxPower)}`
    );
  }
}

export class Bow implements Weapon {
  maxPower = 8;
  useWeapon(): void {
    console.log(`Arrow in the knee! ${getRandomNumInRange(0, this.maxPower)}`);
  }
}

export class Axe implements Weapon {
  maxPower = 15;
  useWeapon(): void {
    console.log(`Baaam with an axe! ${getRandomNumInRange(0, this.maxPower)}`);
  }
}

export class Knife implements Weapon {
  maxPower = 6;
  useWeapon(): void {
    console.log(`Cuuut with a knife! ${getRandomNumInRange(0, this.maxPower)}`);
  }
}

export class Club implements Weapon {
  maxPower = 8;
  useWeapon(): void {
    console.log(`BAAANG with a club! ${getRandomNumInRange(0, this.maxPower)}`);
  }
}
